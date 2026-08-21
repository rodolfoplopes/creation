import { ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { useContent } from "@/content";
import heroImage from "@assets/hero-home.jpg";

/**
 * RESOLVIDO: hero-home.jpg substitui a foto de stock generica que
 * contradizia o discurso de proposito, ONGs e territorios.
 *
 * FIX v4: c.hero.proof nao existe mais no contrato (hero so tem
 * headline + subheadline). A linha de "prova" no hero foi removida daqui;
 * a prova agora vive nos cases dentro de cada pagina de area.
 *
 * DESIGN V7.1 (piloto — Home): "geometria hibrida" do manual (pag. 10 e
 * 15) — reta pra estrutura (grid, cards, imagem seguem retangulares),
 * curva como contraponto pontual, nao padrao universal. O badge de
 * assinatura (kicker) vira pilula (rounded-full), ecoando a forma dos
 * simbolos de exploracao do manual, sem usar os simbolos em si (ainda
 * sem validacao do cliente). Respiro do hero aumentado (py-24/36 em vez
 * de py-20/32) — ritmo "institucional" (pag. 9): poucos elementos,
 * frases grandes, muito respiro.
 *
 * TESTE EXPERIMENTAL (nao aprovado): cor de acento viva "spark" (ver
 * tailwind.config.ts), pedida apos referencia a bcg.com/notion.com.
 * Aplicada so aqui, em 2 pontos contidos e reversiveis — barra lateral
 * (era bg-signal/Mist, quase invisivel em fundo branco) e o ponto dentro
 * da pilula (estilo do dot azul em notion.com). Nao mexe no token
 * "signal" nem no CTAButton (isso mudaria o site inteiro).
 */
export default function HeroSection() {
  const c = useContent();
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 64, behavior: "smooth" });
  };
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center bg-white overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-spark" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-abyss/20 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
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
            <div className="mt-14 flex flex-col sm:flex-row gap-4">
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
          <Reveal delay={120} className="hidden lg:block">
            <div className="aspect-[4/3] bg-bone border border-abyss/14 overflow-hidden">
              <img
                src={heroImage}
                alt=""
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </Reveal>
        </div>
      </div>
      {/* animate-drift substitui animate-bounce: motion com proposito, sem
          bounce/overshoot (Manual V7.1, pag. 18). */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-abyss/70 hover:text-abyss transition-colors animate-drift"
        data-testid="button-scroll-down"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
