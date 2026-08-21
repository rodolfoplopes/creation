import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { useLocalizedHref } from "@/content";
import { homeEspecialidades } from "@/content/stubData";

/**
 * Home V2, Bloco 04 (ESPECIALIDADES) — Inovacao/Impacto/Branding &
 * Experiencias. Nao existia antes na Home. PT-only, ver stubData.ts.
 */
export default function EspecialidadesSection() {
  const localize = useLocalizedHref();

  return (
    <Section tone="white">
      <SectionHeader
        title="Onde combinamos capacidade com repertório."
        subtitle="Estratégia, gestão e operações podem ser aplicadas a diferentes desafios. Em três campos, a Creation reúne experiência, linguagem e conexões específicas para compreender melhor o contexto e construir soluções mais consistentes."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {homeEspecialidades.map((esp, i) => (
          <Reveal key={esp.href} delay={i * 80}>
            <Link href={localize(esp.href)}>
              <article className="border-l-2 border-abyss pl-6 py-1 h-full cursor-pointer group">
                <h3 className="text-h3 font-semibold text-abyss mb-2">
                  {esp.title}
                </h3>
                <p className="text-abyss font-semibold mb-2">{esp.tagline}</p>
                <p className="text-abyss/70 leading-relaxed mb-4">
                  {esp.description}
                </p>
                <span className="inline-flex items-center gap-2 text-abyss font-semibold group-hover:gap-3 transition-all">
                  {esp.linkLabel}
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
