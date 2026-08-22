import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import PhotoFrame from "@/components/PhotoFrame";
import { useContent } from "@/content";

import galleryImg1 from "@assets/agustin-diaz-gargiulo-GTLJklnjn-E-unsplash_1767535792240.jpg";
import galleryImg2 from "@assets/davi-costa-cG2JQnPfmAw-unsplash_1767535792241.jpg";
import galleryImg3 from "@assets/guilherme-gabrielli-5Dzv5A0xKpk-unsplash_1767535792243.jpg";
import galleryImg4 from "@assets/marco-bicca-K4zlB5tSqtw-unsplash_1767535792246.jpg";
import galleryImg5 from "@assets/thales-botelho-de-sousa-9e0dAX1bUsA-unsplash_1767535792247.jpg";
import galleryImg6 from "@assets/johannes-mandle-FlVMi4RtHzI-unsplash_1767535792249.jpg";
import galleryImg7 from "@assets/jean-carlos-5C136TdzRO4-unsplash_1767535792251.jpg";
import galleryImg8 from "@assets/samuel-wesley-silva-KptMOrGBpHA-unsplash_1767536447214.jpg";

/**
 * /creator-ops-rio — RECONSTRUCAO COMPLETA fiel ao doc aprovado
 * 20-Creation-Ops-Rio.md (pedido explicito do cliente apos auditoria de
 * conteudo contra os arquivos do Drive). A versao anterior tinha uma
 * credencial sem lastro documental ("+15 anos de experiencia em receptivo
 * e seguranca de dignitarios"), um bloco Antes/Depois e pacotes ("Business
 * Tourism VIP", "Expatriados") que nao existem no doc aprovado — e nao
 * tinha nenhuma das secoes reais do doc (O que podemos assumir,
 * Territorios prioritarios, Como o briefing vira operacao, Para equipes
 * de fora). Reescrita integral com a estrutura do doc.
 *
 * O que FOI reaproveitado: as 8 fotos reais do Rio + Costa Verde (galeria),
 * unico elemento visual que nao contradiz o doc.
 */
export default function CreatorOpsRio() {
  const c = useContent();
  const page = c.creatorOpsRioPage;

  return (
    <Layout>
      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
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

      {/* Galeria — fotos reais do Rio + Costa Verde */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-abyss">
        {[galleryImg1, galleryImg5, galleryImg6, galleryImg3, galleryImg4, galleryImg2, galleryImg7, galleryImg8].map(
          (img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <PhotoFrame src={img} alt="" className="w-full h-full" />
            </div>
          ),
        )}
      </div>

      {/* Conhecimento de território com disciplina de projeto */}
      <Section tone="white">
        <div className="max-w-measure border-l-2 border-spark pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.territory.title}
          </h2>
          <div className="space-y-4">
            {page.territory.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-lg text-abyss/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* O que podemos assumir */}
      <Section tone="white">
        <SectionHeader title={page.whatWeCanTake.title} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mb-6">
          {page.whatWeCanTake.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.whatWeCanTake.note}</p>
      </Section>

      {/* Formatos de contratação */}
      <Section tone="white">
        <SectionHeader title={page.formats.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {page.formats.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-abyss/10 bg-bone/50 p-8"
            >
              <h3 className="text-h3 font-semibold text-abyss mb-2">{item.title}</h3>
              <p className="text-abyss/70 leading-relaxed mb-3">{item.description}</p>
              {item.indicatedFor && (
                <p className="text-small text-abyss/60">
                  <span className="font-semibold text-abyss/70">{c.labels.forWhom}: </span>
                  {item.indicatedFor}
                </p>
              )}
            </article>
          ))}
        </div>
        <p className="text-small text-abyss/60 leading-relaxed max-w-measure">{page.formats.note}</p>
      </Section>

      {/* Territórios prioritários */}
      <Section tone="ink" size="sm">
        <div className="max-w-measure mx-auto text-center">
          <h2 className="font-display text-h2 font-bold text-bone mb-4">
            {page.territories.title}
          </h2>
          <div className="space-y-4">
            {page.territories.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-bone/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Como o briefing vira operação */}
      <Section tone="white">
        <SectionHeader title={page.process.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {page.process.steps.map((step, i) => (
            <div key={step.title} className="border-l-2 border-spark pl-6 py-1">
              {/* Processo mostrado, nao so descrito (pedido do cliente,
                  emula notion.com): a etapa "Realizacao" ganha uma foto
                  real da operacao acontecendo, em vez de so numero. */}
              {i === 4 && (
                <PhotoFrame
                  src={galleryImg7}
                  alt="Equipe da Creation Ops Rio em execução"
                  className="rounded-xl mb-4 h-32"
                />
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

      {/* Para equipes de fora e para quem já está no Rio */}
      <Section tone="white">
        <div className="max-w-measure">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.forTeams.title}
          </h2>
          <div className="space-y-4">
            {page.forTeams.paragraphs.map((paragraph, i) => (
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
