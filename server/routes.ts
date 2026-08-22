import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { listPublishedInsights, getInsightBySlug, isNotionConfigured } from "./notion";

const langToNotion: Record<string, string> = { pt: "PT", en: "EN", es: "ES" };

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Insights (blog) — Notion como CMS. Ver server/notion.ts para o
  // racional completo. Sem NOTION_TOKEN configurado, retorna lista
  // vazia (o site trata isso como "ainda sem artigos publicados", nao
  // como erro).
  app.get("/api/insights", async (req, res) => {
    try {
      const lang = langToNotion[String(req.query.lang ?? "pt")] ?? "PT";
      const items = await listPublishedInsights(lang);
      res.json({ items, configured: isNotionConfigured() });
    } catch (error) {
      console.error("Insights list error:", error);
      res.status(500).json({ error: "Failed to load insights" });
    }
  });

  app.get("/api/insights/:slug", async (req, res) => {
    try {
      const lang = langToNotion[String(req.query.lang ?? "pt")] ?? "PT";
      const article = await getInsightBySlug(req.params.slug, lang);
      if (!article) return res.status(404).json({ error: "Not found" });
      res.json(article);
    } catch (error) {
      console.error("Insight article error:", error);
      res.status(500).json({ error: "Failed to load insight" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const {
        name,
        email,
        whatsapp,
        organization,
        projectType,
        projectStage,
        location,
        deadline,
        message,
      } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { data, error } = await resend.emails.send({
        from: "Creation <contato@creation-pro.com>",
        to: "info@creation-pro.com",
        replyTo: email,
        subject: `Novo contato pelo site — ${name}`,
        text: [
          `Nome: ${name}`,
          `E-mail: ${email}`,
          `WhatsApp/telefone: ${whatsapp || "-"}`,
          `Organizacao ou projeto: ${organization || "-"}`,
          `Com o que podemos ajudar: ${projectType || "-"}`,
          `Momento do projeto: ${projectStage || "-"}`,
          `Onde acontecera: ${location || "-"}`,
          `Prazo importante: ${deadline || "-"}`,
          "",
          "Desafio:",
          message,
        ].join("\n"),
      });
      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      res.json({ success: true, message: "Message sent successfully", id: data?.id });

    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });
  return httpServer;
}