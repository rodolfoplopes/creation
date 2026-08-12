import { ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/primitives";
import { useContent } from "@/content";
import heroImage from "@assets/ariel-tutillo-sM-ejBVJrKo-unsplash_1767378163287.jpg";

/**
 * TODO(Sprint 2, ainda pendente): trocar a imagem.
 * O alt original era "Corporate cityscape" - arranha-ceu generico de stock.
 * Contradiz o discurso de proposito, ONGs e territorios.
 *
 * FIX v4: c.hero.proof nao existe mais no contrato (hero so tem
 * headline + subheadline). A linha de "prova" no hero foi removida daqui;
 * a prova agora vive nos cases dentro de cada pagina de area.
 */
export default function HeroSection() {
  const c = useContent();
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 64, behavior: "smooth" });
  };
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center bg-bone overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-signal" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-abyss/20 mb-6">
              <span className="text-abyss/70 font-semibold tracking-widest text-caption uppercase">
                {c.brand.microcopy}
              </span>
            </div>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl lg:text-7xl font-bold text-abyss">
              {c.hero.headline}
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-abyss/70 max-w-measure leading-relaxed">
              {c.hero.subheadline}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
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
          </div>
          <div className="hidden lg:block">
            <div className="aspect-[4/3] bg-bone border border-abyss/14 overflow-hidden">
              <img
                src={heroImage}
                alt=""
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-abyss/70 hover:text-abyss transition-colors animate-bounce"
        data-testid="button-scroll-down"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
