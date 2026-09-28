import { useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Section, SectionHeader } from "@/components/primitives";
import PhotoFrame from "@/components/PhotoFrame";
import { useLang, useLocalizedHref } from "@/content";
import { categoryChipClasses } from "@/lib/categoryColor";
import type { InsightListItem } from "@shared/insights";

/**
 * /insights — listagem de artigos. Conteudo vem do Notion (CMS — ver
 * server/notion.ts), buscado via /api/insights. Pagina renderiza um
 * estado vazio explicito quando ainda nao ha artigos publicados, em vez
 * de mostrar uma lista vazia sem explicacao.
 */
export default function Insights() {
  const lang = useLang();
  const localize = useLocalizedHref();
  const [items, setItems] = useState<InsightListItem[] | null>(null);
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/insights?lang=${lang}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data) => {
        if (cancelled) return;
        setItems(data.items ?? []);
        setConfigured(data.configured ?? false);
      })
      .catch(() => {
        if (cancelled) return;
        setItems([]);
        setConfigured(false);
      });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);

  return (
    <Layout>
      <section className="relative bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-measure">
            <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
              INSIGHTS
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {t(
                "Ideias e aprendizados de quem executa.",
                "Ideas and lessons from the people who deliver.",
                "Ideas y aprendizajes de quienes ejecutan.",
              )}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {t(
                "Reflexões sobre estratégia, gestão e operação, direto da prática da Creation.",
                "Reflections on strategy, management and operations, straight from Creation's practice.",
                "Reflexiones sobre estrategia, gestión y operación, directo de la práctica de Creation.",
              )}
            </p>
          </div>
        </div>
      </section>

      <Section tone="white">
        {items === null ? (
          <p className="text-abyss/60">{t("Carregando...", "Loading...", "Cargando...")}</p>
        ) : items.length === 0 ? (
          <div className="max-w-measure">
            <SectionHeader
              title={
                configured
                  ? t("Ainda sem artigos publicados.", "No articles published yet.", "Aún sin artículos publicados.")
                  : t(
                      "Insights ainda está sendo preparado.",
                      "Insights is still being set up.",
                      "Insights aún está en preparación.",
                    )
              }
              subtitle={t(
                "Volte em breve. Os primeiros artigos estão a caminho.",
                "Check back soon. The first articles are on their way.",
                "Vuelve pronto. Los primeros artículos están en camino.",
              )}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link key={item.slug} href={localize(`/insights/${item.slug}`)}>
                <article className="rounded-2xl border border-abyss/10 bg-bone/50 hover:bg-spark/5 hover:border-spark/30 active:scale-[0.98] transition-all cursor-pointer h-full overflow-hidden group">
                  {item.coverImageUrl ? (
                    <PhotoFrame src={item.coverImageUrl} alt={item.title} className="h-44" />
                  ) : (
                    <div className="h-44 bg-abyss/5" />
                  )}
                  <div className="p-6">
                    {item.category.length > 0 && (
                      <span
                        className={`inline-block text-caption font-semibold mb-2 uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryChipClasses(item.category[0])}`}
                      >
                        {item.category[0]}
                      </span>
                    )}
                    <h3 className="text-h3 font-semibold text-abyss group-hover:text-spark transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-abyss/70 leading-relaxed text-small">{item.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </Layout>
  );
}
