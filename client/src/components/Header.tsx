import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
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
 * Social) foi substituida pela estrutura recomendada no indice mestre.
 *
 * Creation Marcas/ONG.zero/Motor SROI/BI de Eventos — os 4 docs originais
 * pediam para ficar fora do menu ate validacao juridica/operacional
 * formal. Decisao do cliente (22/08/2026): publicar as 4 mesmo assim,
 * mantendo os disclaimers de "o que este servico nao garante/promete"
 * bem visiveis em cada pagina como protecao ate a validacao formal
 * terminar. Confirmado novamente em 25/08/2026 ao revisar o Blueprint de
 * Arquitetura V1 (que descrevia essas 4 paginas como ocultas): as ofertas
 * ja foram validadas nesse meio-tempo, entao o menu permanece publicado.
 *
 * ESTAGIO 5 (Blueprint de Arquitetura V1, 25/08/2026) — mega-menu
 * reestruturado para as 4 colunas do blueprint: Capacidades (Estrategia ·
 * Gestao · Operacoes, cada uma com seus servicos), Especialidades
 * (Inovacao · Impacto · Branding & Experiencias), Solucoes Creation
 * (Creation Ops Rio · Creation Marcas · ONG.zero · Motor SROI · BI de
 * Eventos) e A Creation (Cases · Insights · Como Trabalhamos · Quem Somos
 * · Contato). Accordion mobile passa a abrir só uma coluna por vez
 * (openColumn), em vez do Set anterior que permitia varias abertas.
 */
