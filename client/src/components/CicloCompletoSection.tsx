import { useState } from "react";
import { Section, CTAButton } from "@/components/primitives";
import { useLang, useContent } from "@/content";
import { stubPages, type CicloStage } from "@/content/stub";

/**
 * Ciclo Completo interativo — porta pra React o diagrama que o cliente
 * desenhou em creation-ciclo-completo.html (pasta projetos/metodologias),
 * reaproveitando as cores terciarias (Iris/Lapis/Amber/Kelp) do adendo
 * cromatico V7.1. O conteudo por etapa (cicloCompletoStages) e a mesma
 * jornada ja aprovada em stubData["como-trabalhamos"], so destilada em
 * lead + duas colunas + resultado — nao e conteudo novo.
 *
 * Duas variantes:
 *  - "full": anel + paineis de detalhe clicaveis (para /como-trabalhamos)
 *  - "teaser": versao estatica e compacta, sem clique (para a Home,
 *    substituindo a faixa fina do MethodTeaserSection)
 */

const FAMILY_TAG_CLASS: Record<CicloStage["family"], string> = {
  iris: "text-iris-on-abyss",
  lapis: "text-lapis-on-abyss",
  amber: "text-amber-on-abyss",
  kelp: "text-kelp-on-abyss",
};
const FAMILY_ACTIVE_BG_CLASS: Record<CicloStage["family"], string> = {
  iris: "bg-iris-tint",
  lapis: "bg-lapis-tint",
  amber: "bg-amber-tint",
  kelp: "bg-kelp-tint",
};
const FAMILY_ACTIVE_TEXT_CLASS: Record<CicloStage["family"], string> = {
  iris: "text-iris-text",
  lapis: "text-lapis-text",
  amber: "text-amber-text",
  kelp: "text-kelp-text",
};
const FAMILY_BORDER_CLASS: Record<CicloStage["family"], string> = {
  iris: "border-iris-icon/40",
  lapis: "border-lapis-icon/40",
  amber: "border-amber-icon/40",
  kelp: "border-kelp-icon/40",
};
const FAMILY_BAR_CLASS: Record<CicloStage["family"], string> = {
  iris: "bg-iris-icon",
  lapis: "bg-lapis-icon",
  amber: "bg-amber-icon",
  kelp: "bg-kelp-icon",
};
// posicoes cardeais (topo/direita/baixo/esquerda), mesma leitura do
// anel original — sem precisar recalcular raio via JS/resize.
const NODE_POSITION_CLASS = [
  "top-0 left-1/2 -translate-x-1/2",
  "top-1/2 right-0 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2",
  "top-1/2 left-0 -translate-y-1/2",
];

const toolChips = ["SWOT", "PESTEL", "BPMN", "Canvas", "Design Thinking", "Lean", "Kanban", "Scrum", "RACI", "OKRs"];

