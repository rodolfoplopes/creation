import { getInsightBySlug } from "../../server/notion.js";

/**
 * Funcao serverless do Vercel — ver api/contact.ts pro racional. Rota
 * dinamica de arquivo ([slug].ts) — o Vercel expoe o segmento em
 * req.query.slug automaticamente, mesma convencao do Next.js.
 * GET /api/insights/:slug retorna um artigo publicado (Notion como CMS).
 */
export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const langParam = String(req.query.lang ?? "pt");
    const lang = { pt: "PT", en: "EN", es: "ES" }[langParam] ?? "PT";
    const slug = String(req.query.slug ?? "");
    const article = await getInsightBySlug(slug, lang);
    if (!article) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(article);
  } catch (error) {
    console.error("Insight article error:", error);
    return res.status(500).json({ error: "Failed to load insight" });
  }
}
