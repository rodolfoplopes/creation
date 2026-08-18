import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useContent, useLang } from "@/content";
import { getPathWithoutLang, type SupportedLang } from "@/lib/lang";
import { storeLang } from "@/lib/detectLang";

/**
 * ESTAGIO 2 — mega-menu full-screen (Manual V6, pag. 21 "Shell do site").
 *
 * "Hamburguer em todos os dispositivos; overlay full-screen em Abyss."
 * Cabecalho fica so com logo + hamburguer — minimalista, como o V6 pede.
 *
 * CORRECAO (apos feedback real): a primeira versao do menu so listava os
 * PRODUTOS/sub-marcas com pagina propria (Creation Marcas, Creation Ops
 * Rio, BI de Eventos, ONG.zero, Motor SROI), escondendo os SERVICOS reais
 * de cada area (Gestao de Projetos, Eventos e Experiencias, Fixer etc.),
 * que so existem como secao dentro da pagina da area. Isso fazia o menu
 * comunicar errado — como se as ferramentas fossem o produto principal.
 *
 * Agora cada coluna lista os 4 servicos reais (link com #ancora pra secao
 * dentro da pagina) + os 2 produtos com pagina propria (kind:"product",
 * estilo visual distinto: caixa alta). O scroll ate a ancora e feito na
 * mao (handleMenuClick) porque o wouter nao rola sozinho ao navegar.
 *
 * ESTAGIO 3 (Manual V7) — cabecalho fixo virou dinamico: branco puro no
 * topo da pagina (igual o fundo do hero, sem nenhuma linha de separacao),
 * e transiciona pra Abyss solido com logo branco assim que a pagina rola
 * além de 20px. Estado via useEffect + scroll listener (isScrolled).
 *
 * Tentativa anterior usava uma borda inferior fina (hairline) pra dar
 * alguma definicao ao branco-sobre-branco — feedback real: nao ficou bom,
 * removida. A transicao de cor ao rolar resolve a definicao de um jeito
 * mais dinamico, sem precisar de linha nenhuma.
 *
 * O overlay full-screen do menu CONTINUA escuro
 * de proposito — foi decisao explicita manter "a caixa" quando abre.
 *
 * Logo: cabecalho fixo usa a variante Abyss (escura, contraste sobre
 * branco); o overlay continua com a variante branca (contraste sobre
 * Abyss). Dois arquivos SVG diferentes, cada um no contexto certo.
 */
