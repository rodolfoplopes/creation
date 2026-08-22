import { ImageIcon } from "lucide-react";
import { useLang } from "@/content";

/**
 * Caixa visivel indicando onde uma foto real deve entrar. Usada nas
 * paginas que ainda nao tem foto definida (data.imageHint), pra deixar
 * claro pro cliente o que falta selecionar/enviar — pedido explicito
 * dele em vez de deixar o gap invisivel.
 */
export default function ImagePlaceholder({
  hint,
  className,
  rounded = true,
  bordered = true,
}: {
  hint: string;
  /** Classes de tamanho/posicao (ex.: "h-32", "mb-4 h-48"). Nao inclua
   * classes de rounded ou border aqui — use as props "rounded"/"bordered",
   * que evitam conflito de especificidade do Tailwind com as classes base. */
  className?: string;
  rounded?: boolean;
  bordered?: boolean;
}) {
  const lang = useLang();
  const label = lang === "en" ? "Suggested photo: " : lang === "es" ? "Foto sugerida: " : "Foto sugerida: ";

  return (
    <div
      className={`${rounded ? "rounded-2xl" : ""} ${
        bordered ? "border-2 border-dashed border-abyss/20" : ""
      } bg-bone/40 flex flex-col items-center justify-center gap-3 px-8 text-center ${
        className ?? "h-[280px] md:h-[420px]"
      }`}
    >
      <ImageIcon className="h-8 w-8 text-abyss/30" strokeWidth={1.5} />
      <p className="text-small text-abyss/50 max-w-sm leading-relaxed">
        <span className="font-semibold text-abyss/60">{label}</span>
        {hint}
      </p>
    </div>
  );
}
