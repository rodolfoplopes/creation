import Layout from "@/components/Layout";
import { Image as ImageIcon } from "lucide-react";
import { Section, Grid, FeatureCard, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /motor-sroi — landing nova, consome c.motorSroiPage.
 */
export default function MotorSroi() {
  const c = useContent();
  const page = c.motorSroiPage;

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

      {/* O que o Motor SROI faz hoje */}
      <Section tone="white" divider firstContent>
        <h2 className="font-display text-h2 font-bold text-abyss mb-8">
          {page.functions.title}
        </h2>
        <Grid cols={2}>
          {page.functions.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Grid>
      </Section>

      {/* Por que medir com dado real */}
      <Section tone="ink" size="sm">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.whyRealData.title}
          </h2>
          <p className="text-bone/70 leading-relaxed">
            {page.whyRealData.body}
          </p>
        </div>
      </Section>

      {/* Para quem + CTA */}
      <Section tone="white" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
              {c.labels.forWhom}
            </p>
            <p className="text-abyss/70 leading-relaxed">{page.forWhom}</p>
          </div>
          <CTAButton
            label={c.cta.primary}
            href={c.cta.href}
            variant="primary"
            className="shrink-0"
          />
        </div>
      </Section>
    </Layout>
  );
}
