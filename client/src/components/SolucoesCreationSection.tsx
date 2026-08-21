import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { useLocalizedHref } from "@/content";
import { homeSolucoes } from "@/content/stubData";

/**
 * Home V2, Bloco 05 (SOLUCOES CREATION) — "uma solucao so aparece quando
 * tem escopo, processo e capacidade real de contratacao" (regra de
 * publicacao do proprio doc). Das 5 Solucoes Creation, so Creation Ops Rio
 * esta no nucleo publicavel agora; as outras (Creation Marcas, ONG.zero,
 * BI de Eventos, Motor SROI) ficam ocultas ate validacao propria — por
 * isso o layout nao pressupõe um grid cheio.
 */
export default function SolucoesCreationSection() {
  const localize = useLocalizedHref();

  if (homeSolucoes.length === 0) return null;

  return (
    <Section tone="bone" divider>
      <SectionHeader
        title="Repertório transformado em soluções mais fáceis de contratar."
        subtitle="Algumas necessidades recorrentes foram organizadas em soluções com escopo, processo e entregas definidos."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {homeSolucoes.map((sol, i) => (
          <Reveal key={sol.href} delay={i * 80}>
            <Link href={localize(sol.href)}>
              <article className="bg-white border border-abyss/14 p-8 md:p-10 h-full cursor-pointer group">
                <h3 className="text-h2 font-bold text-abyss mb-4">
                  {sol.title}
                </h3>
                <p className="text-abyss/70 leading-relaxed mb-6">
                  {sol.description}
                </p>
                <span className="inline-flex items-center gap-2 text-abyss font-semibold group-hover:gap-3 transition-all">
                  Conheça {sol.title}
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
