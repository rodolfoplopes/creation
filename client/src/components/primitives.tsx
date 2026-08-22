import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocalizedHref } from "@/content";

// ============================================================================
// PRIMITIVOS — Manual de Identidade V6.0
// ----------------------------------------------------------------------------
// SUPERFICIES: White (55-65%, fundo principal, PADRAO do Section agora) e
// Bone (10-15%, so secoes editoriais/transicoes e cartoes internos — cases,
// FeatureCard). Abyss/Ink permanecem os tons escuros. O ritmo entre secoes
// claras consecutivas vem de DIVISOR (border-abyss/14), nao de cor de fundo.
//
// CONTRASTE (manual V6, pag. 15):
//   Fundo claro (bone/white): corpo text-abyss | link Abyss peso 600 sublinhado
//                              PROIBIDO texto Mist/signal em fundo claro
//   Fundo escuro (abyss/ink): corpo text-bone | link/acento Mist (token
//                              "signal" no codigo, valor Mist — ver
//                              tailwind.config.ts)
//
// GRID E RESPIRO (manual V6, pag. 18): 12 colunas desktop / 8 tablet / 4
// mobile, base espacial em multiplos de 8px, 64px+ entre blocos principais.
// A escala de padding abaixo (py-10/14/20/28 = 40/56/80/112px) ja respeita
// os multiplos de 8. NAO implementado ainda: grid formal de 12 colunas com
// col-span — hoje cada pagina usa grid-cols-N avulso. Rebuild maior, fica
// para decisao separada (ja discutida e adiada de proposito).
// ============================================================================

type Tone = "white" | "bone" | "abyss" | "ink";

const TONES: Record<Tone, string> = {
  white: "bg-white text-abyss",
  bone: "bg-bone text-abyss",
  abyss: "bg-abyss text-bone",
  ink: "bg-ink text-bone",
};

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  /** Linha superior. E o que cria ritmo entre secoes claras consecutivas. */
  divider?: boolean;
  className?: string;
  firstContent?: boolean;
  id?: string;
}

export function Section({
  children,
  tone = "white",
  size = "md",
  divider = false,
  className,
  firstContent,
  id,
}: SectionProps) {
  const padding = {
    sm: "py-10 md:py-14",
    md: "py-14 md:py-20",
    lg: "py-20 md:py-28",
  }[size];

  return (
    <section
      id={id}
      className={cn(
        TONES[tone],
        padding,
        divider && "border-t border-abyss/14",
        className,
      )}
      data-first-content={firstContent ? "true" : undefined}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

/**
 * Tipografia (V6): Inter em tudo, titulo e corpo. Newsreader saiu do
 * sistema oficial — font-display hoje aponta para Inter (tailwind.config.ts).
 */
export function SectionHeader({
  title,
  subtitle,
  description,
  align = "left",
  onDark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center"
          ? "text-center mx-auto max-w-measure"
          : "max-w-measure",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display text-h2 sm:text-h1 font-bold",
          onDark ? "text-bone" : "text-abyss",
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            onDark ? "text-bone/70" : "text-abyss/70",
          )}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={cn(
            "mt-3 text-small leading-relaxed",
            onDark ? "text-bone/70" : "text-abyss/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Grid({
  children,
  cols = 3,
  className,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  const colsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[cols];

  return (
    <div className={cn("grid gap-8", colsClass, className)}>{children}</div>
  );
}

/**
 * O card que se repetia em 6 paginas. Sem icone: os anteriores eram genericos
 * de biblioteca e rebaixavam a tipografia, que e o ativo mais forte.
 *
 * O eyebrow em fundo CLARO usa abyss/70, nunca signal: Signal sobre Bone da
 * 2.20:1 e reprova (manual, pag. W1).
 */
export function FeatureCard({
  title,
  description,
  eyebrow,
  accent = false,
  onDark = false,
  className,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  accent?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-l-2 pl-6 py-1",
        accent ? "border-signal" : onDark ? "border-bone/30" : "border-abyss",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-caption font-semibold mb-2 uppercase tracking-widest",
            onDark ? "text-signal" : "text-abyss/70",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h3
        className={cn(
          "text-h3 font-semibold mb-2",
          onDark ? "text-bone" : "text-abyss",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "leading-relaxed",
          onDark ? "text-bone/70" : "text-abyss/70",
        )}
      >
        {description}
      </p>
    </div>
  );
}

export function CTAButton({
  label,
  href,
  variant = "primary",
  onDark = false,
  className,
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
  onDark?: boolean;
  className?: string;
}) {
  const localize = useLocalizedHref();

  const styles = {
    primary: onDark
      ? "bg-bone text-abyss px-8 py-4 hover:bg-signal"
      : "bg-abyss text-bone px-8 py-4 hover:bg-ink",
    secondary: onDark
      ? "border border-bone/30 text-bone px-8 py-4 hover:border-bone"
      : "border border-abyss/20 text-abyss px-8 py-4 hover:border-abyss",
    link: onDark
      ? "text-signal hover:gap-3"
      : "text-abyss font-semibold underline underline-offset-4 hover:gap-3",
  }[variant];

  return (
    <Link href={localize(href)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 font-semibold transition-all cursor-pointer active:scale-[0.97]",
          styles,
          className,
        )}
      >
        {label}
        <ArrowRight className="h-5 w-5" />
      </span>
    </Link>
  );
}
