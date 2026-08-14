import img1 from "@assets/wcd_magician.jpg";
import img4 from "@assets/DSC00711_1767379689080.jpg";
import img5 from "@assets/hacking_rio_workshop.jpg";

/**
 * Reduzido de 6 para 3 fotos, a pedido — o nome do componente ("Triple")
 * finalmente bate com o que ele mostra. As 3 removidas (Eu Amo Itaguaí,
 * Ilha da Madeira, feira de artesanato) continuam no attached_assets/,
 * so nao sao mais importadas aqui.
 */
const images = [
  {
    src: img1,
    alt: "World Creativity Day 2023 - Interação com público"
  },
  {
    src: img4,
    alt: "Comunidade ribeirinha - Projeto de impacto social"
  },
  {
    src: img5,
    alt: "Hacking Rio - Workshop de tecnologia"
  }
];
export default function ImpactoTripleImage() {
  return (
    <section className="py-12 md:py-16 bg-bone">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="bg-bone border border-[rgba(15,23,42,0.12)] overflow-hidden group hover:border-[rgba(15,23,42,0.20)] transition-colors"
              data-testid={`impacto-image-${index}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}