import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import { useContent, useLocalizedHref } from "@/content";

/**
 * FIX v4: c.verticals -> c.areas. Mesmo shape exato (eyebrow/title/
 * description/href/linkLabel), so o nome do campo mudou (3 verticais da
 * era OPS -> 3 areas: Consultoria, Producoes, Impacto Social).
 */
export default function VerticalsSection() {
  const c = useContent();
  const localize = useLocalizedHref();
  return (
    <Section id="areas" tone="bone" divider>
      <SectionHeader title={c.areas.title} subtitle={c.areas.subtitle} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-abyss/10 border border-abyss/14">
        {c.areas.items.map((area) => (
          <Link key={area.href} href={localize(area.href)}>
            <article className="bg-bone p-8 md:p-10 h-full flex flex-col hover:bg-[#fafafa] transition-colors cursor-pointer group">
              <p className="text-xs font-semibold uppercase tracking-widest text-abyss/70 mb-3">
                {area.eyebrow}
              </p>
              <h3 className="text-2xl font-bold text-abyss mb-4">
                {area.title}
              </h3>
              <p className="text-abyss/70 leading-relaxed mb-8 flex-1">
                {area.description}
              </p>
              <span className="inline-flex items-center gap-2 text-abyss font-semibold group-hover:gap-3 transition-all">
                {area.linkLabel}
                <ArrowRight className="h-5 w-5" />
              </span>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}
