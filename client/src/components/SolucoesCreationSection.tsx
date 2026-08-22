import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { useLocalizedHref, useLang } from "@/content";
import { stubPages } from "@/content/stub";
import { cn } from "@/lib/utils";

/**
 * Home V2, Bloco 05 (SOLUCOES CREATION) — "uma solucao so aparece quando
 * tem escopo, processo e capacidade real de contratacao" (regra de
 * publicacao do proprio doc). Das 5 Solucoes Creation, so Creation Ops Rio
 * esta no nucleo publicavel agora; as outras (Creation Marcas, ONG.zero,
 * BI de Eventos, Motor SROI) ficam ocultas ate validacao propria — por
 * isso o layout nao pressupõe um grid cheio.
 *
 * TESTE EXPERIMENTAL (nao aprovado): fundo branco (era tone "bone") com
 * card em tom "spark" bem diluido pra diferenciar sem cinza-bege, mesmo
 * racional do teste em CapacidadesSection.
 *
 * FIX: com 1 unico item (so Creation Ops Rio publicavel hoje), o grid de
 * 2 colunas deixava a coluna direita vazia (muito espaco em branco na
 * lateral). Com 1 item o card ocupa a largura toda; o grid de 2 colunas
 * so entra quando houver 2+ solucoes publicaveis.
 */
export default function SolucoesCreationSection() {
  const localize = useLocalizedHref();
  const lang = useLang();
  const homeSolucoes = stubPages[lang].homeSolucoes;
  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);

  if (homeSolucoes.length === 0) return null;

  return (
    <Section tone="white" divider>
      <SectionHeader
        title={t(
          "Repertório transformado em soluções mais fáceis de contratar.",
          "Expertise turned into solutions that are easier to hire.",
          "Repertorio transformado en soluciones más fáciles de contratar.",
        )}
        subtitle={t(
          "Algumas necessidades recorrentes foram organizadas em soluções com escopo, processo e entregas definidos.",
          "Some recurring needs have been organized into solutions with defined scope, process and deliverables.",
          "Algunas necesidades recurrentes se organizaron en soluciones con alcance, proceso y entregas definidos.",
        )}
      />
      <div
        className={cn(
          "grid grid-cols-1 gap-8",
          homeSolucoes.length > 1 && "md:grid-cols-2",
        )}
      >
        {homeSolucoes.map((sol, i) => (
          <Reveal key={sol.href} delay={i * 80}>
            <Link href={localize(sol.href)}>
              <article
                className={cn(
                  "bg-spark/5 border border-spark/20 p-8 md:p-10 h-full cursor-pointer group transition-transform active:scale-[0.98]",
                  homeSolucoes.length === 1 &&
                    "md:flex md:items-center md:justify-between md:gap-12",
                )}
              >
                <div className={cn(homeSolucoes.length === 1 && "max-w-2xl")}>
                  <h3 className="text-h2 font-bold text-abyss mb-4">
                    {sol.title}
                  </h3>
                  <p className="text-abyss/70 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 text-abyss font-semibold group-hover:text-spark group-hover:gap-3 transition-all shrink-0",
                    homeSolucoes.length === 1 ? "mt-6 md:mt-0" : "mt-6",
                  )}
                >
                  {t("Conheça", "See", "Conozca")} {sol.title}
                  <ArrowRight className="h-5 w-5" />
                </span>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