export default function CicloCompletoSection({ variant = "full" }: { variant?: "full" | "teaser" }) {
  const lang = useLang();
  const c = useContent();
  const stages = stubPages[lang].cicloCompletoStages;
  const [active, setActive] = useState(0);
  const stage = stages[active];

  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);

  if (variant === "teaser") {
    return (
      <Section id="metodo" tone="ink" size="md">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 text-caption font-semibold text-bone/60 mb-3 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
            {t("MÉTODO", "METHOD", "MÉTODO")}
          </p>
          <h2 className="font-display text-h2 font-bold text-bone mb-3">{t("Ciclo Completo", "Complete Cycle", "Ciclo Completo")}</h2>
          <p className="text-bone/70 max-w-measure mx-auto leading-relaxed">
            {t(
              "Todo projeto percorre o mesmo caminho — do entendimento à prova.",
              "Every project follows the same path — from understanding to proof.",
              "Todo proyecto recorre el mismo camino — del entendimiento a la prueba.",
            )}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stages.map((s) => (
            <div key={s.number} className={`rounded-2xl border ${FAMILY_BORDER_CLASS[s.family]} p-5 text-center`}>
              <p className={`text-caption font-semibold mb-1 tracking-widest ${FAMILY_TAG_CLASS[s.family]}`}>{s.number}</p>
              <p className="font-display text-h3 font-semibold text-bone">{s.name}</p>
              <p className="text-small text-bone/60 mt-1">{s.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CTAButton label={t("Conhecer o método", "Learn about the method", "Conocer el método")} href="/como-trabalhamos" variant="secondary" onDark />
        </div>
      </Section>
    );
  }

  return (
    <Section tone="ink" size="lg">
      <div className="text-center mb-4">
        <p className="inline-flex items-center gap-2 text-caption font-semibold text-bone/60 mb-3 uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
          {t("COMO TRABALHAMOS", "HOW WE WORK", "CÓMO TRABAJAMOS")}
        </p>
        <h2 className="font-display text-h1 font-bold text-bone mb-3">
          {t("O ciclo completo.", "The complete cycle.", "El ciclo completo.")}
        </h2>
        <p className="text-bone/70 max-w-measure mx-auto leading-relaxed">
          {t(
            "Uma forma disciplinada de transformar uma necessidade em direção, estrutura, entrega e evidência — do entendimento à comprovação.",
            "A disciplined way of turning a need into direction, structure, delivery and evidence — from understanding to proof.",
            "Una forma disciplinada de transformar una necesidad en dirección, estructura, entrega y evidencia — del entendimiento a la comprobación.",
          )}
        </p>
      </div>

      {/* Anel */}
      <div className="relative w-full max-w-[560px] aspect-square mx-auto mt-10">
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full -rotate-90">
          <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="2" />
          <circle
            cx="200"
            cy="200"
            r="168"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className={FAMILY_TAG_CLASS[stage.family].replace("text-", "stroke-")}
            style={{
              stroke: "currentColor",
              strokeDasharray: 2 * Math.PI * 168,
              strokeDashoffset: 2 * Math.PI * 168 * (1 - (active + 1) / 4),
              opacity: 0.9,
              transition: "stroke-dashoffset 700ms cubic-bezier(0.22,1,0.36,1), color 400ms ease",
            }}
          />
        </svg>

        {/* Nucleo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36%] aspect-square rounded-full grid place-items-center text-center p-4">
          <div>
            <p className="font-display italic text-bone text-small sm:text-body leading-snug">
              "{c.hero.headline}"
            </p>
            <p className="text-caption text-bone/50 uppercase tracking-widest mt-3">
              {t("um percurso, quatro etapas", "one journey, four stages", "un recorrido, cuatro etapas")}
            </p>
          </div>
        </div>

        {/* Nos */}
        {stages.map((s, i) => (
          <button
            key={s.number}
            type="button"
            onClick={() => setActive(i)}
            className={`absolute w-[26%] aspect-square rounded-full border grid place-items-center text-center px-2 transition-all ${NODE_POSITION_CLASS[i]} ${
              i === active
                ? `${FAMILY_ACTIVE_BG_CLASS[s.family]} ${FAMILY_BORDER_CLASS[s.family]} scale-105`
                : `bg-white/[0.03] ${FAMILY_BORDER_CLASS[s.family]} hover:scale-105`
            }`}
            data-testid={`ciclo-node-${s.number}`}
          >
            <div>
              <p className={`text-caption font-bold tracking-widest ${i === active ? FAMILY_ACTIVE_TEXT_CLASS[s.family] : "text-bone/50"}`}>
                {s.number}
              </p>
              <p className={`font-display font-medium text-body sm:text-h3 ${i === active ? FAMILY_ACTIVE_TEXT_CLASS[s.family] : "text-bone"}`}>
                {s.name}
              </p>
              <p className={`text-caption uppercase tracking-wide mt-1 ${i === active ? FAMILY_ACTIVE_TEXT_CLASS[s.family] : FAMILY_TAG_CLASS[s.family]}`}>
                {s.role}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Entrada */}
      <div className="max-w-measure mx-auto mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start border border-bone/10 rounded-2xl p-5">
        <span className="font-display italic text-bone whitespace-nowrap">
          {t("O percurso não precisa começar no início.", "The journey doesn't have to start at the beginning.", "El recorrido no necesita empezar por el principio.")}
        </span>
      </div>

      {/* Painel de detalhe */}
      <div className="max-w-measure mx-auto mt-6 bg-bone text-abyss rounded-2xl overflow-hidden">
        <div className={`h-1 ${FAMILY_BAR_CLASS[stage.family]}`} />
        <div className="p-8">
          <div className="flex items-baseline gap-3 flex-wrap mb-2">
            <span className="text-caption font-bold tracking-widest text-abyss/40">{stage.number}</span>
            <h3 className={`font-display text-h2 font-semibold ${FAMILY_ACTIVE_TEXT_CLASS[stage.family]}`}>{stage.name}</h3>
            <span className={`ml-auto text-caption font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${FAMILY_ACTIVE_BG_CLASS[stage.family]} ${FAMILY_ACTIVE_TEXT_CLASS[stage.family]}`}>
              {stage.role}
            </span>
          </div>
          <p className="text-abyss/70 leading-relaxed mt-3">{stage.lead}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-caption font-bold uppercase tracking-widest text-abyss/50 mb-3">{stage.leftHeading}</h4>
              <ul className="space-y-2">
                {stage.left.map((item) => (
                  <li key={item} className="text-small text-abyss/70 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-rhodium-flat">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-caption font-bold uppercase tracking-widest text-abyss/50 mb-3">{stage.rightHeading}</h4>
              <ul className="space-y-2">
                {stage.right.map((item) => (
                  <li key={item} className="text-small text-abyss/70 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-rhodium-flat">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 mt-6 text-small font-semibold text-abyss bg-white border border-abyss/10 rounded-full px-4 py-2">
            <span className="text-caption font-bold uppercase tracking-widest text-abyss/40">
              {t("Resultado", "Result", "Resultado")}
            </span>
            {stage.out}
          </span>
        </div>
      </div>

      {/* Ferramentas */}
      <div className="max-w-measure mx-auto mt-10 text-center">
        <p className="text-caption font-bold uppercase tracking-widest text-bone mb-3">
          {t("Ferramentas a serviço do projeto", "Tools serving the project", "Herramientas al servicio del proyecto")}
        </p>
        <p className="text-small text-bone/60 leading-relaxed mb-4">
          {t(
            "Aplicadas quando respondem a uma pergunta real, não porque produzem um diagrama bonito.",
            "Applied when they answer a real question, not because they produce a nice diagram.",
            "Aplicadas cuando responden a una pregunta real, no porque producen un diagrama bonito.",
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {toolChips.map((chip) => (
            <span key={chip} className="text-small text-bone bg-white/5 border border-white/10 rounded px-3 py-1">
              {chip}
            </span>
          ))}
        </div>
        <p className="text-small text-bone/50 italic mt-6">
          {t(
            "Não chamamos isso de metodologia proprietária. O valor está em escolher o método adequado a cada decisão.",
            "We don't call this a proprietary methodology. The value lies in choosing the right method for each decision.",
            "No llamamos a esto una metodología propia. El valor está en elegir el método adecuado para cada decisión.",
          )}
        </p>
      </div>
    </Section>
  );
}
