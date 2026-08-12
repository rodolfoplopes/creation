import Layout from "@/components/Layout";
import { Section, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /ong-zero — landing nova, consome c.ongZeroPage.
 * "stages" (5 etapas) nao tem numero no dado (TitledItem so tem title+
 * description) — numeracao gerada aqui pelo indice, igual fiz no
 * howItWorks de CreationMarcas.
 */
export default function OngZero() {
  const c = useContent();
  const page = c.ongZeroPage;

  return (
    <Layout>
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              {page.eyebrow}
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {page.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Construimos junto */}
      <Section tone="bone" divider firstContent>
        <div className="max-w-measure border-l-2 border-signal pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.buildTogether.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">
            {page.buildTogether.body}
          </p>
        </div>
      </Section>

      {/* As 5 etapas */}
      <Section tone="bone" divider>
        <h2 className="font-display text-h2 font-bold text-abyss mb-10">
          {page.stages.title}
        </h2>
        <div className="space-y-px bg-abyss/10">
          {page.stages.items.map((stage, i) => (
            <div
              key={stage.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-bone p-8 md:p-10"
            >
              <div className="lg:col-span-1">
                <span className="font-display text-h1 font-black text-abyss/20 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="lg:col-span-3">
                <h3 className="font-display text-h3 font-bold text-abyss">
                  {stage.title}
                </h3>
              </div>
              <div className="lg:col-span-8 lg:border-l lg:border-abyss/14 lg:pl-8">
                <p className="text-abyss/70 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Para quem + CTA */}
      <Section tone="abyss" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-bone/70 mb-2 uppercase tracking-widest">
              {c.labels.forWhom}
            </p>
            <p className="text-bone/70 leading-relaxed">{page.forWhom}</p>
          </div>
          <CTAButton
            label={c.cta.primary}
            href={c.cta.href}
            variant="primary"
            onDark
            className="shrink-0"
          />
        </div>
      </Section>
    </Layout>
  );
}
