import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLocalizedHref } from "@/content";
import type { StubPageData } from "@/content/stubData";

/**
 * Renderizador generico das paginas da Arquitetura V2 ainda em stub (ver
 * stubData.ts). Reusa os primitivos visuais existentes (Section,
 * SectionHeader, CTAButton) — nao e um redesign, e a validacao da nova
 * arquitetura de menu com o visual atual.
 *
 * DESIGN V7.1 piloto (mesmo tratamento aprovado na Home — ver
 * CapacidadesSection/EspecialidadesSection/HeroSection): fundo branco
 * predominante (era tone "bone" no grid de filhos) com o acento "spark"
 * pontual (dot no eyebrow, hover dos cards e do link de voltar).
 * Experimental, ainda sem validacao formal do time de design do cliente.
 */
export default function StubPageLayout({ data }: { data: StubPageData }) {
  const localize = useLocalizedHref();

  return (
    <Layout>
      <section className="relative bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {data.parentHref && data.parentLabel && (
            <Link href={localize(data.parentHref)}>
              <span className="inline-flex items-center gap-2 text-small font-semibold text-abyss/60 hover:text-spark mb-6 cursor-pointer transition-colors">
                <ArrowLeft className="h-4 w-4" />
                {data.parentLabel}
              </span>
            </Link>
          )}
          <div className="max-w-measure">
            <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
              {data.eyebrow}
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">{data.intro}</p>
            {data.lead && (
              <p className="mt-4 text-lg text-abyss/70 leading-relaxed">
                {data.lead}
              </p>
            )}
          </div>
        </div>
      </section>

      {data.children && data.children.length > 0 && (
        <Section tone="white" divider>
          <SectionHeader title={data.childrenLabel ?? "O que podemos assumir"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-abyss/14 border border-abyss/14">
            {data.children.map((child) => (
              <Link key={child.href} href={localize(child.href)}>
                <article className="bg-white hover:bg-spark/5 p-8 h-full transition-colors cursor-pointer group">
                  <h3 className="text-h3 font-semibold text-abyss group-hover:text-spark transition-colors mb-2">
                    {child.title}
                  </h3>
                  <p className="text-abyss/70 leading-relaxed">
                    {child.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section tone="abyss" size="lg" divider={!data.children?.length}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 sm:text-h1 font-bold text-bone mb-6">
            {data.title}
          </h2>
          <CTAButton label={data.ctaLabel} href={data.ctaHref} onDark />
        </div>
      </Section>
    </Layout>
  );
}
