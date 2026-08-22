import { Client } from "@notionhq/client";
import type { InsightListItem, InsightArticle } from "../shared/insights";

/**
 * Insights (blog) usa o Notion como CMS — decisao do cliente (22/08/2026):
 * ele ja escreve no Notion todo dia, entao "alimentar" o blog e so criar
 * uma pagina na database "Insights — Site Creation" e marcar Status como
 * "Publicado". O site nunca embute o Notion — busca via API e renderiza
 * os blocos com o proprio design system (ver notionBlocksToReact no
 * client), pra ficar 100% nativo visualmente.
 *
 * Requer duas variaveis de ambiente (o cliente precisa criar a
 * integracao em notion.so/my-integrations, compartilhar a database com
 * ela, e nos passar o token):
 *   NOTION_TOKEN                    — secret da integracao interna
 *   NOTION_INSIGHTS_DATA_SOURCE_ID  — id do data source (tem um default
 *                                     abaixo, ja apontando pra database
 *                                     criada nesta sessao)
 */
const DATA_SOURCE_ID =
  process.env.NOTION_INSIGHTS_DATA_SOURCE_ID || "3e57a531-ca24-4ed2-8bbe-b4e19cc94c39";

const notion = process.env.NOTION_TOKEN ? new Client({ auth: process.env.NOTION_TOKEN }) : null;

// Cache simples em memoria (o Notion rate-limita ~3 req/s; um blog
// institucional nao precisa de dado em tempo real, 5 min de cache
// evita bater na API a cada carregamento de pagina).
const CACHE_TTL_MS = 5 * 60 * 1000;
let listCache: { data: InsightListItem[]; expiresAt: number } | null = null;
const articleCache = new Map<string, { data: InsightArticle | null; expiresAt: number }>();

function extractCoverUrl(page: any): string | null {
  const files = page.properties?.["Imagem de capa"]?.files;
  if (!files || files.length === 0) return null;
  const file = files[0];
  return file.file?.url ?? file.external?.url ?? null;
}

function pageToListItem(page: any): InsightListItem {
  const props = page.properties;
  return {
    id: page.id,
    slug: props["Slug"]?.rich_text?.[0]?.plain_text ?? "",
    title: props["Título"]?.title?.[0]?.plain_text ?? "",
    excerpt: props["Resumo"]?.rich_text?.[0]?.plain_text ?? "",
    category: (props["Categoria"]?.multi_select ?? []).map((c: any) => c.name),
    language: props["Idioma"]?.select?.name ?? "PT",
    publishedDate: props["Data de publicação"]?.date?.start ?? null,
    author: props["Autor"]?.rich_text?.[0]?.plain_text ?? "",
    coverImageUrl: extractCoverUrl(page),
  };
}

export function isNotionConfigured(): boolean {
  return notion !== null;
}

export async function listPublishedInsights(lang?: string): Promise<InsightListItem[]> {
  if (!notion) return [];

  if (listCache && listCache.expiresAt > Date.now()) {
    return lang ? listCache.data.filter((item) => item.language === lang) : listCache.data;
  }

  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    filter: { property: "Status", select: { equals: "Publicado" } },
    sorts: [{ property: "Data de publicação", direction: "descending" }],
  });

  const items = response.results.map(pageToListItem);
  listCache = { data: items, expiresAt: Date.now() + CACHE_TTL_MS };
  return lang ? items.filter((item) => item.language === lang) : items;
}

async function fetchAllBlocks(blockId: string): Promise<any[]> {
  if (!notion) return [];
  const blocks: any[] = [];
  let cursor: string | undefined;
  do {
    const response = await notion.blocks.children.list({ block_id: blockId, start_cursor: cursor });
    blocks.push(...response.results);
    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
  } while (cursor);

  // Busca filhos de blocos aninhados (ex.: itens de lista com sub-blocos).
  for (const block of blocks) {
    if (block.has_children) {
      block.children = await fetchAllBlocks(block.id);
    }
  }
  return blocks;
}

export async function getInsightBySlug(slug: string, lang: string): Promise<InsightArticle | null> {
  if (!notion) return null;

  const cacheKey = `${slug}:${lang}`;
  const cached = articleCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.data;

  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    filter: {
      and: [
        { property: "Status", select: { equals: "Publicado" } },
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Idioma", select: { equals: lang } },
      ],
    },
    page_size: 1,
  });

  const page = response.results[0];
  if (!page) {
    articleCache.set(cacheKey, { data: null, expiresAt: Date.now() + CACHE_TTL_MS });
    return null;
  }

  const blocks = await fetchAllBlocks(page.id);
  const article: InsightArticle = { ...pageToListItem(page), blocks };
  articleCache.set(cacheKey, { data: article, expiresAt: Date.now() + CACHE_TTL_MS });
  return article;
}
