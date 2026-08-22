import { listPublishedInsights, isNotionConfigured } from "../server/notion.js";

/**
 * Funcao serverless do Vercel (convencao de pasta api/ na raiz) — ver
 * api/contact.ts pro racional completo de por que as rotas do Express
 * em server/routes.ts nunca rodam em producao. GET /api/insights lista
 * os artigos publicados do Insights (CMS = Notion, ver server/notion.ts).
 */
export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const langParam = String(req.query.lang ?? "pt");
    const lang = { pt: "PT", en: "EN", es: "ES" }[langParam] ?? "PT";
    const items = await listPublishedInsights(lang);
    return res.status(200).json({ items, configured: isNotionConfigured() });
  } catch (error) {
    console.error("Insights list error:", error);
    return res.status(500).json({ error: "Failed to load insights" });
  }
}