export default function Header() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const c = useContent();
  const currentLang = useLang();

  const showCreationProfile = currentLang === "en";

  const localize = (href: string) =>
    href === "/" ? `/${currentLang}` : `/${currentLang}${href}`;

  const cleanPath = getPathWithoutLang(location) || "/";
  const isCurrentPath = (href: string) => cleanPath === href;

  const switchLanguage = (targetLang: SupportedLang) => {
    storeLang(targetLang);
    setLocation(cleanPath === "/" ? `/${targetLang}` : `/${targetLang}${cleanPath}`);
  };

  const langButtons: SupportedLang[] = ["pt", "en", "es"];

  // Cabecalho branco no topo, vira Abyss com logo branco ao rolar. Limiar
  // de 20px evita ficar trocando de cor com um micro-scroll acidental.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Rola ate a secao ancorada apos navegar (wouter nao faz isso sozinho).
  // Tambem fecha o overlay explicitamente: se o clique for uma ancora na
  // MESMA pagina (ex.: ja em /consultoria, clica em #inovacao), o pathname
  // nao muda, e o useEffect que fecha ao trocar de rota pode nao disparar.
  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    const hash = href.split("#")[1];
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  };

  // Cada area lista os SERVICOS reais (ancora dentro da propria pagina) +
  // os PRODUTOS/sub-marcas que tem pagina propria (kind:"product"). Antes
  // so os produtos apareciam, escondendo o conteudo principal do menu.
  const areas = [
    {
      href: "/consultoria",
      label: c.nav.consultoria,
      subItems: [
        { label: c.consultoria.services[0].title, href: "/consultoria#gestao-de-projetos", kind: "service" as const },
        { label: c.consultoria.services[2].title, href: "/consultoria#branding-e-identidade", kind: "service" as const },
        { label: c.consultoria.services[1].title, href: "/consultoria#inteligencia-e-estrategia", kind: "service" as const },
        { label: c.consultoria.services[3].title, href: "/consultoria#processos", kind: "service" as const },
        {
          label: currentLang === "en" ? "Innovation" : currentLang === "es" ? "Innovación" : "Inovação",
          href: "/consultoria#inovacao",
          kind: "service" as const,
        },
        {
          // Nome de menu diferente do nome da pagina/produto ("Creation
          // Marcas"), a pedido: rotulo generico do servico no menu.
          label:
            currentLang === "en"
              ? "Trademark Registration & Protection"
              : currentLang === "es"
                ? "Registro y Protección de Marcas"
                : "Registro e Proteção de Marcas",
          href: c.consultoria.creationMarcas.href,
          kind: "product" as const,
        },
      ],
    },
    {
      href: "/producoes",
      label: c.nav.producoes,
      subItems: [
        { label: c.producoes.events.title, href: "/producoes#eventos", kind: "service" as const },
        { label: c.producoes.audiovisual.title, href: "/producoes#audiovisual", kind: "service" as const },
        { label: c.producoes.operational.fixer.title, href: "/producoes#fixer", kind: "service" as const },
        { label: c.producoes.operational.hosting.title, href: "/producoes#host", kind: "service" as const },
        { label: "Creation Ops Rio", href: c.producoes.creatorOpsRio.href, kind: "product" as const },
        {
          label: currentLang === "en" ? "BI for Events" : "BI de Eventos",
          href: c.producoes.biEventos.href,
          kind: "product" as const,
        },
      ],
    },
    {
      href: "/impacto-social",
      label: c.nav.impactoSocial,
      subItems: [
        { label: c.impactoSocial.services[0].title, href: "/impacto-social#estruturacao-de-ongs", kind: "service" as const },
        { label: c.impactoSocial.services[1].title, href: "/impacto-social#programas-de-impacto-social", kind: "service" as const },
        { label: c.impactoSocial.services[2].title, href: "/impacto-social#relatorios-de-impacto-e-esg", kind: "service" as const },
        { label: c.impactoSocial.services[3].title, href: "/impacto-social#gestao-de-projetos-sociais", kind: "service" as const },
        { label: c.impactoSocial.ongZero.eyebrow, href: c.impactoSocial.ongZero.href, kind: "product" as const },
        { label: "Motor SROI", href: c.impactoSocial.motorSroi.href, kind: "product" as const },
      ],
    },
  ];

  const institutional = [
    { label: c.nav.method, href: "/metodo" },
    { label: c.nav.about, href: "/quem-somos" },
    { label: c.nav.contact, href: "/contato" },
    ...(showCreationProfile ? [{ label: "Creation Profile", href: "/profile" }] : []),
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          isScrolled ? "bg-abyss" : "bg-white"
        }`}
        data-testid="header"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href={localize("/")} data-testid="link-logo">
              <img
                src={
                  isScrolled
                    ? "/brand/creation_assinatura_completa_branca.svg"
                    : "/brand/creation_assinatura_completa_abyss.svg"
                }
                alt={c.brand.name}
                className="h-5 md:h-7 w-auto cursor-pointer"
              />
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className={`transition-colors p-2 -mr-2 ${
                isScrolled
                  ? "text-bone hover:text-bone/80"
                  : "text-abyss hover:text-abyss/70"
              }`}
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
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        data-testid="overlay-menu"
      >
        <div className="h-full overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Topo do overlay: logo + fechar */}
            <div className="flex items-center justify-between py-4">
              <Link href={localize("/")} data-testid="link-logo-overlay">
                <img
                  src="/brand/creation_assinatura_completa_branca.svg"
                  alt={c.brand.name}
                  className="h-5 md:h-7 w-auto cursor-pointer"
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
                  <Link href={localize(area.href)} onClick={() => handleMenuClick(area.href)}>
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
                          <Link href={localize(item.href)} onClick={() => handleMenuClick(item.href)}>
                            <span
                              className={`cursor-pointer transition-colors text-small ${
                                item.kind === "product"
                                  ? "font-semibold tracking-wide"
                                  : "font-normal"
                              } ${
                                isCurrentPath(item.href.split("#")[0])
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
                      <Link href={localize(item.href)} onClick={() => handleMenuClick(item.href)}>
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
