import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import slideHome04 from "@assets/slide-home-04.jpg";
import slideHome05 from "@assets/slide-home-05.jpg";
import slideHome06 from "@assets/slide-home-06.jpg";

/**
 * Reduzido/expandido a pedido: saíram Blockchain Rio Festival e CarnaSensa
 * (2 das 5 originais). Entraram 3 fotos novas (slide-home-04/05/06, via
 * @assets — diferente do padrao antigo /images/... de caminho publico).
 * Total: 6 slides (3 antigos que ficaram + 3 novos).
 */
const slides = [
  { src: "/images/story-line.jpg", alt: "Creation Pro Story" },
  { src: "/images/expo.jpg", alt: "Expo" },
  { src: "/images/reservax.jpg", alt: "ReservaX Lounge" },
  { src: slideHome04, alt: "Creation" },
  { src: slideHome05, alt: "Creation" },
  { src: slideHome06, alt: "Creation" },
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
      className="relative py-0" 
      data-testid="section-why-we-exist"
    >
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-[300px] md:h-[400px] object-cover"
                data-testid={`slide-image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-bone/90 hover:bg-bone flex items-center justify-center transition-colors border border-[rgba(0,0,0,0.1)]"
        data-testid="button-slide-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-abyss" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-bone/90 hover:bg-bone flex items-center justify-center transition-colors border border-[rgba(0,0,0,0.1)]"
        data-testid="button-slide-next"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-abyss" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className="w-2 h-2 bg-bone/60 hover:bg-bone transition-colors"
            data-testid={`slide-indicator-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}