import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { useContent, useLocalizedHref } from "@/content";

/**
 * /consultoria — substitui Servicos.tsx (arquivo renomeado, nao mais alias).
 * Rosto: Gestao de Projetos. Consome c.consultoria (hero, sections, services,
 * innovation, creationMarcas, forWhom) no shape v4.
 *
 * Metodo NAO e mais reproduzido aqui por inteiro (isso era a duplicacao que
 * o Sprint 1 ja tinha eliminado uma vez). Aqui so um teaser curto
 * (c.method.title + c.method.loopNote) com link para /metodo, pagina propria.
 *
 * /servicos/ops (Creation OPS) foi removido: o conceito foi dissolvido na
 * nova arquitetura de 3 areas.
 */
export default function Consultoria() {
  const c = useContent();
  const localize = useLocalizedHref();

  const cases = c.cases.items.filter((item) => item.eyebrow === "GESTÃO DE PROJETOS");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              {c.consultoria.hero.eyebrow}
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {c.consultoria.hero.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {c.consultoria.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Sections (abertura, diferencial, especialidade) */}
      <Section tone="bone" divider firstContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-abyss/14 border border-abyss/14">
          {c.consultoria.sections.map((section) => (
            <article key={section.title} className="bg-bone p-8 md:p-10">
              <h2 className="font-display text-h2 font-bold text-abyss mb-4">
                {section.title}
              </h2>
              <p className="text-abyss/70 leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Serviços */}
      <Section tone="ink" divider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 max-w-4xl">
          {c.consultoria.services.map((service) => (
            <div key={service.title}>
              <h3 className="font-display text-h3 font-bold text-bone mb-2">
                {service.title}
              </h3>
              <p className="text-bone/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Hub Inovação */}
      <Section tone="bone" divider>
        <p className="text-caption font-semibold text-signal mb-3 uppercase tracking-widest">
          {c.consultoria.innovation.eyebrow}
        </p>
        <h2 className="font-display text-h1 font-bold text-abyss mb-6 max-w-measure">
          {c.consultoria.innovation.title}
        </h2>
        <p className="text-abyss/70 leading-relaxed max-w-measure mb-10">
          {c.consultoria.innovation.intro}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.consultoria.innovation.formats.map((format) => (
            <div key={format.title} className="border-t-2 border-abyss pt-4">
              <h3 className="font-display text-h3 font-bold text-abyss mb-2">
                {format.title}
              </h3>
              <p className="text-small text-abyss/70 leading-relaxed">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Creation Marcas (sub-marca) */}
      <Section tone="abyss" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-signal mb-2 uppercase tracking-widest">
              {c.consultoria.creationMarcas.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-bold text-bone mb-3">
              {c.consultoria.creationMarcas.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">
              {c.consultoria.creationMarcas.description}
            </p>
          </div>
          <Link href={localize(c.consultoria.creationMarcas.href)}>
            <span className="inline-flex items-center gap-2 text-signal font-semibold hover:gap-3 transition-all cursor-pointer shrink-0">
              {c.consultoria.creationMarcas.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
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

      {/* Teaser do método (sem repetir os 4 tempos — pagina propria em /metodo) */}
      <Section tone="ink" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-signal mb-2 uppercase tracking-widest">
              {c.method.badge}
            </p>
            <h2 className="font-display text-h2 font-bold text-bone mb-3">
              {c.method.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">{c.method.loopNote}</p>
          </div>
          <CTAButton
            label={c.cta.secondary}
            href={c.cta.methodHref}
            variant="secondary"
            onDark
            className="shrink-0"
          />
        </div>
      </Section>

      {/* Para quem + CTA final */}
      <Section tone="bone" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
              {c.labels.forWhom}
            </p>
            <p className="text-abyss/70 leading-relaxed">{c.consultoria.forWhom}</p>
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