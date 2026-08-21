import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /ong-zero — landing nova, consome c.ongZeroPage. Ainda oculta do menu
 * (nao publicavel ate validacao propria).
 *
 * REDESIGN (pedido do cliente): mesmo padrao de pagina interna do
 * notion.com aplicado em CreationMarcas.tsx/MotorSroi.tsx/BiEventos.tsx —
 * hero em coluna unica centralizada, sem foto (a hero-ong-zero.jpg
 * original era um windsock generico de banco de imagens, sem relacao
 * real com o produto), grid de cards arredondados (rounded-2xl) no lugar
 * da grade de linhas horizontais com hairline, sem divisorias entre
 * secoes.
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
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
        </div>
      </section>

      {/* Construimos junto */}
      <Section tone="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.buildTogether.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">{page.buildTogether.body}</p>
        </div>
      </Section>

      {/* As 5 etapas */}
      <Section tone="white">
        <SectionHeader title={page.stages.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {page.stages.items.map((stage, i) => (
            <div key={stage.title} className="border-l-2 border-spark pl-6 py-1">
              <p className="text-caption font-semibold text-spark mb-2 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-h3 font-semibold text-abyss mb-2">{stage.title}</h3>
              <p className="text-abyss/70 leading-relaxed">{stage.description}</p>
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