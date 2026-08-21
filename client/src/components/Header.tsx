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
 * ESTAGIO 3 (Manual V7) — cabecalho fixo virou dinamico: branco puro no
 * topo da pagina (igual o fundo do hero, sem nenhuma linha de separacao),
 * e transiciona pra Abyss solido com logo branco assim que a pagina rola
 * além de 20px. Estado via useEffect + scroll listener (isScrolled).
 *
 * O overlay full-screen do menu CONTINUA escuro de proposito — decisao
 * explicita manter "a caixa" quando abre.
 *
 * Logo: cabecalho fixo usa a variante Abyss (escura, contraste sobre
 * branco); o overlay continua com a variante branca (contraste sobre
 * Abyss). Dois arquivos SVG diferentes, cada um no contexto certo.
 *
 * ESTAGIO 4 (Arquitetura V2 — Manual V7.1 + indice de aprovacao do
 * cliente) — a IA de 3 areas de negocio (Consultoria/Producoes/Impacto
 * Social) foi substituida pela estrutura recomendada no indice mestre:
 *
 *   Solucoes (submenu: Estrategia · Gestao · Operacoes · Especialidades
 *   [Inovacao/Impacto/Branding & Experiencias] · Creation Ops Rio) · Cases ·
 *   Como Trabalhamos · Quem Somos · Contato
 *
 * Insights fica FORA por enquanto — o indice classifica a pagina como
 * "dependente de validacao adicional", ainda sem acervo minimo publicavel.
 * Creation Marcas/ONG.zero/BI de Eventos/Motor SROI tambem ficam fora do
 * menu principal (regra explicita do indice: seguem existindo como
 * landing, sem destaque na navegacao, ate validacao propria).
 *
 * As paginas novas (Estrategia, Gestao, Operacoes, Inovacao, Impacto,
 * Branding & Experiencias, Cases, Como Trabalhamos) ja tem conteudo nos 3
 * idiomas (ver client/src/content/stub/pt.ts, en.ts, es.ts).
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

  // Traducoes curtas dos rotulos de menu (arquitetura V2). As paginas por
  // tras desses links tambem ja tem conteudo nos 3 idiomas (ver
  // client/src/content/stub/pt.ts, en.ts, es.ts).
  const t = (pt: string, en: string, es: string) =>
    currentLang === "en" ? en : currentLang === "es" ? es : pt;

  // Cada grupo de Solucoes lista os SERVICOS reais (pagina propria) + os
  // PRODUTOS/sub-marcas com pagina propria (kind:"product"). Substitui a IA
  // antiga de 3 areas de negocio por Estrategia/Gestao/Operacoes +
  // Especialidades, conforme indice mestre da Arquitetura V2.
  const solutionGroups = [
    {
      href: "/solucoes/estrategia",
      label: t("Estratégia", "Strategy", "Estrategia"),
      subItems: [
        { label: t("Inteligência de Mercado", "Market Intelligence", "Inteligencia de Mercado"), href: "/solucoes/inteligencia-de-mercado", kind: "service" as const },
        { label: t("Diagnóstico e Planejamento", "Diagnosis & Planning", "Diagnóstico y Planificación"), href: "/solucoes/diagnostico-e-planejamento", kind: "service" as const },
        { label: t("Estruturação de Projetos", "Project Structuring", "Estructuración de Proyectos"), href: "/solucoes/estruturacao-de-projetos", kind: "service" as const },
      ],
    },
    {
      href: "/solucoes/gestao",
      label: t("Gestão", "Management", "Gestión"),
      subItems: [
        { label: t("Gestão de Projetos e PMO", "Project Management & PMO", "Gestión de Proyectos y PMO"), href: "/solucoes/gestao-de-projetos", kind: "service" as const },
        { label: t("Gestão de Processos", "Business Process Management", "Gestión de Procesos"), href: "/solucoes/gestao-de-processos", kind: "service" as const },
        { label: t("Governança e Indicadores", "Governance & KPIs", "Gobernanza e Indicadores"), href: "/solucoes/governanca-e-indicadores", kind: "service" as const },
      ],
    },
    {
      href: "/operacoes",
      label: t("Operações", "Operations", "Operaciones"),
      subItems: [
        { label: t("Gestão de Eventos", "Event Management", "Gestión de Eventos"), href: "/operacoes/gestao-de-eventos", kind: "service" as const },
        { label: t("Produção Executiva", "Executive Production", "Producción Ejecutiva"), href: "/operacoes/producao-executiva", kind: "service" as const },
        { label: "Location & Fixer", href: "/operacoes/location-fixer-rio-de-janeiro", kind: "service" as const },
        { label: t("Receptivo, Drivers & Locações", "Ground Transport & Rentals", "Receptivo, Choferes y Locaciones"), href: "/operacoes/receptivo-drivers-locacoes", kind: "service" as const },
      ],
    },
    {
      href: "/solucoes",
      label: t("Especialidades", "Specialties", "Especialidades"),
      subItems: [
        { label: t("Inovação", "Innovation", "Innovación"), href: "/inovacao", kind: "service" as const },
        { label: t("Impacto", "Impact", "Impacto"), href: "/impacto", kind: "service" as const },
        { label: t("Branding & Experiências", "Branding & Experiences", "Branding y Experiencias"), href: "/branding-experiencias", kind: "service" as const },
        { label: "Creation Ops Rio", href: "/creator-ops-rio", kind: "product" as const },
      ],
    },
  ];

  const institutional = [
    { label: t("Soluções", "Solutions", "Soluciones"), href: "/solucoes" },
    { label: "Cases", href: "/cases" },
    { label: t("Como Trabalhamos", "How We Work", "Cómo Trabajamos"), href: "/como-trabalhamos" },
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

            {/* Corpo: grupos de Solucoes (Estrategia/Gestao/Operacoes/
                Especialidades) + institucional */}
            <nav
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 md:py-16"
              data-testid="nav-overlay"
            >
              {solutionGroups.map((area) => (
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
                  {t("Navegação", "Navigation", "Navegación")}
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
