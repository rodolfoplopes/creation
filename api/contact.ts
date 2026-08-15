import { Resend } from "resend";

/**
 * Funcao serverless do Vercel (convencao de pasta api/ na raiz).
 * Substitui a rota /api/contact que vivia em server/routes.ts, rodando
 * dentro de um Express que nunca era executado em producao — o vercel.json
 * mandava QUALQUER caminho sem ponto (incluindo /api/contact) direto pro
 * index.html, antes de chegar em qualquer servidor.
 *
 * Sem tipos do @vercel/node de proposito — evita instalar dependencia nova
 * (mesmo cuidado do incidente do "sharp" hoje mais cedo, que quebrou o
 * build por causa do registro interno do Replit). req/res tipados como
 * any; o runtime do Vercel ja faz parse automatico de JSON em req.body,
 * igual o express.json() fazia antes.
 */
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

    return res.status(200).json({ success: true, message: "Message sent successfully", id: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Failed to process contact form" });
  }
}
