import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Section,
  SectionHeader,
  Grid,
  FeatureCard,
  CTAButton,
} from "@/components/primitives";
import { ArrowRight, Check, X } from "lucide-react";
import { useContent, useLocalizedHref } from "@/content";

import panoramicImg from "@assets/muhammed-ballan-oO_uKmr_biQ-unsplash_1767535860509.jpg";
import galleryImg1 from "@assets/agustin-diaz-gargiulo-GTLJklnjn-E-unsplash_1767535792240.jpg";
import galleryImg2 from "@assets/davi-costa-cG2JQnPfmAw-unsplash_1767535792241.jpg";
import galleryImg3 from "@assets/guilherme-gabrielli-5Dzv5A0xKpk-unsplash_1767535792243.jpg";
import galleryImg4 from "@assets/marco-bicca-K4zlB5tSqtw-unsplash_1767535792246.jpg";
import galleryImg5 from "@assets/thales-botelho-de-sousa-9e0dAX1bUsA-unsplash_1767535792247.jpg";
import galleryImg6 from "@assets/johannes-mandle-FlVMi4RtHzI-unsplash_1767535792249.jpg";
import galleryImg7 from "@assets/jean-carlos-5C136TdzRO4-unsplash_1767535792251.jpg";
import galleryImg8 from "@assets/samuel-wesley-silva-KptMOrGBpHA-unsplash_1767536447214.jpg";

/**
 * /creator-ops-rio — reconstrucao completa. A pagina antiga nunca tinha
 * passado pela migracao de hoje: nome errado ("Creator", nao "Creation"),
 * paleta propria (verde/amarelo/gradientes), e tres problemas reais de
 * conteudo que NAO foram carregados para ca:
 *
 *   - "Locacoes Exclusivas" com "Favelas Autenticas" + selo "Seguranca
 *     Garantida" — o mesmo conflito etico que a Politica de Territorio em
 *     Impacto Social existe para evitar. Removido, nao reescrito.
 *   - Depoimento "Creator Internacional @creator.example" — placeholder de
 *     template, nao citacao real. Removido.
 *   - Estatisticas sem lastro (100% satisfacao etc.) — mesmo padrao que o
 *     doc de posicionamento ja tinha removido do resto do site. Removido.
 *   - Formulario proprio da pagina, sem onSubmit real. Trocado pelo padrao
 *     CTA -> /contato que as outras 4 landings ja usam.
 *
 * O que FOI reaproveitado: as 9 fotos reais do Rio (panoramica + galeria de
 * 8), e o padrao visual Antes/Depois, recolorido para o sistema v6.
 */
export default function CreatorOpsRio() {
  const c = useContent();
  const localize = useLocalizedHref();
  const page = c.creatorOpsRioPage;

  return (
    <Layout>
      {/* Hero — foto real no lugar do placeholder */}
      <section className="relative bg-white py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-measure">
              <p className="text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
                {page.eyebrow}
              </p>
              <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
                {page.title}
              </h1>
              <p className="text-xl text-abyss/70 leading-relaxed mb-8">
                {page.intro}
              </p>
              <CTAButton
                label={c.cta.primary}
                href={c.cta.href}
                variant="primary"
              />
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={panoramicImg}
                  alt="Rio de Janeiro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credencial — substitui a antiga faixa de social proof sem lastro */}
      <Section tone="ink" size="sm" firstContent>
        <p className="text-center text-bone/90 font-medium max-w-measure mx-auto">
          {page.experienceStatement}
        </p>
      </Section>

      {/* Antes / Depois */}
      <Section tone="white" divider>
        <SectionHeader title={page.whatChanges.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-abyss/14 border border-abyss/14">
          <div className="bg-ink p-8 md:p-10">
            <h3 className="text-h3 font-bold text-bone mb-6">Antes</h3>
            <div className="space-y-4">
              {page.whatChanges.before.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <X className="h-5 w-5 text-bone/40 shrink-0" />
                  <span className="text-bone/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 md:p-10">
            <h3 className="text-h3 font-bold text-abyss mb-6">Depois</h3>
            <div className="space-y-4">
              {page.whatChanges.after.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-signal shrink-0" />
                  <span className="text-abyss/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pacotes */}
      <Section tone="ink" divider>
        <SectionHeader
          title={page.packages.title}
          subtitle={page.packages.subtitle}
          onDark
        />
        <Grid cols={2}>
          {page.packages.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              onDark
            />
          ))}
        </Grid>
      </Section>

      {/* Galeria — fotos reais do Rio + Costa Verde */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-abyss">
        {[
          galleryImg1,
          galleryImg5,
          galleryImg6,
          galleryImg3,
          galleryImg4,
          galleryImg2,
          galleryImg7,
          galleryImg8,
        ].map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Diferencial */}
      <Section tone="white" divider>
        <div className="max-w-measure border-l-2 border-signal pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {page.differentiator.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">
            {page.differentiator.body}
          </p>
        </div>
      </Section>

      {/* Como conduzimos */}
      <Section tone="bone" size="sm">
        <div className="max-w-measure">
          <h2 className="font-display text-h3 font-bold text-abyss mb-3">
            {page.howWeWork.title}
          </h2>
          <p className="text-abyss/70 leading-relaxed">{page.howWeWork.body}</p>
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
