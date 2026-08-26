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
 *
 * intensity="strong" (pedido do cliente, retratos de lideranca em Quem
 * Somos): mesmo tratamento, mais acentuado — usar com moderacao, so onde
 * pedido explicitamente.
 */
export default function PhotoFrame({
  src,
  alt,
  className,
  imgClassName,
  intensity = "normal",
  "data-testid": dataTestId,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  intensity?: "normal" | "strong";
  "data-testid"?: string;
}) {
  // Classes literais completas — interpolar a string do filtro dentro de
  // [filter:...] nao funciona: o scanner estatico do Tailwind nao resolve
  // template literals partidos, so tokens de classe completos e literais.
  const filterClass =
    intensity === "strong" ? "[filter:saturate(0.8)_contrast(1.08)]" : "[filter:saturate(0.92)_contrast(1.03)]";
  const abyssOpacityClass = intensity === "strong" ? "opacity-[0.2]" : "opacity-[0.12]";
  const sparkOpacityClass = intensity === "strong" ? "opacity-[0.08]" : "opacity-[0.05]";

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <img
        src={src}
        alt={alt}
        className={`${filterClass} ${imgClassName ?? "w-full h-full object-cover"}`}
        data-testid={dataTestId}
      />
      <div className={`absolute inset-0 bg-abyss mix-blend-multiply ${abyssOpacityClass} pointer-events-none`} />
      <div className={`absolute inset-0 bg-spark mix-blend-overlay ${sparkOpacityClass} pointer-events-none`} />
    </div>
  );
}
