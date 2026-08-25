/**
 * Mapeia as categorias do site (Insights, Especialidades) pra uma
 * familia de cor terciaria (ver tailwind.config.ts — adendo cromatico
 * V7.1). "Uma cor, um sentido": o mapeamento e fixo e nao deve variar
 * de pagina pra pagina. Categorias sem correspondencia semantica clara
 * (ex.: Institucional) ficam de fora de proposito — melhor sem cor do
 * que uma cor que nao diz nada.
 *
 * IMPORTANTE: as classes ficam escritas por extenso (nao interpoladas
 * tipo `bg-${family}-tint`) porque o scanner do Tailwind so encontra
 * classes que aparecem litealmente no codigo-fonte — string montada em
 * runtime nunca gera CSS e a cor simplesmente nao aparece.
 */
const CATEGORY_CHIP_CLASSES: Record<string, string> = {
  "Estratégia": "bg-iris-tint text-iris-text",
  "Gestão": "bg-lapis-tint text-lapis-text",
  "Operações": "bg-amber-tint text-amber-text",
  "Inovação": "bg-lichen-tint text-lichen-text",
  "Impacto": "bg-kelp-tint text-kelp-text",
  "Branding & Experiências": "bg-rose-tint text-rose-text",
};

const DEFAULT_CHIP_CLASSES = "bg-bone text-abyss/70";

/** Classes Tailwind pra um "chip" de categoria (fundo tint + texto). */
export function categoryChipClasses(category: string): string {
  return CATEGORY_CHIP_CLASSES[category] ?? DEFAULT_CHIP_CLASSES;
}
