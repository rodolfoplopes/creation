// Tipos compartilhados entre server/notion.ts e as paginas de Insights
// no client. Mantidos em shared/ pra evitar duplicar a forma do dado
// entre backend e frontend.

export interface InsightListItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string[];
  language: string;
  publishedDate: string | null;
  author: string;
  coverImageUrl: string | null;
}

export interface InsightArticle extends InsightListItem {
  blocks: any[];
}
