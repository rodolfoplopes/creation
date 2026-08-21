import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

/**
 * Voltou para as 3 fotos originais que sobraram do primeiro corte
 * (Creation Pro Story, Expo, ReservaX Lounge). As 3 novas (slide-home-
 * 04/05/06) foram removidas — corte/enquadramento ruim com object-cover
 * em altura fixa (rosto cortado, foto esticada). Se voltar a tentar fotos
 * novas aqui, pre-cortar pra uma proporcao larga (perto de 16:9) antes de
 * subir evita o mesmo problema.
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
 */
const slides = [
  { src: "/images/story-line.webp", alt: "Creation Pro Story" },
  { src: "/images/expo.webp", alt: "Expo" },
  { src: "/images/world-creativity.webp", alt: "World Creativity Day" },
];
export default function WhyWeExistSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
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
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <section
      className="relative z-10 bg-white -mt-3 md:-mt-10 pb-10 md:pb-14"
      data-testid="section-why-we-exist"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-md" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-[300px] md:h-[420px] object-cover"
                  data-testid={`slide-image-${index}`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-sm"
            data-testid="button-slide-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-abyss" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-sm"
            data-testid="button-slide-next"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-abyss" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-white/60 hover:bg-white transition-colors"
                data-testid={`slide-indicator-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}