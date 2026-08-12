import Layout from "@/components/Layout";
import { Section, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * /metodo — pagina propria (R5), nao mais redirect para /consultoria.
 * Shape v4: badge/title/intro/stages[4]/loopNote.
 *
 * Campos que a pagina antiga usava e NAO existem mais:
 *   subtitle, description  -> viraram um unico "intro"
 *   phases[3]{..., deliverables[]} -> stages[4]{..., tagline}, sem checklist
 *   result                 -> loopNote
 *   howWeWork{title,items} -> nao existe no contrato v4; secao removida,
 *                             nao inventei conteudo para substituir
 */
export default function Metodo() {
  const c = useContent();

  return (
    <Layout>
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              {c.method.badge}
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {c.method.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {c.method.intro}
            </p>
          </div>
        </div>
      </section>

      <Section tone="bone" divider firstContent>
        <div className="space-y-px bg-abyss/10">
          {c.method.stages.map((stage) => (
            <div
              key={stage.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-bone p-8 md:p-10"
            >
              <div className="lg:col-span-1">
                <span className="font-display text-h1 font-black text-abyss/20 tabular-nums">
                  {stage.number}
                </span>
              </div>

              <div className="lg:col-span-5">
                <p className="text-caption font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
                  {stage.tagline}
                </p>
                <h2 className="font-display text-h2 font-bold text-abyss mb-4">
                  {stage.name}
                </h2>
              </div>

              <div className="lg:col-span-6 lg:border-l lg:border-abyss/14 lg:pl-8">
                <p className="text-abyss/70 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-abyss pl-8 max-w-3xl">
          <p className="font-display text-h2 text-abyss leading-snug">
            {c.method.loopNote}
          </p>
        </div>
      </Section>

      <Section tone="ink" size="sm">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-h2 sm:text-h1 font-bold text-bone mb-8">
            {c.contact.title}
          </h2>
          <CTAButton
            label={c.cta.primary}
            href={c.cta.href}
            variant="primary"
            onDark
          />
        </div>
      </Section>
    </Layout>
  );
}
