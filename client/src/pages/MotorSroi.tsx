import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /motor-sroi — landing nova, consome c.motorSroiPage. Ainda oculta do
 * menu (nao publicavel ate validacao propria).
 *
 * REDESIGN (pedido do cliente): mesmo padrao de pagina interna do
 * notion.com aplicado nas outras 3 Solucoes Creation ocultas — hero em
 * coluna unica centralizada, sem foto (a hero-motor-sroi.jpg original era
 * uma foto generica de banco de imagens sem relacao real com o produto),
 * grid de cards arredondados (rounded-2xl) no lugar do FeatureCard com
 * borda lateral, sem divisorias entre secoes.
 */
export default function MotorSroi() {
  const c = useContent();
  const page = c.motorSroiPage;

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

      {/* O que o Motor SROI faz hoje */}
      <Section tone="white">
        <SectionHeader title={page.functions.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {page.functions.items.map((item) => (
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

      {/* Por que medir com dado real */}
      <Section tone="ink" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.whyRealData.title}
          </h2>
          <p className="text-bone/70 leading-relaxed">{page.whyRealData.body}</p>
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