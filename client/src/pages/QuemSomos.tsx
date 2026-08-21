import Layout from "@/components/Layout";
import ClientLogosSlideshow from "@/components/ClientLogosSlideshow";
import {
  Section,
  SectionHeader,
  Grid,
  FeatureCard,
  CTAButton,
} from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /quem-somos — shape v4.
 *
 * REMOVIDO (nao existe mais no contrato nem no pt.ts):
 *   whatWeDontDo — "O que nao fazemos". Bom conteudo, perdido na recuperacao
 *   do outro chat. Fica como pendencia; se quiser de volta, e um campo novo
 *   em types.ts + pt.ts, nao um ajuste deste arquivo.
 *
 * SUBSTITUIDO:
 *   niche + differentiator -> forWhom { title, text, distinction }.
 *   distinction nao tem titulo proprio no dado, entao os dois paragrafos
 *   (text + distinction) ficam juntos sob o unico titulo forWhom.title,
 *   em vez de inventar um segundo cabecalho que nao existe no conteudo.
 *
 * NOVO (a pagina antiga nao usava):
 *   architectMetaphor — "Trabalhamos como arquitetos". Secao propria.
 *   partnersTitle — heading acima do slideshow de logos (antes nao tinha).
 *
 * manifesto.signature nao existe mais (so ficou "closing", que ja carrega
 * a frase de fecho). A linha extra em signal foi removida.
 */
export default function QuemSomos() {
  const c = useContent();
  const { about } = c;

  return (
    <Layout>
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {about.hero.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed mb-10">
              {about.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                label={c.cta.primary}
                href={c.cta.href}
                variant="primary"
              />
              <CTAButton
                label={c.cta.secondary}
                href={c.cta.methodHref}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trabalhamos como arquitetos */}
      <Section tone="bone" firstContent>
        <div className="max-w-measure border-l-2 border-signal pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {about.architectMetaphor.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">
            {about.architectMetaphor.body}
          </p>
        </div>
      </Section>

      {/* Missão + Visão */}
      <Section tone="bone">
        <Grid cols={2}>
          <div className="bg-bone border-t-2 border-abyss p-8">
            <h2 className="text-xl font-bold text-abyss mb-4">
              {about.mission.title}
            </h2>
            <p className="text-lg text-abyss/70 leading-relaxed">
              {about.mission.text}
            </p>
          </div>
          <div className="bg-bone border-t-2 border-signal p-8">
            <h2 className="text-xl font-bold text-abyss mb-4">
              {about.vision.title}
            </h2>
            <p className="text-lg text-abyss/70 leading-relaxed">
              {about.vision.text}
            </p>
          </div>
        </Grid>
      </Section>

      {/* Valores */}
      <Section tone="bone">
        <SectionHeader
          title={about.values.title}
          subtitle={about.values.subtitle}
        />
        <Grid cols={3} className="gap-y-10">
          {about.values.items.map((value) => (
            <FeatureCard
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </Grid>
      </Section>

      {/* Para quem trabalhamos (funde texto + distincao sob um so titulo) */}
      <Section tone="bone">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {about.forWhom.title}
          </h2>
          <p className="text-abyss/70 leading-relaxed mb-4">
            {about.forWhom.text}
          </p>
          <p className="text-abyss/70 leading-relaxed">
            {about.forWhom.distinction}
          </p>
        </div>
      </Section>

      {/* Parceiros */}
      <Section tone="bone">
        <SectionHeader title={about.partnersTitle} />
        <ClientLogosSlideshow />
      </Section>

      {/* Manifesto */}
      <Section tone="ink">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-signal mb-10 tracking-tight">
            {about.manifesto.title}
          </h2>

          <div className="space-y-6">
            {about.manifesto.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base text-bone/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="text-2xl md:text-3xl font-bold text-bone mt-12 leading-snug">
            {about.manifesto.closing}
          </p>
        </div>
      </Section>

      <Section tone="bone" size="sm">
        <div className="text-center">
          <CTAButton
            label={c.cta.primary}
            href={c.cta.href}
            variant="primary"
          />
          <p className="mt-8 text-sm font-semibold tracking-widest text-abyss/70 uppercase">
            {c.brand.microcopy}
          </p>
        </div>
      </Section>
    </Layout>
  );
}
