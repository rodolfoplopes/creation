import { Section, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

export default function CTASection({ label }: { label?: string } = {}) {
  const c = useContent();

  return (
    <Section tone="ink" size="sm">
      {/* data-fab-hide-target (Tarefa 10.1): WhatsAppFab some quando este
          CTA final ja esta na tela — nao faz sentido oferecer o atalho
          quando o destino ja esta visivel. */}
      <div className="text-center max-w-2xl mx-auto" data-fab-hide-target>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bone mb-6 tracking-tight">
          {c.contact.title}
        </h2>
        <p className="text-lg text-bone/70 mb-10 leading-relaxed">
          {c.contact.description}
        </p>

        <CTAButton
          label={label ?? c.cta.primary}
          href={c.cta.href}
          variant="primary"
          onDark
        />

        <p className="mt-10 text-signal font-semibold tracking-widest text-sm uppercase">
          {c.brand.microcopy}
        </p>
      </div>
    </Section>
  );
}
