import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PhotoFrame from "@/components/PhotoFrame";
import SectionNav from "@/components/SectionNav";
import { useContent, useLang } from "@/content";

const navLabels = {
  pt: [
    { id: "comeco", label: "O começo" },
    { id: "para-quem", label: "Para quem" },
    { id: "jornada", label: "Jornada" },
    { id: "entregaveis", label: "Entregáveis" },
    { id: "nao-promete", label: "Não promete" },
    { id: "proporcional", label: "Estrutura" },
  ],
  en: [
    { id: "comeco", label: "The start" },
    { id: "para-quem", label: "Who it's for" },
    { id: "jornada", label: "Journey" },
    { id: "entregaveis", label: "Deliverables" },
    { id: "nao-promete", label: "Doesn't promise" },
    { id: "proporcional", label: "Structure" },
  ],
  es: [
    { id: "comeco", label: "El comienzo" },
    { id: "para-quem", label: "Para quién" },
    { id: "jornada", label: "Recorrido" },
    { id: "entregaveis", label: "Entregables" },
    { id: "nao-promete", label: "No promete" },
    { id: "proporcional", label: "Estructura" },
  ],
};

/**
 * /ong-zero — landing nova, consome c.ongZeroPage. Ainda oculta do menu
 * (nao publicavel ate validacao operacional, contabil e juridica — ver
 * notas de implementacao do doc 22-ONG-zero.md).
 *
 * RECONSTRUCAO DE CONTEUDO (auditoria contra doc 22-ONG-zero.md): a
 * versao anterior tinha um H1 diferente do aprovado, uma jornada de 5
 * etapas genericas (Conceito/Abertura/Organizacao/Marca/Captacao) em vez
 * das 7 etapas reais do doc, e omitia secoes importantes: "Para quem"
 * (com a ressalva de que constituir pessoa juridica nem sempre e o
 * melhor caminho), "Entregaveis possiveis" (14 itens) e, principalmente,
 * "O que a ONG.zero nao promete" — disclaimer que evita prometer
 * qualificacao fiscal, captacao garantida ou substituir assessoria
 * juridica/contabil.
 */
export default function OngZero() {
  const c = useContent();
  const page = c.ongZeroPage;
  const lang = useLang();
  const heroImageAlt =
    lang === "en"
      ? "Windsock against the sky, a symbol for finding direction from zero"
      : lang === "es"
        ? "Manga de viento contra el cielo, símbolo de encontrar la dirección desde cero"
        : "Manga de vento contra o céu, símbolo de encontrar a direção a partir do zero";
  const stepImageHint =
    lang === "en"
      ? "Photo of the first operating cycles of the implementation"
      : lang === "es"
        ? "Foto de los primeros ciclos de operación de la implementación"
        : "Foto dos primeiros ciclos de operação da implantação";
  const beginningImageHint =
    lang === "en"
      ? "Photo of an initial conversation with the leaders of a social initiative"
      : lang === "es"
        ? "Foto de una conversación inicial con los líderes de una iniciativa social"
        : "Foto de uma conversa inicial com lideranças de uma iniciativa social";
  const proportionalImageHint =
    lang === "en"
      ? "Photo of a team organizing internal processes or controls"
      : lang === "es"
        ? "Foto de un equipo organizando procesos o controles internos"
        : "Foto de equipe organizando processos ou controles internos";

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
          <CTAButton label={page.heroCtaLabel} href={c.cta.href} variant="primary" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24 pb-14 md:pb-20">
        <PhotoFrame src="/images/heroes/ong-zero.webp" alt={heroImageAlt} className="rounded-2xl shadow-sm h-[280px] md:h-[420px]" />
      </div>

      <SectionNav items={navLabels[lang]} />

      {/* O começo costuma reunir urgência e pouca estrutura — layout
          alternado (imagem + texto), emula notion.com */}
      <Section id="comeco" tone="white">
        {import.meta.env.DEV ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ImagePlaceholder hint={beginningImageHint} className="h-64 lg:h-80 order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-h2 font-bold text-abyss mb-4">
                {page.beginning.title}
              </h2>
              <div className="space-y-4">
                {page.beginning.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-abyss/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-measure">
            <h2 className="font-display text-h2 font-bold text-abyss mb-4">
              {page.beginning.title}
            </h2>
            <div className="space-y-4">
              {page.beginning.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-abyss/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* Para quem */}
      <Section id="para-quem" tone="white">
        <SectionHeader title={page.forWhom.title} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.forWhom.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.forWhom.note}</p>
      </Section>

      {/* Uma jornada possível (7 etapas) */}
      <Section id="jornada" tone="white">
        <SectionHeader title={page.journey.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {page.journey.steps.map((step, i) => (
            <div key={step.title} className="border-l-2 border-spark pl-6 py-1">
              {/* Processo mostrado, nao so descrito (pedido do cliente,
                  emula notion.com): a etapa "Implantacao" ganha foto. */}
              {i === 6 && (
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
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.deliverables.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.deliverables.note}</p>
      </Section>

      {/* O que a ONG.zero não promete */}
      <Section id="nao-promete" tone="ink" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.doesNotPromise.title}
          </h2>
          <ul className="space-y-2 text-left max-w-md mx-auto mb-6">
            {page.doesNotPromise.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-bone/70 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-bone/60 text-small leading-relaxed">{page.doesNotPromise.note}</p>
        </div>
      </Section>

      {/* Estrutura proporcional ao estágio — layout alternado (texto +
          imagem), lado invertido em relacao a secao "comeco" acima */}
      <Section id="proporcional" tone="white">
        {import.meta.env.DEV ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-h2 font-bold text-abyss mb-4">
                {page.proportionalStructure.title}
              </h2>
              <div className="space-y-4">
                {page.proportionalStructure.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-abyss/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <ImagePlaceholder hint={proportionalImageHint} className="h-64 lg:h-80" />
          </div>
        ) : (
          <div className="max-w-measure">
            <h2 className="font-display text-h2 font-bold text-abyss mb-4">
              {page.proportionalStructure.title}
            </h2>
            <div className="space-y-4">
              {page.proportionalStructure.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-abyss/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* Fechamento */}
      <Section tone="abyss" size="lg">
        <div className="max-w-2xl mx-auto text-center" data-fab-hide-target>
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
