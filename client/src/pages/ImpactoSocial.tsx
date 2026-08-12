import Layout from "@/components/Layout";
import HeroInternal from "@/components/layout/HeroInternal";
import ImpactoTripleImage from "@/components/impacto/ImpactoTripleImage";
import { Section, SectionHeader, Grid, FeatureCard, CTAButton } from "@/components/primitives";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useContent, useLocalizedHref } from "@/content";

/**
 * /impacto-social — substitui Impacto.tsx (arquivo renomeado, nao mais alias).
 *
 * Campos que a pagina antiga usava e NAO existem mais no contrato v4:
 *   audience         -> removido (sem substituto; secao tirada, nao inventei)
 *   territoryPolicy  -> virou prosa dentro de sections[1], nao e mais checklist
 *   offerings        -> virou services (sem link por item)
 *   finalCta         -> unificado no padrao "para quem + CTA" das 3 areas
 *
 * Cases: filtrados do array global c.cases.items por eyebrow === "TERRITORIO"
 * (mesmo padrao de Consultoria.tsx e Producoes.tsx), com o MESMO layout de
 * case-card das outras duas areas (resultados + problema/acao + prova), em
 * vez do layout antigo com imagem de fundo — consistencia entre as 3 areas.
 */
export default function ImpactoSocial() {
  const c = useContent();
  const localize = useLocalizedHref();

  const cases = c.cases.items.filter((item) => item.eyebrow === "TERRITÓRIO");

  return (
    <Layout>
      <HeroInternal
        title={c.impactoSocial.hero.title}
        subtitle={c.impactoSocial.hero.intro}
        showCta
        ctaText={c.cta.primary}
        ctaHref={c.cta.href}
        showSecondaryCta={false}
      />

      {/* Sections (de intencao a programa, territorio no centro) */}
      <Section tone="bone" divider firstContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-abyss/14 border border-abyss/14">
          {c.impactoSocial.sections.map((section) => (
            <article key={section.title} className="bg-bone p-8 md:p-10">
              <h2 className="font-display text-h2 font-bold text-abyss mb-4">
                {section.title}
              </h2>
              <p className="text-abyss/70 leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <ImpactoTripleImage />

      {/* Serviços */}
      <Section tone="bone">
        <Grid cols={2}>
          {c.impactoSocial.services.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </Section>

      {/* Cases (filtrados do array global por eyebrow) */}
      {cases.length > 0 && (
        <Section tone="bone" divider>
          <SectionHeader title={c.cases.title} subtitle={c.cases.subtitle} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-abyss/14 border border-abyss/14">
            {cases.map((item) => (
              <article key={item.title} className="bg-bone p-8 md:p-10 flex flex-col">
                <p className="text-caption font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
                  {item.eyebrow}
                </p>
                <h3 className="font-display text-h2 font-bold text-abyss mb-1">
                  {item.title}
                </h3>
                <p className="text-small text-abyss/70 mb-6">{item.client}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {item.results.map((result) => (
                    <div key={result.label}>
                      <p className="font-display text-h3 font-bold text-abyss tabular-nums">
                        {result.value}
                      </p>
                      <p className="text-caption text-abyss/70 leading-snug">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-caption font-semibold text-abyss mb-1 uppercase tracking-wide">
                      {c.labels.caseProblem}
                    </h4>
                    <p className="text-abyss/70 leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-caption font-semibold text-abyss mb-1 uppercase tracking-wide">
                      {c.labels.caseAction}
                    </h4>
                    <p className="text-abyss/70 leading-relaxed">{item.action}</p>
                  </div>
                </div>

                <p className="text-caption text-abyss/50 mt-6 pt-6 border-t border-abyss/14 leading-relaxed">
                  {item.support}
                </p>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* Matchmaking — PT leve (strong: false); EN/ES podem tratar com mais peso */}
      <Section tone="bone" size={c.impactoSocial.matchmaking.strong ? undefined : "sm"}>
        <div className="max-w-measure">
          <h2 className="font-display text-h3 font-bold text-abyss mb-3">
            {c.impactoSocial.matchmaking.title}
          </h2>
          <p className="text-abyss/70 leading-relaxed">{c.impactoSocial.matchmaking.body}</p>
        </div>
      </Section>

      {/* ONG.zero (sub-marca) */}
      <Section tone="abyss" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-signal mb-2 uppercase tracking-widest">
              {c.impactoSocial.ongZero.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-bold text-bone mb-3">
              {c.impactoSocial.ongZero.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">
              {c.impactoSocial.ongZero.description}
            </p>
          </div>
          <Link href={localize(c.impactoSocial.ongZero.href)}>
            <span className="inline-flex items-center gap-2 text-signal font-semibold hover:gap-3 transition-all cursor-pointer shrink-0">
              {c.impactoSocial.ongZero.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </Section>

      {/* Motor SROI (produto de inteligencia) */}
      <Section tone="ink" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-signal mb-2 uppercase tracking-widest">
              {c.impactoSocial.motorSroi.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-bold text-bone mb-3">
              {c.impactoSocial.motorSroi.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">
              {c.impactoSocial.motorSroi.description}
            </p>
          </div>
          <Link href={localize(c.impactoSocial.motorSroi.href)}>
            <span className="inline-flex items-center gap-2 text-signal font-semibold hover:gap-3 transition-all cursor-pointer shrink-0">
              {c.impactoSocial.motorSroi.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </Section>

      {/* Para quem + CTA final */}
      <Section tone="bone" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
              {c.labels.forWhom}
            </p>
            <p className="text-abyss/70 leading-relaxed">{c.impactoSocial.forWhom}</p>
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