import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PhotoFrame from "@/components/PhotoFrame";
import SectionNav from "@/components/SectionNav";
import { MethodologyCard, MetricsGrid, DataTable } from "@/components/MethodologyCard";
import { useContent, useLang } from "@/content";

const navLabels = {
  pt: [
    { id: "o-que-e-sroi", label: "O que é" },
    { id: "prontidao", label: "Prontidão" },
    { id: "jornada", label: "Jornada" },
    { id: "entregaveis", label: "Entregáveis" },
    { id: "exemplo", label: "Exemplo" },
    { id: "limites", label: "Limites" },
    { id: "consultivo", label: "Consultivo" },
  ],
  en: [
    { id: "o-que-e-sroi", label: "What it is" },
    { id: "prontidao", label: "Readiness" },
    { id: "jornada", label: "Journey" },
    { id: "entregaveis", label: "Deliverables" },
    { id: "exemplo", label: "Example" },
    { id: "limites", label: "Limits" },
    { id: "consultivo", label: "Advisory" },
  ],
  es: [
    { id: "o-que-e-sroi", label: "Qué es" },
    { id: "prontidao", label: "Preparación" },
    { id: "jornada", label: "Recorrido" },
    { id: "entregaveis", label: "Entregables" },
    { id: "exemplo", label: "Ejemplo" },
    { id: "limites", label: "Límites" },
    { id: "consultivo", label: "Consultivo" },
  ],
};

