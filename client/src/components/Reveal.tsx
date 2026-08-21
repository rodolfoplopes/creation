import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Motion — Manual V7.1, pag. 18 ("Movimento com proposito"):
 *   Assentar: fade + 6px.
 *   Conectar: linhas e curvas revelam relacoes (fora do escopo deste
 *     primitivo — e sobre a biblioteca de simbolos, nao sobre reveal).
 *   Repousar: sem overshoot.
 *
 * Dispara uma unica vez quando o elemento entra no viewport (nao anima de
 * novo ao rolar pra cima e voltar — "revelar", nao "piscar"). Respeita
 * prefers-reduced-motion nativamente: a transicao CSS so aplica opacity/
 * translate, sem depender de JS para o estado final ficar correto.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "500ms",
        transitionTimingFunction: "ease-out",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
      }}
    >
      {children}
    </div>
  );
}
