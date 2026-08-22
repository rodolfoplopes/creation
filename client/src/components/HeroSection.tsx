import { CTAButton } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { useContent } from "@/content";

/**
 * HERO V2 (pedido explicito do cliente — emular notion.com): coluna unica
 * centralizada, sem foto ao lado (a hero-home.jpg saiu daqui; a "entrada
 * de imagem" do site fica concentrada no carrossel da WhyWeExistSection).
 * Altura reduzida (era min-h quase full-screen com py-24/36) pra que os
 * botoes fiquem visiveis sem rolar na maioria das telas.
 *
 * FIX v4: c.hero.proof nao existe mais no contrato (hero so tem
 * headline + subheadline). A linha de "prova" no hero foi removida daqui;
 * a prova agora vive nos cases dentro de cada pagina de area.
 *
 * TESTE EXPERIMENTAL (nao aprovado): cor de acento viva "spark" (ver
 * tailwind.config.ts), pedida apos referencia a bcg.com/notion.com. Nao
 * mexe no token "signal" nem no CTAButton (isso mudaria o site inteiro).
 */
export default function HeroSection() {
  const c = useContent();
  return (
    <section
      className="relative bg-white py-20 md:py-28"
      data-testid="section-hero"
    >
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-abyss/20 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
            <span className="text-abyss/70 font-semibold tracking-widest text-caption uppercase">
              {c.brand.microcopy}
            </span>
          </div>
          <h1 className="font-display text-display sm:text-6xl md:text-7xl font-extrabold text-abyss">
            {c.hero.headline}
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-abyss/70 max-w-measure leading-relaxed">
            {c.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <CTAButton
              label={c.cta.primary}
              href={c.cta.href}
              variant="primary"
            />
            <CTAButton
              label={c.cta.secondary}
              href={c.cta.methodHref}
              variant="secondary"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
