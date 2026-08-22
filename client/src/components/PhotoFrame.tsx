/**
 * Moldura de tratamento de cor padrao pra toda fotografia real do site.
 * Sem isso, 21+ fotos vindas de fontes/epocas diferentes (evento, escritorio,
 * retrato, documentos) tendem a parecer uma colagem solta em vez de um
 * sistema visual unico — pedido explicito do cliente apos comparar com o
 * tratamento de fotografia do notion.com.
 *
 * Camadas: leve dessaturacao/contraste na propria foto (unifica exposicao e
 * temperatura de cor de origens diferentes) + um tint abyss em multiply
 * (aprofunda sombras em direcao ao azul-marinho da marca) + um tint spark
 * em overlay bem sutil (aquece os realces com o acento da marca). O
 * conjunto e sutil o bastante pra nao "filtrar" demais a foto, mas
 * suficiente pra qualquer imagem nova herdar o mesmo tom ao entrar aqui.
 *
 * Uso: substitui a tag <img> crua em qualquer lugar que renderiza foto real
 * (nao logos/icones). O container pai continua responsavel por
 * rounded-2xl/aspect/height, como antes.
 */
export default function PhotoFrame({
  src,
  alt,
  className,
  imgClassName,
  "data-testid": dataTestId,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  "data-testid"?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <img
        src={src}
        alt={alt}
        className={`[filter:saturate(0.92)_contrast(1.03)] ${imgClassName ?? "w-full h-full object-cover"}`}
        data-testid={dataTestId}
      />
      <div className="absolute inset-0 bg-abyss mix-blend-multiply opacity-[0.12] pointer-events-none" />
      <div className="absolute inset-0 bg-spark mix-blend-overlay opacity-[0.05] pointer-events-none" />
    </div>
  );
}
