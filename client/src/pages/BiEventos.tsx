import Layout from "@/components/Layout";
import { Section, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /bi-de-eventos — landing nova, consome c.biEventosPage. Ainda oculta do
 * menu (nao publicavel ate validacao propria).
 *
 * REDESIGN (pedido do cliente): mesmo padrao de pagina interna do
 * notion.com aplicado nas outras 3 Solucoes Creation ocultas — hero em
 * coluna unica centralizada, sem foto (a hero-bi-eventos.jpg original era
 * uma foto generica de banco de imagens sem relacao real com o produto),
 * sem divisorias entre secoes.
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
          <p className="text-xl text-abyss/70 leading-relaxed max-w-measure mx-auto mb-10">
            {page.intro}
          </p>
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
        </div>
      </section>

      {/* O que medimos */}
      <Section tone="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.whatWeMeasure.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">{page.whatWeMeasure.body}</p>
        </div>
      </Section>

      {/* Um medidor externo e independente */}
      <Section tone="ink" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.externalRead.title}
          </h2>
          <p className="text-bone/70 leading-relaxed">{page.externalRead.body}</p>
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