export default function Header() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Acordeao do mega-menu no mobile: so uma das 4 colunas (Capacidades/
  // Especialidades/Solucoes Creation/A Creation) fica aberta por vez —
  // regra explicita do Blueprint de Arquitetura V1 secao 7 ("Somente um
  // grupo permanece aberto por vez"). No desktop (lg+) todas as colunas
  // ficam sempre expandidas, ignorando este estado.
  const [openColumn, setOpenColumn] = useState<string | null>(null);
  const toggleColumn = (id: string) => {
    setOpenColumn((prev) => (prev === id ? null : id));
  };
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

  // 4 colunas do mega-menu, conforme o Blueprint de Arquitetura V1
  // (25/08/2026, secoes 1-2): Capacidades e Especialidades agrupam
  // sub-paginas (bold, "paginas principais") com seus proprios servicos/
  // subitens; Solucoes Creation lista as ofertas proprietarias, sem
  // subitens proprios; A Creation e a coluna institucional (sem grupos
  // aninhados). O titulo de cada coluna aponta para "/solucoes" (unico hub
  // agregador que existe hoje — ver stubData.solucoes) quando faz sentido;
  // Solucoes Creation nao tem hub proprio ainda, entao o titulo fica so
  // como rotulo (mesmo padrao ja usado em "A Creation").
  const megaColumns = [
    {
      id: "capacidades",
      label: t("Capacidades", "Capabilities", "Capacidades"),
      href: "/solucoes",
      groups: [
        {
          href: "/solucoes/estrategia",
          label: t("Estratégia", "Strategy", "Estrategia"),
          subItems: [
            { label: t("Inteligência de Mercado", "Market Intelligence", "Inteligencia de Mercado"), href: "/solucoes/inteligencia-de-mercado" },
            { label: t("Diagnóstico e Planejamento", "Diagnosis & Planning", "Diagnóstico y Planificación"), href: "/solucoes/diagnostico-e-planejamento" },
            { label: t("Estruturação de Projetos", "Project Structuring", "Estructuración de Proyectos"), href: "/solucoes/estruturacao-de-projetos" },
          ],
        },
        {
          href: "/solucoes/gestao",
          label: t("Gestão", "Management", "Gestión"),
          subItems: [
            { label: t("Gestão de Projetos e PMO", "Project Management & PMO", "Gestión de Proyectos y PMO"), href: "/solucoes/gestao-de-projetos" },
            { label: t("Gestão de Processos", "Business Process Management", "Gestión de Procesos"), href: "/solucoes/gestao-de-processos" },
            { label: t("Governança e Indicadores", "Governance & KPIs", "Gobernanza e Indicadores"), href: "/solucoes/governanca-e-indicadores" },
          ],
        },
        {
          href: "/solucoes/operacoes",
          label: t("Operações", "Operations", "Operaciones"),
          subItems: [
            { label: t("Gestão de Eventos", "Event Management", "Gestión de Eventos"), href: "/solucoes/operacoes/gestao-de-eventos" },
            { label: t("Produção Executiva", "Executive Production", "Producción Ejecutiva"), href: "/solucoes/operacoes/producao-executiva" },
            { label: "Location & Fixer", href: "/solucoes/operacoes/location-fixer-rio-de-janeiro" },
            { label: t("Receptivo, Drivers & Locações", "Ground Transport & Rentals", "Receptivo, Choferes y Locaciones"), href: "/solucoes/operacoes/receptivo-drivers-locacoes" },
          ],
        },
      ],
    },
    {
      id: "especialidades",
      label: t("Especialidades", "Specialties", "Especialidades"),
      href: "/solucoes",
      groups: [
        { href: "/solucoes/inovacao", label: t("Inovação", "Innovation", "Innovación"), subItems: [] },
        { href: "/solucoes/impacto", label: t("Impacto", "Impact", "Impacto"), subItems: [] },
        { href: "/solucoes/branding-experiencias", label: t("Branding & Experiências", "Branding & Experiences", "Branding y Experiencias"), subItems: [] },
      ],
    },
    {
      id: "solucoes-creation",
      label: t("Soluções Creation", "Creation Solutions", "Soluciones Creation"),
      href: null,
      groups: [
        { href: "/creation-ops-rio", label: "Creation Ops Rio", subItems: [] },
        { href: "/creation-marcas", label: "Creation Marcas", subItems: [] },
        { href: "/ong-zero", label: "ONG.zero", subItems: [] },
        { href: "/motor-sroi", label: "Motor SROI", subItems: [] },
        { href: "/bi-de-eventos", label: "BI de Eventos", subItems: [] },
      ],
    },
  ];

  const institutional = [
    { label: t("Cases", "Cases", "Casos"), href: "/cases" },
    { label: "Insights", href: "/insights" },
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
        <div className="w-full px-6 sm:px-8 lg:px-10">
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
          <div className="w-full px-6 sm:px-8 lg:px-10">
            {/* Topo do overlay: logo + fechar (mesmo gutter do header, edge-to-edge) */}
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
          </div>

          {/* Corpo do overlay: largura de conteudo (max-w-6xl), mesma
              proporcao das paginas internas */}
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
            {/* Corpo: as 4 colunas do Blueprint (Capacidades/Especialidades/
                Solucoes Creation/A Creation). No mobile viram acordeao de
                coluna unica (openColumn); no desktop (lg+) todas ficam
                sempre expandidas. */}
            <nav
              className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-10 md:py-16"
              data-testid="nav-overlay"
            >
              {megaColumns.map((column) => (
                <div key={column.id}>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    {column.href ? (
                      <Link href={localize(column.href)} onClick={() => handleMenuClick(column.href)}>
                        <span
                          className={`block text-h2 font-bold cursor-pointer transition-colors ${
                            isCurrentPath(column.href)
                              ? "text-signal"
                              : "text-bone hover:text-signal"
                          }`}
                        >
                          {column.label}
                        </span>
                      </Link>
                    ) : (
                      <span className="block text-h2 font-bold text-bone">{column.label}</span>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleColumn(column.id)}
                      className="lg:hidden text-bone/60 hover:text-bone p-1 -mr-1 transition-transform"
                      style={{ transform: openColumn === column.id ? "rotate(180deg)" : "none" }}
                      aria-expanded={openColumn === column.id}
                      aria-label={t("Expandir", "Expand", "Expandir")}
                      data-testid={`button-toggle-column-${column.id}`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </div>
                  <div className={`space-y-5 ${openColumn === column.id ? "block" : "hidden"} lg:block`}>
                    {column.groups.map((group) => (
                      <div key={group.href}>
                        <Link href={localize(group.href)} onClick={() => handleMenuClick(group.href)}>
                          <span
                            className={`block text-h3 font-semibold cursor-pointer transition-colors ${
                              isCurrentPath(group.href)
                                ? "text-signal"
                                : "text-bone hover:text-signal"
                            }`}
                          >
                            {group.label}
                          </span>
                        </Link>
                        {group.subItems.length > 0 && (
                          <ul className="space-y-2.5 mt-2.5">
                            {group.subItems.map((item) => (
                              <li key={item.href}>
                                <Link href={localize(item.href)} onClick={() => handleMenuClick(item.href)}>
                                  <span
                                    className={`cursor-pointer transition-colors text-small font-normal ${
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
                  </div>
                </div>
              ))}

              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="block text-h2 font-bold text-bone">
                    {t("A Creation", "About Creation", "Sobre Creation")}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleColumn("a-creation")}
                    className="lg:hidden text-bone/60 hover:text-bone p-1 -mr-1 transition-transform"
                    style={{ transform: openColumn === "a-creation" ? "rotate(180deg)" : "none" }}
                    aria-expanded={openColumn === "a-creation"}
                    aria-label={t("Expandir", "Expand", "Expandir")}
                    data-testid="button-toggle-column-a-creation"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </div>
                <ul className={`space-y-3 ${openColumn === "a-creation" ? "block" : "hidden"} lg:block`}>
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
