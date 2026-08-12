import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useContent, useLang } from "@/content";
import { getPathWithoutLang, type SupportedLang } from "@/lib/lang";
import { storeLang } from "@/lib/detectLang";

/**
 * ESTAGIO 2 — mega-menu full-screen (Manual V6, pag. 21 "Shell do site").
 * Substitui o Estagio 1 (lista horizontal desktop + Sheet lateral mobile).
 *
 * "Hamburguer em todos os dispositivos; overlay full-screen em Abyss."
 * Cabecalho fica so com logo + hamburguer — minimalista, como o V6 pede.
 *
 * Colunas de area: uso as sub-marcas/produtos que TEM pagina propria de
 * verdade hoje (Creation Marcas, Creation Ops Rio, BI de Eventos, ONG.zero,
 * Motor SROI), nao o exemplo ilustrativo do manual (Estrategia/Inovacao/
 * Marcas) — esses nomes sao exemplo de profundidade, nao taxonomia literal
 * (o manual explicita: "nao substitui... arquitetura do site").
 */
export default function Header() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const c = useContent();
  const currentLang = useLang();

  const showCreationProfile = currentLang === "en";

  const localize = (href: string) =>
    href === "/" ? `/${currentLang}` : `/${currentLang}${href}`;

  const cleanPath = getPathWithoutLang(location) || "/";
  const isCurrentPath = (href: string) => cleanPath === href;

  const switchLanguage = (targetLang: SupportedLang) => {
    storeLang(targetLang);
    setLocation(
      cleanPath === "/" ? `/${targetLang}` : `/${targetLang}${cleanPath}`,
    );
  };

  const langButtons: SupportedLang[] = ["pt", "en", "es"];

  // Trava scroll enquanto o overlay esta aberto.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Esc fecha o overlay.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Fecha o overlay automaticamente ao trocar de rota (clique em link).
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const areas = [
    {
      href: "/consultoria",
      label: c.nav.consultoria,
      subItems: [
        {
          label: c.consultoria.creationMarcas.title,
          href: c.consultoria.creationMarcas.href,
        },
      ],
    },
    {
      href: "/producoes",
      label: c.nav.producoes,
      subItems: [
        {
          label: c.producoes.creatorOpsRio.eyebrow,
          href: c.producoes.creatorOpsRio.href,
        },
        {
          label: c.producoes.biEventos.eyebrow,
          href: c.producoes.biEventos.href,
        },
      ],
    },
    {
      href: "/impacto-social",
      label: c.nav.impactoSocial,
      subItems: [
        {
          label: c.impactoSocial.ongZero.title,
          href: c.impactoSocial.ongZero.href,
        },
        {
          label: c.impactoSocial.motorSroi.title,
          href: c.impactoSocial.motorSroi.href,
        },
      ],
    },
  ];

  const institutional = [
    { label: c.nav.method, href: "/metodo" },
    { label: c.nav.about, href: "/quem-somos" },
    { label: c.nav.contact, href: "/contato" },
    ...(showCreationProfile
      ? [{ label: "Creation Profile", href: "/profile" }]
      : []),
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-abyss"
        data-testid="header"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href={localize("/")} data-testid="link-logo">
              <img
                src="/brand/lockup_bone_transp.svg"
                alt={c.brand.name}
                className="h-10 md:h-16 w-auto cursor-pointer"
              />
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="text-bone hover:text-bone/80 transition-colors p-2 -mr-2"
              aria-label="Menu"
              aria-expanded={isOpen}
              data-testid="button-menu-open"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay full-screen */}
      <div
        className={`fixed inset-0 z-[60] bg-abyss transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        data-testid="overlay-menu"
      >
        <div className="h-full overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Topo do overlay: logo + fechar */}
            <div className="flex h-16 items-center justify-between">
              <Link href={localize("/")} data-testid="link-logo-overlay">
                <img
                  src="/brand/lockup_bone_transp.svg"
                  alt={c.brand.name}
                  className="h-10 md:h-16 w-auto cursor-pointer"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-bone hover:text-bone/80 transition-colors p-2 -mr-2"
                aria-label="Fechar menu"
                data-testid="button-menu-close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Corpo: 3 areas + institucional */}
            <nav
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 md:py-16"
              data-testid="nav-overlay"
            >
              {areas.map((area) => (
                <div key={area.href}>
                  <p className="text-caption font-semibold text-bone/50 mb-4 uppercase tracking-widest">
                    {c.nav.areasLabel}
                  </p>
                  <Link href={localize(area.href)}>
                    <span
                      className={`block text-h2 font-bold mb-4 cursor-pointer transition-colors ${
                        isCurrentPath(area.href)
                          ? "text-signal"
                          : "text-bone hover:text-signal"
                      }`}
                    >
                      {area.label}
                    </span>
                  </Link>
                  {area.subItems.length > 0 && (
                    <ul className="space-y-3">
                      {area.subItems.map((item) => (
                        <li key={item.href}>
                          <Link href={localize(item.href)}>
                            <span
                              className={`text-small uppercase tracking-wide font-semibold cursor-pointer transition-colors ${
                                isCurrentPath(item.href)
                                  ? "text-signal"
                                  : "text-bone/60 hover:text-signal"
                              }`}
                            >
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div>
                <p className="text-caption font-semibold text-bone/50 mb-4 uppercase tracking-widest">
                  {c.nav.companyLabel}
                </p>
                <ul className="space-y-3">
                  {institutional.map((item) => (
                    <li key={item.href}>
                      <Link href={localize(item.href)}>
                        <span
                          className={`block text-h3 font-semibold cursor-pointer transition-colors ${
                            isCurrentPath(item.href)
                              ? "text-signal"
                              : "text-bone hover:text-signal"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Rodape do overlay: idioma */}
            <div className="border-t border-bone/14 py-6 flex items-center gap-2">
              {langButtons.map((lang) => (
                <button
                  key={lang}
                  onClick={() => switchLanguage(lang)}
                  className={`text-small font-semibold px-3 py-1.5 transition-colors ${
                    currentLang === lang
                      ? "text-signal"
                      : "text-bone/50 hover:text-bone"
                  }`}
                  data-testid={`button-lang-${lang}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
