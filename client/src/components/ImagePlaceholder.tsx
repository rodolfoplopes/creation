import { ImageIcon } from "lucide-react";
import { useLang } from "@/content";

/**
 * Caixa visivel indicando onde uma foto real deve entrar. Usada nas
 * paginas que ainda nao tem foto definida (data.imageHint), pra deixar
 * claro pro time o que falta selecionar/enviar.
 *
 * FIX (Tarefa 7.1a, comando tecnico 26/09/2026): a caixa so renderiza em
 * desenvolvimento (import.meta.env.DEV). Em producao ela expunha pro
 * publico o texto "Foto sugerida: " + a dica interna — informacao de
 * bastidor que nao deveria estar no ar. O componente que chama este aqui
 * (StubPageLayout e as paginas com placeholder proprio) e responsavel por
 * nao deixar espaco/gap orfao quando isto retorna null (ver Tarefa 7.1b/c).
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

  if (!import.meta.env.DEV) return null;

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
