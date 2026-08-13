import Layout from "@/components/Layout";
import { Image as ImageIcon } from "lucide-react";
import { Section, Grid, FeatureCard, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /creation-marcas — landing nova, consome c.creationMarcasPage.
 * Mesma linguagem visual das paginas de area (hero com barra signal,
 * secoes Section/tone alternadas).
 */
export default function CreationMarcas() {
  const c = useContent();
  const page = c.creationMarcasPage;

  return (
    <Layout>
      <section className="relative bg-white py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            {/* Slot de imagem — aguardando foto real. Trocar por <img src="..." />
                quando o arquivo chegar. */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3] bg-bone border border-abyss/14 overflow-hidden flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-abyss/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que registrar cedo */}
      <Section tone="white" divider firstContent>
        <div className="max-w-measure border-l-2 border-signal pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.whyEarly.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">
            {page.whyEarly.body}
          </p>
        </div>
      </Section>

      {/* O que fazemos */}
      <Section tone="ink" divider>
        <h2 className="font-display text-h2 font-bold text-bone mb-8">
          {page.whatWeDo.title}
        </h2>
        <Grid cols={2}>
          {page.whatWeDo.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              onDark
            />
          ))}
        </Grid>
      </Section>

      {/* Diferencial */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.differentiator.title}
          </h2>
          <p className="text-abyss/70 leading-relaxed">
            {page.differentiator.body}
          </p>
        </div>
      </Section>

      {/* Como funciona */}
      <Section tone="white" divider>
        <h2 className="font-display text-h2 font-bold text-abyss mb-10">
          {page.howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {page.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="border-t-2 border-abyss pt-4">
              <span className="font-display text-h3 font-black text-abyss/20 tabular-nums block mb-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-h3 font-bold text-abyss mb-2">
                {step.title}
              </h3>
              <p className="text-small text-abyss/70 leading-relaxed">
                {step.description}
              </p>
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
