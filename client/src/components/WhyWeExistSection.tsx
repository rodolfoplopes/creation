import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import PhotoFrame from "@/components/PhotoFrame";
import { useContent, useLang, useLocalizedHref } from "@/content";
import { trackEvent } from "@/lib/analytics";

/**
 * FOTOS NOVAS (25/08/2026, pasta Drive "Imagens do Site/Slide-Hero-Home"):
 * 6 fotos reais de eventos/producoes da Creation, ja com o tratamento de
 * design proprio do cliente (contorno/overlay) aplicado antes do envio.
 * Substituem as 3 fotos antigas (story-line/expo/world-creativity).
 * Pre-cortadas em proporcao larga pelo cliente — evita o problema de
 * rosto cortado/foto esticada que a tentativa anterior teve.
 *
 * ENTRADA DE IMAGEM (pedido explicito do cliente — emular notion.com):
 * o carrossel deixou de ser full-bleed (py-0, borda a borda) e passou a
 * ficar contido no mesmo grid max-w-7xl das outras secoes, com a foto em
 * rounded-2xl e sombra leve — a curva-contraponto do manual (pag. 10/15)
 * aplicada so na imagem. Setas e indicadores viraram pilula (rounded-full)
 * pra ecoar a mesma linguagem, em vez dos quadrados originais.
 *
 * POSICAO (pedido do cliente): secao subiu pra logo abaixo do Hero (era
 * a 5a secao da Home) e ganhou -mt negativo pra a foto "espiar" por baixo
 * do Hero (uma tira/"1 dedo" da imagem visivel ainda dentro da area do
 * Hero) — mesmo recurso do notion.com, cujo screenshot de produto sempre
 * aparece cortado no rodape da dobra inicial.
 *
 * TAREFA 8 (comando tecnico 26/09/2026): de 6 fotos genericas pra 3
 * ofertas (Inovacao/Impacto/Creation Ops Rio), com texto sobre a foto e
 * CTA por slide. Slides migrados de hardcode pro content (c.homeSlides),
 * pra ter paridade pt/en/es. Setas somem no mobile (cobriam rosto a
 * 375px); o swipe do Embla mais os pontos bastam ali.
 */
export default function WhyWeExistSection() {
  const c = useContent();
  const lang = useLang();
  const localize = useLocalizedHref();
  const slides = c.homeSlides;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);
  const prevLabel = t("Slide anterior", "Previous slide", "Diapositiva anterior");
  const nextLabel = t("Próximo slide", "Next slide", "Siguiente diapositiva");
  const goToLabel = (n: number) => t(`Ir para o slide ${n}`, `Go to slide ${n}`, `Ir a la diapositiva ${n}`);

  const handleCtaClick = (slideId: string) => () => {
    trackEvent("home_slide_cta", { slide_id: slideId });
  };

  return (
    <section
      className="relative z-10 bg-white -mt-3 md:-mt-10 pb-10 md:pb-14"
      data-testid="section-why-we-exist"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="relative rounded-2xl overflow-hidden shadow-md" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
                <PhotoFrame
                  src={slide.image}
                  alt={slide.alt}
                  className="h-[340px] md:h-[420px]"
                  data-testid={`slide-image-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-abyss/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-10 text-bone">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bone/30 mb-3 text-xs uppercase tracking-wide font-semibold">
                    {slide.tag}
                  </span>
                  <h2 className="text-xl md:text-4xl font-semibold leading-tight max-w-2xl">
                    {slide.title}
                  </h2>
                  <p className="hidden md:block mt-3 text-base opacity-90 max-w-xl">
                    {slide.proof}
                  </p>
                  <Link href={localize(slide.ctaHref)}>
                    <span
                      onClick={handleCtaClick(slide.id)}
                      className="mt-4 inline-flex items-center gap-2 font-semibold transition-all cursor-pointer active:scale-[0.97] bg-bone text-abyss px-5 py-2.5 md:px-8 md:py-4 hover:bg-signal text-sm md:text-base"
                      data-testid={`link-slide-cta-${slide.id}`}
                    >
                      {slide.ctaLabel}
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white items-center justify-center transition-colors shadow-sm"
            data-testid="button-slide-prev"
            aria-label={prevLabel}
          >
            <ChevronLeft className="h-5 w-5 text-abyss" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white items-center justify-center transition-colors shadow-sm"
            data-testid="button-slide-next"
            aria-label={nextLabel}
          >
            <ChevronRight className="h-5 w-5 text-abyss" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => emblaApi?.scrollTo(index)}
                className="w-6 h-6 flex items-center justify-center"
                data-testid={`slide-indicator-${index}`}
                aria-label={goToLabel(index + 1)}
              >
                <span
                  className={`rounded-full transition-colors ${
                    index === selectedIndex ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
