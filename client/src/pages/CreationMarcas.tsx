import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /creation-marcas — landing nova, consome c.creationMarcasPage. Ainda
 * oculta do menu (nao publicavel ate validacao juridica/operacional —
 * ver notas de implementacao do doc 21-Creation-Marcas.md).
 *
 * RECONSTRUCAO DE CONTEUDO (auditoria contra doc 21-Creation-Marcas.md):
 * a versao anterior tinha H1, escopo de servico ("O que fazemos" com 2
 * itens genericos) e numero de etapas (4) divergentes do doc aprovado, e
 * omitia secoes juridicas obrigatorias: "O que este servico nao
 * garante", "Honorarios, retribuicoes e servicos adicionais" e "Como
 * comecar". Reescrita integral com a estrutura real do doc: processo x
 * promessa de aprovacao, as 7 etapas do atendimento, o que o cliente
 * recebe (com a nota de vigencia de 10 anos), honorarios/retribuicoes
 * separados dos oficiais do INPI, o disclaimer do que o servico nao
 * garante e como comecar.
 */
export default function CreationMarcas() {
  const c = useContent();
  const page = c.creationMarcasPage;

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
          <div className="space-y-4 mb-10">
            {page.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-xl text-abyss/70 leading-relaxed max-w-measure mx-auto">
                {paragraph}
              </p>
            ))}
          </div>
          <CTAButton label={page.heroCtaLabel} href={c.cta.href} variant="primary" />
        </div>
      </section>

      {/* Registrar é um processo, não uma promessa de aprovação */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.process.title}
          </h2>
          <div className="space-y-4">
            {page.process.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Etapas que podem fazer parte do atendimento */}
      <Section tone="white">
        <SectionHeader title={page.steps.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {page.steps.items.map((step, i) => (
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

      {/* O que você recebe */}
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

      {/* Honorários, retribuições e serviços adicionais */}
      <Section tone="white">
        <SectionHeader title={page.fees.title} subtitle={page.fees.intro} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.fees.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.fees.note}</p>
      </Section>

      {/* O que este serviço não garante */}
      <Section tone="ink" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.doesNotGuarantee.title}
          </h2>
          <ul className="space-y-2 text-left max-w-md mx-auto mb-6">
            {page.doesNotGuarantee.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-bone/70 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-bone/60 text-small leading-relaxed">{page.doesNotGuarantee.note}</p>
        </div>
      </Section>

      {/* Como começar */}
      <Section tone="white">
        <SectionHeader title={page.howToStart.title} subtitle={page.howToStart.intro} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.howToStart.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.howToStart.note}</p>
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
