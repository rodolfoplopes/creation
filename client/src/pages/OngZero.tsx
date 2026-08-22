import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /ong-zero — landing nova, consome c.ongZeroPage. Ainda oculta do menu
 * (nao publicavel ate validacao operacional, contabil e juridica — ver
 * notas de implementacao do doc 22-ONG-zero.md).
 *
 * RECONSTRUCAO DE CONTEUDO (auditoria contra doc 22-ONG-zero.md): a
 * versao anterior tinha um H1 diferente do aprovado, uma jornada de 5
 * etapas genericas (Conceito/Abertura/Organizacao/Marca/Captacao) em vez
 * das 7 etapas reais do doc, e omitia secoes importantes: "Para quem"
 * (com a ressalva de que constituir pessoa juridica nem sempre e o
 * melhor caminho), "Entregaveis possiveis" (14 itens) e, principalmente,
 * "O que a ONG.zero nao promete" — disclaimer que evita prometer
 * qualificacao fiscal, captacao garantida ou substituir assessoria
 * juridica/contabil.
 */
export default function OngZero() {
  const c = useContent();
  const page = c.ongZeroPage;

  return (
    <Layout>
      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
            {page.eyebrow}
          </p>
          <h1 className="font-display text-display sm:text-6xl md:text-7xl font-extrabold text-abyss mb-6">
            {page.title}
          </h1>
          <p className="text-xl text-abyss/70 leading-relaxed max-w-measure mx-auto mb-10">
            {page.intro}
          </p>
          <CTAButton label={page.heroCtaLabel} href={c.cta.href} variant="primary" />
        </div>
      </section>

      {/* O começo costuma reunir urgência e pouca estrutura */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.beginning.title}
          </h2>
          <div className="space-y-4">
            {page.beginning.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Para quem */}
      <Section tone="white">
        <SectionHeader title={page.forWhom.title} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.forWhom.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.forWhom.note}</p>
      </Section>

      {/* Uma jornada possível (7 etapas) */}
      <Section tone="white">
        <SectionHeader title={page.journey.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {page.journey.steps.map((step, i) => (
            <div key={step.title} className="border-l-2 border-spark pl-6 py-1">
              <p className="text-caption font-semibold text-spark mb-2 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-h3 font-semibold text-abyss mb-2">{step.title}</h3>
              <p className="text-abyss/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Entregáveis possíveis */}
      <Section tone="white">
        <SectionHeader title={page.deliverables.title} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.deliverables.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.deliverables.note}</p>
      </Section>

      {/* O que a ONG.zero não promete */}
      <Section tone="ink" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.doesNotPromise.title}
          </h2>
          <ul className="space-y-2 text-left max-w-md mx-auto mb-6">
            {page.doesNotPromise.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-bone/70 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-bone/60 text-small leading-relaxed">{page.doesNotPromise.note}</p>
        </div>
      </Section>

      {/* Estrutura proporcional ao estágio */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.proportionalStructure.title}
          </h2>
          <div className="space-y-4">
            {page.proportionalStructure.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Fechamento */}
      <Section tone="abyss" size="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 sm:text-h1 font-bold text-bone mb-6">
            {page.closing.title}
          </h2>
          <p className="text-bone/70 text-lg leading-relaxed mb-8">{page.closing.body}</p>
          <CTAButton label={page.closing.ctaLabel} href={c.cta.href} variant="primary" onDark />
        </div>
      </Section>
    </Layout>
  );
}
