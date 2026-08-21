import Layout from "@/components/Layout";
import ClientLogosSlideshow from "@/components/ClientLogosSlideshow";
import {
  Section,
  SectionHeader,
  Grid,
  FeatureCard,
  CTAButton,
} from "@/components/primitives";
import { useContent, useLang } from "@/content";

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
 *
 * REDESIGN (pedido do cliente — paleta/diagramacao notion.com): era a
 * ultima pagina do nucleo publicavel ainda no visual antigo (fundo bege
 * "bone" do topo ao fim, barra lateral "signal", cards com border-t
 * hairline). Passa a fundo branco predominante com acento "spark", hero
 * centralizado em coluna unica (mesmo padrao de Home/StubPageLayout) e
 * cards arredondados (rounded-2xl) no lugar do border-t/border-l. O
 * Manifesto continua em fundo escuro (tone="ink") — e a unica secao
 * escura da pagina, papel que ja cumpria bem.
 */
export default function QuemSomos() {
  const c = useContent();
  const lang = useLang();
  const { about } = c;
  const eyebrow = lang === "en" ? "ABOUT US" : lang === "es" ? "QUIÉNES SOMOS" : "QUEM SOMOS";

  return (
    <Layout>
      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
            {eyebrow}
          </p>
          <h1 className="font-display text-display sm:text-6xl md:text-7xl font-extrabold text-abyss mb-6">
            {about.hero.title}
          </h1>
          <p className="text-xl text-abyss/70 leading-relaxed max-w-measure mx-auto mb-10">
            {about.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* Trabalhamos como arquitetos */}
      <Section tone="white">
        <div className="max-w-measure border-l-2 border-spark pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {about.architectMetaphor.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">
            {about.architectMetaphor.body}
          </p>
        </div>
      </Section>

      {/* Missão + Visão */}
      <Section tone="white">
        <Grid cols={2}>
          <div className="rounded-2xl border border-abyss/10 bg-bone/50 p-8">
            <h2 className="text-xl font-bold text-abyss mb-4">
              {about.mission.title}
            </h2>
            <p className="text-lg text-abyss/70 leading-relaxed">
              {about.mission.text}
            </p>
          </div>
          <div className="rounded-2xl border border-spark/30 bg-spark/5 p-8">
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
      <Section tone="white">
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
      <Section tone="white">
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
      <Section tone="white">
        <SectionHeader title={about.partnersTitle} />
        <ClientLogosSlideshow />
      </Section>

      {/* Manifesto — unica secao escura da pagina */}
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

      <Section tone="abyss" size="lg">
        <div className="max-w-2xl mx-auto text-center">
          <CTAButton
            label={c.cta.primary}
            href={c.cta.href}
            variant="primary"
            onDark
          />
          <p className="mt-8 text-sm font-semibold tracking-widest text-bone/70 uppercase">
            {c.brand.microcopy}
          </p>
        </div>
      </Section>
    </Layout>
  );
}
