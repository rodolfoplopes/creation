import { getSEOForPath, generateOGMetaTags } from "./server/seoConfig";

/**
 * Vercel Edge Middleware — roda na borda, ANTES de qualquer rewrite do
 * vercel.json. E o substituto do middleware de crawler que existia dentro
 * do server/index.ts (Express), que nunca era executado em producao porque
 * o Vercel nao roda esse projeto como servidor persistente — so estatico
 * + funcoes. Isso aqui e a forma nativa do Vercel de resolver exatamente
 * esse caso (conteudo diferente pra bot vs. usuario comum), sem precisar
 * de servidor.
 *
 * RISCO CONHECIDO, sinalizado de proposito: esse e o primeiro Edge
 * Middleware desse tipo (fetch da origem + reescrita de HTML, fora de
 * Next.js) que escrevo nesse projeto. A logica em si segue o padrao
 * documentado, mas nao tenho como testar antes de voce aplicar — se o
 * comportamento nao for o esperado (loop, erro 500, timeout), me manda o
 * resultado exato que eu ajusto.
 */

const crawlerUserAgents = [
  "facebookexternalhit",
  "Facebot",
  "Twitterbot",
  "LinkedInBot",
  "WhatsApp",
  "Slackbot",
  "TelegramBot",
  "Pinterest",
  "Googlebot",
  "bingbot",
];

export const config = {
  // Mesma logica do vercel.json: qualquer caminho sem ponto e sem /api/.
  matcher: "/((?!api/)(?!.*\\..*).*)",
};

export default async function middleware(request: Request) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCrawler = crawlerUserAgents.some((crawler) =>
    userAgent.toLowerCase().includes(crawler.toLowerCase()),
  );

  // Nao e rastreador: deixa passar normal, sem tocar em nada.
  if (!isCrawler) {
    return;
  }

  const url = new URL(request.url);

  // Busca o HTML estatico que seria servido normalmente (depois do
  // rewrite do vercel.json pro index.html).
  const originResponse = await fetch(request);
  let html = await originResponse.text();

  const { lang } = getSEOForPath(url.pathname);
  html = html.replace('<html lang="en">', `<html lang="${lang}">`);

  const ogTags = generateOGMetaTags(url.pathname);
  html = html.replace("<!-- OG_META_TAGS_PLACEHOLDER -->", ogTags);

  return new Response(html, {
    status: originResponse.status,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}