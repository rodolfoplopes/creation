import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/primitives";
import { useContent, useLocalizedHref } from "@/content";

/**
 * SUBSTITUI CreationOpsSection.tsx (deletado).
 *
 * O componente antigo reproduzia c.method INTEIRO na Home (badge, subtitle,
 * description, os 4 estagios completos) — a mesma duplicacao que ja tinha
 * sido eliminada do proprio Metodo.tsx (ver comentario la: "a duplicacao
 * mais absurda do site estava aqui"). Como /como-trabalhamos agora e pagina propria,
 * a Home so precisa de um teaser curto que aponte pra la, no mesmo padrao
 * ja usado dentro de Consultoria.tsx e Producoes.tsx.
 *
 * FIX (pedido do cliente): tone="ink" tirava a transicao limpa de fundo
 * unico da Home (4 secoes finais, cada uma com uma cor). Fundo branco
 * agora, com o mesmo acento "spark" pontual das outras secoes claras — o
 * unico fundo escuro que resta na Home e o fechamento (CTASection).
 */
export default function MethodTeaserSection() {
  const c = useContent();
  const localize = useLocalizedHref();

  return (
    <Section tone="white" size="sm" divider>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-measure">
          <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
            {c.method.badge}
          </p>
          <h2 className="font-display text-h2 font-bold text-abyss mb-3">
            {c.method.title}
          </h2>
          <p className="text-abyss/70 leading-relaxed">{c.method.loopNote}</p>
        </div>
        <Link href={localize(c.cta.methodHref)}>
          <span className="inline-flex items-center gap-2 border border-abyss/20 text-abyss px-8 py-4 font-semibold hover:border-abyss transition-colors cursor-pointer shrink-0">
            {c.cta.secondary}
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </div>
    </Section>
  );
}