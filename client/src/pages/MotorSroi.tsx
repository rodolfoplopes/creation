import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useContent, useLang } from "@/content";

/**
 * /motor-sroi — landing nova, consome c.motorSroiPage. Ainda oculta do
 * menu (nao publicavel ate validacao propria).
 *
 * RECONSTRUCAO DE CONTEUDO (auditoria contra doc 24-Motor-SROI.md): a
 * versao anterior chamava o Motor SROI de "uma ferramenta" (calculo
 * automatizado) — o doc aprovado diz o oposto de forma explicita: "o
 * nome Motor SROI representa uma jornada organizada de trabalho... nao
 * descreve uma ferramenta automatizada nem uma certificacao." Reescrita
 * integral com a estrutura real do doc: O que e SROI, prontidao antes do
 * calculo, a jornada de 6 etapas, entregaveis, o disclaimer "o que a
 * razao nao pode esconder" e o disclaimer central "servico consultivo,
 * nao calculo automatico".
 */
export default function MotorSroi() {
  const c = useContent();
  const page = c.motorSroiPage;
  const lang = useLang();
  const heroImageHint =
    lang === "en"
      ? "Photo of a team analyzing social impact data or in a stakeholder session"
      : lang === "es"
        ? "Foto de un equipo analizando datos de impacto social o en una sesión con partes interesadas"
        : "Foto de equipe analisando dados de impacto social ou em sessão com stakeholders";
  const stepImageHint =
    lang === "en"
      ? "Photo of a stakeholder session defining SROI scope"
      : lang === "es"
        ? "Foto de una sesión con partes interesadas definiendo el alcance del SROI"
        : "Foto de sessão com stakeholders definindo o escopo do SROI";

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

      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24 pb-14 md:pb-20">
        <ImagePlaceholder hint={heroImageHint} />
      </div>

      {/* O que é SROI */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.whatIsSroi.title}
          </h2>
          <div className="space-y-4">
            {page.whatIsSroi.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Antes do cálculo, uma pergunta de prontidão */}
      <Section tone="white">
        <SectionHeader title={page.readiness.title} subtitle={page.readiness.intro} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.readiness.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.readiness.note}</p>
      </Section>

      {/* Uma jornada possível */}
      <Section tone="white">
        <SectionHeader title={page.journey.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {page.journey.steps.map((step, i) => (
            <div key={step.title} className="border-l-2 border-spark pl-6 py-1">
              {/* Processo mostrado, nao so descrito (pedido do cliente,
                  emula notion.com): a etapa "Escopo e stakeholders" ganha foto. */}
              {i === 0 && (
                <ImagePlaceholder hint={stepImageHint} className="rounded-xl mb-4 h-32" />
              )}
              <p className="text-caption font-semibold text-spark mb-2 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-h3 font-semibold text-abyss mb-2">{step.title}</h3>
              <p className="text-abyss/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Entregáveis possíveis */}
      <Section tone="white">
        <SectionHeader title={page.deliverables.title} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl">
          {page.deliverables.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* O que a razão não pode esconder */}
      <Section tone="ink" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.whatRatioCantHide.title}
          </h2>
          <div className="space-y-4">
            {page.whatRatioCantHide.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-bone/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Serviço consultivo, não cálculo automático */}
      <Section tone="white">
        <div className="max-w-measure border-l-2 border-spark pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.consultiveDisclaimer.title}
          </h2>
          <div className="space-y-4">
            {page.consultiveDisclaimer.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
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