// Card de exemplo (ilustrativo) portado de projetos/metodologias/
// creation-cards-site/cards/21-motor-sroi.html — ver MethodologyCard.tsx.
const sroiExample = {
  pt: {
    title: "Motor SROI",
    description: "Cálculo de retorno social sobre investimento — metodologias SVI e CBPS.",
    label: "Exemplo ilustrativo",
    metrics: [
      { label: "Razão SROI", value: "4,20", unit: " : 1", sub: "valor por real investido", lead: true },
      { label: "Valor social", value: "R$ 2,1M", sub: "líquido, 12 meses" },
      { label: "Investimento", value: "R$ 500k", sub: "total aportado" },
      { label: "Requisitos", value: "15", sub: "8 SVI + 7 CBPS" },
    ],
    columns: ["Resultado (outcome)", "Proxy financeiro", "Qtd.", "Ajuste líquido", "Valor"],
    rows: [
      ["Renda familiar ampliada", "Salário-mínimo/ano", "120", "−28% peso morto", "R$ 980k"],
      ["Empregabilidade", "Custo de recolocação", "85", "−15% atribuição", "R$ 620k"],
      ["Bem-estar comunitário", "Proxy de saúde", "340", "−20% decaimento", "R$ 500k"],
    ],
    disclaimer: "Valores ilustrativos, para demonstração. Substituídos pelos dados reais do projeto.",
  },
  en: {
    title: "SROI Engine",
    description: "Social return on investment calculation — SVI and CBPS methodologies.",
    label: "Illustrative example",
    metrics: [
      { label: "SROI ratio", value: "4.20", unit: " : 1", sub: "value per dollar invested", lead: true },
      { label: "Social value", value: "$2.1M", sub: "net, 12 months" },
      { label: "Investment", value: "$500k", sub: "total contributed" },
      { label: "Requirements", value: "15", sub: "8 SVI + 7 CBPS" },
    ],
    columns: ["Outcome", "Financial proxy", "Qty.", "Net adjustment", "Value"],
    rows: [
      ["Increased household income", "Minimum wage/year", "120", "−28% deadweight", "$980k"],
      ["Employability", "Reemployment cost", "85", "−15% attribution", "$620k"],
      ["Community wellbeing", "Health proxy", "340", "−20% drop-off", "$500k"],
    ],
    disclaimer: "Illustrative values, for demonstration. Replaced with the project's real data.",
  },
  es: {
    title: "Motor SROI",
    description: "Cálculo de retorno social sobre la inversión — metodologías SVI y CBPS.",
    label: "Ejemplo ilustrativo",
    metrics: [
      { label: "Razón SROI", value: "4,20", unit: " : 1", sub: "valor por real invertido", lead: true },
      { label: "Valor social", value: "R$ 2,1M", sub: "neto, 12 meses" },
      { label: "Inversión", value: "R$ 500k", sub: "total aportado" },
      { label: "Requisitos", value: "15", sub: "8 SVI + 7 CBPS" },
    ],
    columns: ["Resultado (outcome)", "Proxy financiero", "Cant.", "Ajuste neto", "Valor"],
    rows: [
      ["Renta familiar ampliada", "Salario mínimo/año", "120", "−28% peso muerto", "R$ 980k"],
      ["Empleabilidad", "Costo de recolocación", "85", "−15% atribución", "R$ 620k"],
      ["Bienestar comunitario", "Proxy de salud", "340", "−20% decaimiento", "R$ 500k"],
    ],
    disclaimer: "Valores ilustrativos, para demostración. Sustituidos por los datos reales del proyecto.",
  },
};

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
  const heroImageAlt =
    lang === "en"
      ? "Person holding a printed return-on-investment calculation sheet"
      : lang === "es"
        ? "Persona sosteniendo una hoja impresa de cálculo de retorno sobre la inversión"
        : "Pessoa segurando uma folha impressa de cálculo de retorno sobre investimento";
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
        <PhotoFrame src="/images/heroes/motor-sroi.webp" alt={heroImageAlt} className="rounded-2xl shadow-sm h-[280px] md:h-[420px]" />
      </div>

      <SectionNav items={navLabels[lang]} />

      {/* O que é SROI — layout alternado (texto + imagem), emula
          notion.com: quebra o ritmo de secoes sempre iguais */}
      <Section id="o-que-e-sroi" tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
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
          <img
            src="/images/methodologies/teoria-da-mudanca.webp"
            alt={
              lang === "en"
                ? "Theory of Change card — logic chain from inputs to impact"
                : lang === "es"
                  ? "Tarjeta Teoría del Cambio — cadena lógica de insumos a impacto"
                  : "Card Teoria da Mudança — cadeia lógica de insumos a impacto"
            }
            className="w-full h-auto rounded-2xl shadow-sm"
          />
        </div>
      </Section>

      {/* Antes do cálculo, uma pergunta de prontidão */}
      <Section id="prontidao" tone="white">
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
      <Section id="jornada" tone="white">
        <SectionHeader title={page.journey.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {page.journey.steps.map((step, i) => (
            <div key={step.title} className="border-l-2 border-spark pl-6 py-1">
              {/* Processo mostrado, nao so descrito (pedido do cliente,
                  emula notion.com): a etapa "Escopo e stakeholders" ganha foto. */}
              {i === 0 && (
                <ImagePlaceholder hint={stepImageHint} className="mb-4 h-32" />
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
      <Section id="entregaveis" tone="white">
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

      {/* Exemplo ilustrativo do entregavel (pedido do cliente: mostrar o
          dado, nao so descreve-lo — ver MethodologyCard.tsx) */}
      <Section id="exemplo" tone="bone">
        <SectionHeader
          title={
            lang === "en" ? "What a report looks like" : lang === "es" ? "Cómo se ve un informe" : "Como um relatório se parece"
          }
          subtitle={
            lang === "en"
              ? "An illustrative example — not the result of any real project."
              : lang === "es"
                ? "Un ejemplo ilustrativo — no es el resultado de ningún proyecto real."
                : "Um exemplo ilustrativo — não é o resultado de nenhum projeto real."
          }
        />
        <MethodologyCard
          title={sroiExample[lang].title}
          description={sroiExample[lang].description}
          label={sroiExample[lang].label}
          disclaimer={sroiExample[lang].disclaimer}
        >
          <MetricsGrid items={sroiExample[lang].metrics} />
          <DataTable columns={sroiExample[lang].columns} rows={sroiExample[lang].rows} />
        </MethodologyCard>
      </Section>

      {/* O que a razão não pode esconder */}
      <Section id="limites" tone="ink" size="sm">
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
      <Section id="consultivo" tone="white">
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
