import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import Layout from "@/components/Layout";
import { Section } from "@/components/primitives";
import PhotoFrame from "@/components/PhotoFrame";
import NotionRenderer from "@/components/notion/NotionRenderer";
import { useLang, useLocalizedHref } from "@/content";
import { ArrowLeft } from "lucide-react";
import { categoryChipClasses } from "@/lib/categoryColor";
import type { InsightArticle } from "@shared/insights";

/**
 * /insights/:slug — artigo individual. Busca o artigo publicado no
 * Notion (server/notion.ts) e renderiza os blocos com o design system
 * proprio (NotionRenderer), nao um embed do Notion.
 */
export default function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const lang = useLang();
  const localize = useLocalizedHref();
  const [article, setArticle] = useState<InsightArticle | null | undefined>(undefined);

  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);

  useEffect(() => {
    let cancelled = false;
    setArticle(undefined);
    fetch(`/api/insights/${slug}?lang=${lang}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) setArticle(data);
      })
      .catch(() => {
        if (!cancelled) setArticle(null);
      });
    return () => {
      cancelled = true;
    };
  }, [slug, lang]);

  if (article === null) {
    return (
      <Layout>
        <Section tone="white" size="lg">
          <div className="max-w-measure mx-auto text-center">
            <h1 className="font-display text-h1 font-bold text-abyss mb-4">
              {t("Artigo não encontrado.", "Article not found.", "Artículo no encontrado.")}
            </h1>
            <Link href={localize("/insights")}>
              <span className="text-spark font-semibold cursor-pointer hover:underline">
                {t("Voltar para Insights", "Back to Insights", "Volver a Insights")}
              </span>
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Link href={localize("/insights")}>
            <span className="inline-flex items-center gap-2 text-small font-semibold text-abyss/60 hover:text-spark mb-6 cursor-pointer transition-colors">
              <ArrowLeft className="h-4 w-4" />
              {t("Insights", "Insights", "Insights")}
            </span>
          </Link>
          {article === undefined ? (
            <p className="text-abyss/60">{t("Carregando...", "Loading...", "Cargando...")}</p>
          ) : (
            <>
              {article.category.length > 0 && (
                <span
                  className={`inline-block text-caption font-semibold mb-4 uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryChipClasses(article.category[0])}`}
                >
                  {article.category[0]}
                </span>
              )}
              <h1 className="font-display text-display sm:text-5xl font-bold text-abyss mb-6">
                {article.title}
              </h1>
              <div className="flex items-center gap-3 text-small text-abyss/60 mb-10">
                {article.author && <span>{article.author}</span>}
                {article.publishedDate && (
                  <>
                    <span>·</span>
                    <span>
                      {new Date(article.publishedDate).toLocaleDateString(
                        lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "pt-BR",
                        { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
                      )}
                    </span>
                  </>
                )}
              </div>
              {article.coverImageUrl && (
                <PhotoFrame src={article.coverImageUrl} alt={article.title} className="rounded-2xl h-64 md:h-80 mb-10" />
              )}
            </>
          )}
        </div>
      </section>

      {article && (
        <Section tone="white">
          <div className="max-w-3xl mx-auto">
            <NotionRenderer blocks={article.blocks} />
          </div>
        </Section>
      )}
    </Layout>
  );
}
