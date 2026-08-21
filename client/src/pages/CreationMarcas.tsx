import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /creation-marcas — landing nova, consome c.creationMarcasPage. Ainda
 * oculta do menu (nao publicavel ate validacao propria).
 *
 * REDESIGN (pedido do cliente): emula o padrao de pagina interna do
 * notion.com (ex. notion.com/enterprise) — hero em coluna unica
 * centralizada (sem foto: a hero-creation-marcas.jpg original era uma
 * placa de loja de "e-regulariza", outro negocio, removida por engano de
 * asset), grids de cards arredondados (rounded-2xl) e sem hairlines
 * divisorias entre secoes. Mesmos primitivos/classes do StubPageLayout,
 * pra manter as 4 paginas de Solucoes Creation e as 19 paginas da
 * Arquitetura V2 com a mesma linguagem visual.
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
          <p className="text-xl text-abyss/70 leading-relaxed max-w-measure mx-auto mb-10">
            {page.intro}
          </p>
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
        </div>
      </section>

      {/* Por que registrar cedo */}
      <Section tone="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.whyEarly.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">
            {page.whyEarly.body}
          </p>
        </div>
      </Section>

      {/* O que fazemos */}
      <Section tone="white">
        <SectionHeader title={page.whatWeDo.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {page.whatWeDo.items.map((item) => (
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

      {/* Diferencial */}
      <Section tone="ink" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.differentiator.title}
          </h2>
          <p className="text-bone/70 leading-relaxed">
            {page.differentiator.body}
          </p>
        </div>
      </Section>

      {/* Como funciona */}
      <Section tone="white">
        <SectionHeader title={page.howItWorks.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {page.howItWorks.steps.map((step, i) => (
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

      {/* Para quem + CTA */}
      <Section tone="abyss" size="lg">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-caption font-semibold text-bone/70 mb-4 uppercase tracking-widest">
            {c.labels.forWhom}
          </p>
          <p className="text-bone text-lg leading-relaxed mb-8">{page.forWhom}</p>
          <CTAButton
            label={c.cta.primary}
            href={c.cta.href}
            variant="primary"
            onDark
          />
        </div>
      </Section>
    </Layout>
  );
}
