import { Section, SectionHeader, Grid, FeatureCard } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * Removidos:
 *   - Icones Heart / Lightbulb / TrendingUp / Building2 em caixinhas cinzas.
 *   - Selos "OPS Impact" / "OPS Creative" / "OPS Expansion" / "Interno".
 *     Eram uma QUARTA taxonomia, competindo com a nav, a home e o footer.
 *
 * FIX (pedido do cliente): tone="bone" era mais uma cor de fundo diferente
 * empilhada nas ultimas secoes da Home. Fundo branco agora, consistente
 * com o resto — o unico fundo escuro que resta na Home e o fechamento
 * (CTASection).
 */
export default function TargetAudienceSection() {
  const c = useContent();

  return (
    <Section tone="white" divider>
      <SectionHeader
        title={c.targetAudience.title}
        subtitle={c.targetAudience.subtitle}
      />

      <Grid cols={2}>
        {c.targetAudience.audiences.map((audience) => (
          <FeatureCard
            key={audience.title}
            title={audience.title}
            description={audience.description}
          />
        ))}
      </Grid>
    </Section>
  );
}
