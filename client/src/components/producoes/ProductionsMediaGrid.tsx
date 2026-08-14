import { Section, SectionHeader } from "@/components/primitives";
import img1 from "@assets/world_creativity_performance.jpg";
import img4 from "@assets/Hacking-Rio-Spotimagens_1767378729122.webp";
import img5 from "@assets/luiza_brunet_1767378729122.jpg";
import img6 from "@assets/Donatinho_1767378729124.jpg";
import img7 from "@assets/Storyline_BetinhoDias0_1767378729127.jpg";
import img3 from "@assets/reservax_lounge.jpg";
/**
 * Legendas em INGLES nos tres idiomas — decisao de marca.
 * Sao nomes de projeto, nao texto corrido. Nomes proprios nao se traduzem.
 *
 * Reduzido de 9 para 6 fotos, a pedido (Beach Carnival, Event Productions
 * e NGO Projects saíram). Título deixou de reaproveitar
 * c.producoes.audiovisual.title e agora vem de c.producoes.mediaGridTitle,
 * que o call site em Producoes.tsx ja usa.
 *
 * TODO(Sprint 2): adicionar cliente e ano em cada uma.
 * Foto sem contexto parece stock. Foto com cliente e ano e prova.
 */
const mediaItems = [
  { src: img1, label: "World Creativity Day" },
  { src: img3, label: "Port Rio Events" },
  { src: img4, label: "Hackathon" },
  { src: img5, label: "50+ Magazine" },
  { src: img6, label: "Pocket Show" },
  { src: img7, label: "Storyline" },
];
export default function ProductionsMediaGrid({ title }: { title: string }) {
  return (
    <Section tone="bone" divider>
      <SectionHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <figure key={item.label} className="group">
            <div className="aspect-video overflow-hidden bg-abyss">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-small font-semibold text-abyss">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
