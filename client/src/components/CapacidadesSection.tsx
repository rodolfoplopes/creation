import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { useLocalizedHref } from "@/content";
import { homeCapacidades } from "@/content/stubData";

/**
 * Home V2, Bloco 03 (CAPACIDADES) — substitui VerticalsSection, que ainda
 * mostrava as 3 areas de negocio antigas (Consultoria/Producoes/Impacto
 * Social). PT-only por enquanto, ver stubData.ts.
 */
export default function CapacidadesSection() {
  const localize = useLocalizedHref();

  return (
    <Section id="capacidades" tone="bone" divider>
      <SectionHeader
        title="Estratégia, gestão e operações. Juntas."
        subtitle="Um projeto precisa de direção, coordenação e capacidade de entrega. Combinamos essas três competências de acordo com o desafio, o momento do projeto e a estrutura disponível em cada organização."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-abyss/10 border border-abyss/14">
        {homeCapacidades.map((cap, i) => (
          <Reveal key={cap.href} delay={i * 80}>
            <article className="bg-bone p-8 md:p-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-abyss mb-1">
                {cap.title}
              </h3>
              <p className="text-abyss font-semibold mb-4">{cap.tagline}</p>
              <p className="text-abyss/70 leading-relaxed mb-6">
                {cap.description}
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-small text-abyss/70"
                  >
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-abyss/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={localize(cap.href)}>
                <span className="inline-flex items-center gap-2 text-abyss font-semibold hover:gap-3 transition-all cursor-pointer">
                  {cap.linkLabel}
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
