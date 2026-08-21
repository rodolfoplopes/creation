import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { useLocalizedHref, useLang } from "@/content";
import { stubPages } from "@/content/stub";

/**
 * Home V2, Bloco 04 (ESPECIALIDADES) — Inovacao/Impacto/Branding &
 * Experiencias. Nao existia antes na Home. Traduzida nos 3 idiomas (ver
 * client/src/content/stub/{lang}.ts).
 *
 * TESTE EXPERIMENTAL (nao aprovado): borda esquerda vira "spark" no hover
 * (era abyss estatico) — mesmo racional do teste em CapacidadesSection.
 */
export default function EspecialidadesSection() {
  const localize = useLocalizedHref();
  const lang = useLang();
  const homeEspecialidades = stubPages[lang].homeEspecialidades;
  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);

  return (
    <Section tone="white" divider>
      <SectionHeader
        title={t("Onde combinamos capacidade com repertório.", "Where we combine capability with expertise.", "Donde combinamos capacidad con repertorio.")}
        subtitle={t(
          "Estratégia, gestão e operações podem ser aplicadas a diferentes desafios. Em três campos, a Creation reúne experiência, linguagem e conexões específicas para compreender melhor o contexto e construir soluções mais consistentes.",
          "Strategy, management and operations can be applied to different challenges. In three fields, Creation brings together specific experience, language and connections to better understand context and build more consistent solutions.",
          "Estrategia, gestión y operaciones pueden aplicarse a diferentes desafíos. En tres campos, Creation reúne experiencia, lenguaje y conexiones específicas para comprender mejor el contexto y construir soluciones más consistentes.",
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {homeEspecialidades.map((esp, i) => (
          <Reveal key={esp.href} delay={i * 80}>
            <Link href={localize(esp.href)}>
              <article className="border-l-2 border-abyss hover:border-spark transition-colors pl-6 py-1 h-full cursor-pointer group">
                <h3 className="text-h3 font-semibold text-abyss mb-2">
                  {esp.title}
                </h3>
                <p className="text-abyss font-semibold mb-2">{esp.tagline}</p>
                <p className="text-abyss/70 leading-relaxed mb-4">
                  {esp.description}
                </p>
                <span className="inline-flex items-center gap-2 text-abyss font-semibold group-hover:text-spark group-hover:gap-3 transition-all">
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
