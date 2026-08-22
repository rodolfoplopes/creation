import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { useContent, useLang, useLocalizedHref } from "@/content";
import { Link } from "wouter";
import { Check } from "lucide-react";

/**
 * /quem-somos — RECONSTRUCAO COMPLETA fiel ao doc aprovado
 * 30-Quem-Somos.md (pedido explicito do cliente apos auditoria de
 * conteudo contra os arquivos do Drive). A versao anterior desta pagina
 * (architectMetaphor/mission/vision/values/manifesto) nao correspondia a
 * nenhum trecho do doc aprovado — foi substituida integralmente pela
 * estrutura real do doc: Hero (fundacao 2009, Rodolfo Lopes) -> Uma
 * trajetoria construida entre disciplinas -> Projetos nao respeitam
 * organogramas -> No que acreditamos (5 crencas) -> Lideranca (bio do
 * fundador) -> Uma estrutura que se forma em torno do projeto -> Para
 * quem trabalhamos -> O que permanece desde 2009 (fechamento).
 *
 * OMITIDO DE PROPOSITO: o slideshow de logos de clientes (ClientLogos-
 * Slideshow) e a secao "Nossos parceiros" nao existem no doc 30 — foram
 * removidos daqui para manter fidelidade total. Se fizer sentido manter
 * esse elemento de prova social em algum lugar, e uma decisao separada
 * (nao esta no doc, entao nao entra nesta reconstrucao).
 *
 * DESIGN V7.1/notion.com (mantido da redesign anterior): fundo branco
 * predominante com acento "spark", hero centralizado em coluna unica,
 * cards em rounded-2xl. Liderança usa o mesmo card rounded-2xl. A unica
 * secao escura continua sendo o fechamento (tone="abyss").
 */
export default function QuemSomos() {
  const c = useContent();
  const lang = useLang();
  const localize = useLocalizedHref();
  const { about } = c;
  const eyebrow = lang === "en" ? "ABOUT US" : lang === "es" ? "QUIÉNES SOMOS" : "QUEM SOMOS";

  return (
    <Layout>
      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
            {eyebrow}
          </p>
          <h1 className="font-display text-display sm:text-6xl md:text-7xl font-extrabold text-abyss mb-8">
            {about.hero.title}
          </h1>
          <div className="space-y-4 text-left max-w-measure mx-auto mb-10">
            {about.hero.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-lg text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
            <CTAButton label={c.cta.secondary} href={c.cta.methodHref} variant="secondary" />
          </div>
        </div>
      </section>

      {/* Uma trajetória construída entre disciplinas */}
      <Section tone="white">
        <div className="max-w-measure border-l-2 border-spark pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {about.journey.title}
          </h2>
          <div className="space-y-4">
            {about.journey.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-lg text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Projetos não respeitam organogramas */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {about.orgCharts.title}
          </h2>
          <div className="space-y-4">
            {about.orgCharts.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* No que acreditamos */}
      <Section tone="white">
        <SectionHeader title={about.beliefs.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {about.beliefs.items.map((belief) => (
            <article
              key={belief.title}
              className="rounded-2xl border border-abyss/10 bg-bone/50 p-8"
            >
              <h3 className="text-h3 font-semibold text-abyss mb-2">{belief.title}</h3>
              <p className="text-abyss/70 leading-relaxed">{belief.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Liderança */}
      <Section tone="white">
        <SectionHeader title={about.leadership.title} />
        <div className="rounded-2xl border border-abyss/10 bg-bone/50 p-8 md:p-10 max-w-3xl">
          <h3 className="text-h3 font-bold text-abyss">{about.leadership.name}</h3>
          <p className="text-abyss font-semibold mb-4">{about.leadership.role}</p>
          <p className="text-abyss/70 leading-relaxed">{about.leadership.bio}</p>
        </div>
      </Section>

      {/* Uma estrutura que se forma em torno do projeto */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {about.structure.title}
          </h2>
          <div className="space-y-4">
            {about.structure.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Para quem trabalhamos */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-6">
            {about.forWhom.title}
          </h2>
          <ul className="space-y-3 mb-6">
            {about.forWhom.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
                <Check className="h-4 w-4 mt-1 shrink-0 text-spark" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-abyss/70 leading-relaxed">{about.forWhom.note}</p>
        </div>
      </Section>

      {/* O que permanece desde 2009 — fechamento */}
      <Section tone="abyss" size="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 sm:text-h1 font-bold text-bone mb-6">
            {about.closing.title}
          </h2>
          <p className="text-bone/70 text-lg leading-relaxed mb-10">{about.closing.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={localize("/cases")}>
              <span className="inline-flex items-center gap-2 border border-bone/30 text-bone px-8 py-4 font-semibold hover:border-bone transition-colors cursor-pointer">
                {about.closing.casesLabel}
              </span>
            </Link>
            <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" onDark />
          </div>
        </div>
      </Section>
    </Layout>
  );
}
