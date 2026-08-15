import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, organization, projectType, message } = req.body;

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
          `Organizacao: ${organization || "-"}`,
          `Tipo de projeto: ${projectType || "-"}`,
          "",
          "Mensagem:",
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