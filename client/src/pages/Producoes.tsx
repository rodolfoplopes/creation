import Layout from "@/components/Layout";
import HeroInternal from "@/components/layout/HeroInternal";
import ProductionsMediaGrid from "@/components/producoes/ProductionsMediaGrid";
import {
  Section,
  SectionHeader,
  Grid,
  FeatureCard,
  CTAButton,
} from "@/components/primitives";
import { ArrowRight, Check, Image as ImageIcon } from "lucide-react";
import { Link } from "wouter";
import { useContent, useLocalizedHref } from "@/content";

/**
 * /producoes — shape v4. c.productions -> c.producoes; hero.subtitle -> hero.intro;
 * creatorOps -> creatorOpsRio (nome Creation Ops Rio, href curto /creator-ops-rio).
 *
 * mediaTitle nao existe mais no contrato. Substitui por
 * c.producoes.audiovisual.title ate confirmar o prop real do componente.
 *
 * HeroInternal nao recebia eyebrow no codigo original — eyebrow
 * ("PRODUCOES") fica de fora do hero por ora, nao arrisquei prop que o
 * componente pode nao aceitar.
 */
export default function Producoes() {
  const c = useContent();
  const localize = useLocalizedHref();

  const cases = c.cases.items.filter((item) => item.eyebrow === "EVENTOS");

  return (
    <Layout>
      <HeroInternal
        title={c.producoes.hero.title}
        subtitle={c.producoes.hero.intro}
        videoSrc="/images/video-hero.mp4"
      />

      {/* Eventos e Experiências (5 categorias) */}
      <Section
        id="eventos"
        tone="white"
        divider
        firstContent
        className="scroll-mt-[180px]"
      >
        <SectionHeader
          title={c.producoes.events.title}
          subtitle={c.producoes.events.intro}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-abyss/14 border border-abyss/14">
          {c.producoes.events.categories.map((category) => (
            <article key={category.title} className="bg-bone p-6 md:p-8">
              <h3 className="font-display text-h3 font-bold text-abyss mb-2">
                {category.title}
              </h3>
              <p className="text-small text-abyss/70 mb-4 leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="text-caption text-abyss/50">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Audiovisual */}
      <Section
        id="audiovisual"
        tone="ink"
        divider
        className="scroll-mt-[180px]"
      >
        <SectionHeader
          title={c.producoes.audiovisual.title}
          subtitle={c.producoes.audiovisual.intro}
          onDark
        />
        <Grid cols={3}>
          {c.producoes.audiovisual.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              onDark
            />
          ))}
        </Grid>
      </Section>

      {/* Capacidade Operacional: Fixer + Host */}
      <Section tone="white" divider>
        <SectionHeader
          title={c.producoes.operational.title}
          subtitle={c.producoes.operational.intro}
        />

        <div id="fixer" className="mb-10 scroll-mt-[180px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            <div>
              <h3 className="font-display text-h2 font-bold text-abyss mb-4">
                {c.producoes.operational.fixer.title}
              </h3>
              <p className="text-abyss/70 leading-relaxed max-w-measure">
                {c.producoes.operational.fixer.description}
              </p>
            </div>
            {/* Imagem ilustrativa do servico de Fixer — aguardando foto real.
                Trocar por <img src="..." /> quando o arquivo chegar. */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3] bg-bone border border-abyss/14 overflow-hidden flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-abyss/20" />
              </div>
            </div>
          </div>

          <p className="text-abyss/70 leading-relaxed max-w-measure mb-6 border-l-2 border-signal pl-6">
            {c.producoes.operational.fixer.locationScoutHighlight}
          </p>

          {/* Grid de fotos de locacao (Rio + Costa Verde) — aguardando fotos
              reais. Trocar cada box por <img src="..." /> quando os arquivos
              chegarem. */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-bone border border-abyss/14 overflow-hidden flex items-center justify-center"
              >
                <ImageIcon className="h-6 w-6 text-abyss/20" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            {c.producoes.operational.fixer.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-signal shrink-0 mt-1" />
                <span className="text-small text-abyss/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          id="host"
          className="border-t border-abyss/14 pt-8 scroll-mt-[180px]"
        >
          <h3 className="font-display text-h3 font-bold text-abyss mb-2">
            {c.producoes.operational.hosting.title}
          </h3>
          <p className="text-abyss/70 leading-relaxed max-w-measure">
            {c.producoes.operational.hosting.description}
          </p>
        </div>
      </Section>

      {/* Creation Ops Rio (sub-marca) */}
      <Section tone="ink">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-caption font-semibold text-signal mb-3 uppercase tracking-widest">
              {c.producoes.creatorOpsRio.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-bold text-bone mb-4">
              {c.producoes.creatorOpsRio.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">
              {c.producoes.creatorOpsRio.description}
            </p>
          </div>
          <Link href={localize(c.producoes.creatorOpsRio.href)}>
            <span className="inline-flex items-center gap-2 border border-bone/30 text-bone px-8 py-4 font-semibold hover:border-white transition-colors cursor-pointer shrink-0">
              {c.producoes.creatorOpsRio.linkLabel}
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </Section>

      {/* BI de Eventos (produto de inteligencia) */}
      <Section tone="abyss" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-signal mb-2 uppercase tracking-widest">
              {c.producoes.biEventos.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-bold text-bone mb-3">
              {c.producoes.biEventos.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">
              {c.producoes.biEventos.description}
            </p>
          </div>
          <Link href={localize(c.producoes.biEventos.href)}>
            <span className="inline-flex items-center gap-2 text-signal font-semibold hover:gap-3 transition-all cursor-pointer shrink-0">
              {c.producoes.biEventos.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </Section>

      <ProductionsMediaGrid title={c.producoes.audiovisual.title} />

      {/* Cases (filtrados do array global por eyebrow) */}
      {cases.length > 0 && (
        <Section tone="white" divider>
          <SectionHeader title={c.cases.title} subtitle={c.cases.subtitle} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-abyss/14 border border-abyss/14">
            {cases.map((item) => (
              <article
                key={item.title}
                className="bg-bone p-8 md:p-10 flex flex-col"
              >
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
                    <p className="text-abyss/70 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-caption font-semibold text-abyss mb-1 uppercase tracking-wide">
                      {c.labels.caseAction}
                    </h4>
                    <p className="text-abyss/70 leading-relaxed">
                      {item.action}
                    </p>
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

      {/* Para quem + CTA final */}
      <Section tone="abyss" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-bone/70 mb-2 uppercase tracking-widest">
              {c.labels.forWhom}
            </p>
            <p className="text-bone/70 leading-relaxed">
              {c.producoes.forWhom}
            </p>
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
