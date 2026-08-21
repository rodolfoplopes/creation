import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { generateOGMetaTags, getSEOForPath } from "./seoConfig";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  // Serve language JSON files from public directory
  app.use(express.static(path.resolve(process.cwd(), "public"), { maxAge: "1h" }));

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Social media crawler detection middleware for OG tags in development
  const crawlerUserAgents = [
    'facebookexternalhit',
    'Facebot',
    'Twitterbot',
    'LinkedInBot',
    'WhatsApp',
    'Slackbot',
    'TelegramBot',
    'Pinterest',
    'Googlebot',
    'bingbot',
  ];

  app.use((req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const isCrawler = crawlerUserAgents.some(crawler => 
      userAgent.toLowerCase().includes(crawler.toLowerCase())
    );
    
    if (isCrawler && !req.path.startsWith('/api') && !req.path.includes('.')) {
      const clientTemplate = path.resolve(process.cwd(), "client", "index.html");
      let html = fs.readFileSync(clientTemplate, "utf-8");
      
      const url = req.originalUrl;
      const { lang } = getSEOForPath(url);
      html = html.replace('<html lang="en">', `<html lang="${lang}">`);
      
      const ogTags = generateOGMetaTags(url);
      html = html.replace('<!-- OG_META_TAGS_PLACEHOLDER -->', ogTags);
      
      res.setHeader('Content-Type', 'text/html');
      return res.send(html);
    }
    
    next();
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API e o client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);

  // reusePort:true e o que o Replit espera do ambiente de hosting dele.
  // Em Node 24 no macOS (testado: Darwin 21.6, `npm run dev` local), o
  // SO_REUSEPORT desse listen() da ENOTSUP e derruba o processo antes de
  // subir — quem tentasse rodar localmente num Mac ficava sem servidor
  // nenhum. macOS nao suporta SO_REUSEPORT da mesma forma que Linux;
  // como um processo unico de dev nao depende dessa opcao pra funcionar,
  // so omitimos ela fora do Linux (onde o Replit roda).
  const listenOptions =
    process.platform === "linux"
      ? { port, host: "0.0.0.0", reusePort: true }
      : { port, host: "0.0.0.0" };
  httpServer.listen(listenOptions, () => {
    log(`serving on port ${port}`);
  });
})();
