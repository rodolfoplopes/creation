import { useEffect, useState } from "react";

export interface SectionNavItem {
  id: string;
  label: string;
}

/**
 * Tab-bar interna de ancoras, inspirada em notion.com/pt/product/features
 * (abas Capture/Encontre/Automatize que pulam direto pra secao, sem
 * rolar a pagina inteira). Achado da auditoria UX/UI 22/08/2026: Home e
 * as landings mais longas (Motor SROI, ONG.zero) nao tinham nenhuma
 * navegacao interna.
 *
 * Fica logo abaixo do header (sticky), com o item ativo destacado via
 * IntersectionObserver — nao precisa de biblioteca externa.
 */
export default function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-abyss/10">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <nav
          className="flex gap-6 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Navegação de seções da página"
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`text-small font-semibold whitespace-nowrap transition-colors px-0.5 py-1 border-b-2 shrink-0 ${
                active === item.id
                  ? "text-spark border-spark"
                  : "text-abyss/60 border-transparent hover:text-abyss"
              }`}
              data-testid={`sectionnav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
