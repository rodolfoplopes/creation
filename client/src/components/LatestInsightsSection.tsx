import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import PhotoFrame from "@/components/PhotoFrame";
import { categoryChipClasses } from "@/lib/categoryColor";
import { useLang, useLocalizedHref } from "@/content";
import type { InsightListItem } from "@shared/insights";

/**
 * Teaser dos 3 artigos mais recentes do Insights na Home — pedido do
 * cliente depois de publicar os primeiros artigos ("Eles vao para a
 * Home?"). Some silenciosamente (retorna null) quando ainda nao ha
 * nenhum artigo publicado, em vez de mostrar uma secao vazia/quebrada
 * na Home — o estado "ainda sem artigos" so faz sentido dentro da
 * propria pagina /insights.
 */
export default function LatestInsightsSection() {
  const lang = useLang();
  const localize = useLocalizedHref();
  const [items, setItems] = useState<InsightListItem[] | null>(null);

  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/insights?lang=${lang}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) setItems(data?.items ?? []);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  if (!items || items.length === 0) return null;

  const latest = items.slice(0, 3);

  return (
    <Section id="insights" tone="white" divider>
      <SectionHeader
        title={t("Últimos Insights", "Latest Insights", "Últimos Insights")}
        subtitle={t(
          "Reflexões sobre estratégia, gestão e operação, direto da prática da Creation.",
          "Reflections on strategy, management and operations, straight from Creation's practice.",
          "Reflexiones sobre estrategia, gestión y operación, directo de la práctica de Creation.",
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {latest.map((item) => (
          <Link key={item.slug} href={localize(`/insights/${item.slug}`)}>
            <article className="rounded-2xl border border-abyss/10 bg-bone/50 hover:bg-spark/5 hover:border-spark/30 active:scale-[0.98] transition-all cursor-pointer h-full overflow-hidden group">
              {item.coverImageUrl ? (
                <PhotoFrame src={item.coverImageUrl} alt={item.title} className="h-40" />
              ) : (
                <div className="h-40 bg-abyss/5" />
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
      <CTAButton
        label={t("Ver todos os Insights", "See all Insights", "Ver todos los Insights")}
        href="/insights"
        variant="secondary"
      />
    </Section>
  );
}
