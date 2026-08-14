import { useContent } from "@/content";
/**
 * ANTES: 11 PNGs de @assets/ com fundo proprio (gradiente azul-rosa). O
 * object-cover cortava em quadrado e criava as "caixas furta-cor" que nao
 * pertenciam ao sistema. E era um carrossel com indicadores, trocando 5 logos
 * a cada 3s.
 *
 * AGORA: 9 SVGs vetoriais, em marquee continuo. Fundo Bone, logos em Abyss
 * monocromatico. O array e duplicado para o loop nao dar salto no fim.
 *
 * DECISAO (nao pendencia): uma linha de contexto por logo foi cogitada e
 * descartada de proposito — carrossel simples, sem legenda por cliente.
 */
const clientLogos = [
  { src: "/images/clients/1.svg", alt: "Globo" },
  { src: "/images/clients/2.svg", alt: "Asta" },
  { src: "/images/clients/3.svg", alt: "SENAC" },
  { src: "/images/clients/4.svg", alt: "L'Oréal" },
  { src: "/images/clients/5.svg", alt: "Instituto Skate Cuida" },
  { src: "/images/clients/6.svg", alt: "Íons" },
  { src: "/images/clients/7.svg", alt: "Hacking.Rio" },
  { src: "/images/clients/8.svg", alt: "Life Impact International" },
  { src: "/images/clients/9.svg", alt: "Instituto Casa do Pai" },
];
export default function ClientLogosSlideshow() {
  const c = useContent();
  // Duplicado: o loop precisa de duas voltas para nao dar salto.
  const loop = [...clientLogos, ...clientLogos];
  return (
    <section className="py-14 md:py-20 bg-bone border-t border-abyss/14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-h2 font-bold text-abyss mb-12">
          {c.about.partnersTitle}
        </h2>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade: o logo entra e sai do Bone, nao e cortado seco */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bone to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bone to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 md:gap-24">
          {loop.map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-[74px] md:h-[92px] w-auto shrink-0 object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
