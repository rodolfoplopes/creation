import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /bi-de-eventos — landing nova, consome c.biEventosPage. Ainda oculta do
 * menu (nao publicavel ate validacao propria).
 *
 * RECONSTRUCAO DE CONTEUDO (auditoria contra doc 23-BI-de-Eventos.md):
 * a versao anterior tinha titulo diferente do aprovado ("Todo evento
 * produz dados" vs. "Dados de evento so tem valor quando melhoram uma
 * decisao") e uma secao ("Uma leitura de fora, sem interesse na
 * resposta") sem correspondencia no doc — cerca de 80% do conteudo
 * aprovado estava ausente. Reescrita integral com a estrutura real do
 * doc: medir comeca antes da abertura das inscricoes, perguntas que o
 * trabalho pode responder, escopo possivel, dimensoes consideraveis,
 * entregaveis possiveis, o disclaimer de dados pessoais e consentimento,
 * como trabalhamos e o fechamento.
 */
export default function BiEventos() {
  const c = useContent();
  const page = c.biEventosPage;

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
          <p className="text-xl text-abyss/70 leading-relaxed max-w-measure mx-auto mb-4">
            {page.intro}
          </p>
          <p className="text-lg text-abyss/70 leading-relaxed max-w-measure mx-auto mb-10">
            {page.body}
          </p>
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
        </div>
      </section>

      {/* Medir começa antes da abertura das inscrições */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.measuringStarts.title}
          </h2>
          <div className="space-y-4">
            {page.measuringStarts.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Perguntas que o trabalho pode responder */}
      <Section tone="white">
        <SectionHeader title={page.questions.title} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl">
          {page.questions.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Escopo possível */}
      <Section tone="white">
        <SectionHeader title={page.scope.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {page.scope.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-abyss/10 bg-bone/50 hover:bg-spark/5 hover:border-spark/30 transition-colors p-8"
            >
              <h3 className="text-h3 font-semibold text-abyss mb-2">{item.title}</h3>
              <p className="text-abyss/70 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Dimensões que podem ser consideradas */}
      <Section tone="white">
        <SectionHeader title={page.dimensions.title} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.dimensions.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.dimensions.note}</p>
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

      {/* Dados pessoais e consentimento */}
      <Section tone="ink" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.dataPrivacy.title}
          </h2>
          <div className="space-y-4">
            {page.dataPrivacy.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-bone/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Como trabalhamos */}
      <Section tone="white">
        <SectionHeader title={page.process.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {page.process.steps.map((step, i) => (
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
