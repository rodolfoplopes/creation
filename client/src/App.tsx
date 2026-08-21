import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/Home";
import QuemSomos from "@/pages/QuemSomos";
import CreatorOpsRio from "@/pages/producoes/CreatorOpsRio";
import CreationMarcas from "@/pages/CreationMarcas";
import OngZero from "@/pages/OngZero";
import MotorSroi from "@/pages/MotorSroi";
import BiEventos from "@/pages/BiEventos";
import Contato from "@/pages/Contato";
import CreationProfile from "@/pages/CreationProfile";
import Cases from "@/pages/Cases";
import NotFound from "@/pages/not-found";
import StubPageLayout from "@/components/StubPageLayout";
import { stubData } from "@/content/stubData";
import {
  supportedLangs,
  defaultLang,
  getLangFromPath,
  getPathWithLang,
  isValidLang,
} from "@/lib/lang";
import { resolveInitialLang } from "@/lib/detectLang";

/**
 * `import './i18n'` REMOVIDO (Sprint 0). O idioma vem da rota e o conteudo do
 * useContent(). React puro, sem DOM overwrite.
 *
 * Arquitetura V2 (Manual V7.1 + indice de aprovacao do cliente): a IA de
 * 3 areas (Consultoria/Producoes/Impacto Social) foi substituida por
 * Solucoes > Estrategia/Gestao/Operacoes/Inovacao/Impacto/Branding &
 * Experiencias. Paginas novas sao STUBS PT-only (ver
 * client/src/content/stubData.ts) — estrutura e links aprovaveis, texto e
 * design finais ainda pendentes. Rotas antigas dissolvidas redirecionam:
 *   /consultoria    -> /solucoes
 *   /producoes      -> /operacoes
 *   /impacto-social -> /impacto
 *   /metodo         -> /como-trabalhamos
 *   /profile        -> so em EN
 *   /creator-ops-rio, /creation-marcas, /ong-zero, /motor-sroi, /bi-de-eventos
 *     -> landings de sub-marca/produto, preservadas como estavam
 */

function LanguageSync({ lang }: { lang: string }) {
  useEffect(() => {
    if (isValidLang(lang)) {
      document.documentElement.lang = lang;
    }
  }, [lang]);
  return null;
}

function HrefLangTags({ currentPath }: { currentPath: string }) {
  useEffect(() => {
    const existingLinks = document.querySelectorAll(
      'link[rel="alternate"][hreflang]',
    );
    existingLinks.forEach((link) => link.remove());

    const baseUrl = window.location.origin;
    const pathWithoutLang = currentPath.replace(/^\/(en|es|pt)/, "") || "/";
    const suffix = pathWithoutLang === "/" ? "" : pathWithoutLang;

    supportedLangs.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = `${baseUrl}/${lang}${suffix}`;
      document.head.appendChild(link);
    });

    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = `${baseUrl}/${defaultLang}${suffix}`;
    document.head.appendChild(defaultLink);
  }, [currentPath]);

  return null;
}

function ScrollToTop({ path }: { path: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [path]);
  return null;
}

function LangRouter({ lang }: { lang: string }) {
  const [location] = useLocation();

  return (
    <>
      <ScrollToTop path={location} />
      <LanguageSync lang={lang} />
      <HrefLangTags currentPath={location} />
      <Switch>
        <Route path={`/${lang}`} component={Home} />

        {/* Arquitetura V2 (Manual V7.1 + indice de aprovacao) — stubs PT-only,
            ver client/src/content/stubData.ts */}
        <Route path={`/${lang}/solucoes`} component={() => <StubPageLayout data={stubData.solucoes} />} />
        <Route path={`/${lang}/solucoes/estrategia`} component={() => <StubPageLayout data={stubData.estrategia} />} />
        <Route path={`/${lang}/solucoes/inteligencia-de-mercado`} component={() => <StubPageLayout data={stubData["inteligencia-de-mercado"]} />} />
        <Route path={`/${lang}/solucoes/diagnostico-e-planejamento`} component={() => <StubPageLayout data={stubData["diagnostico-e-planejamento"]} />} />
        <Route path={`/${lang}/solucoes/estruturacao-de-projetos`} component={() => <StubPageLayout data={stubData["estruturacao-de-projetos"]} />} />
        <Route path={`/${lang}/solucoes/gestao`} component={() => <StubPageLayout data={stubData.gestao} />} />
        <Route path={`/${lang}/solucoes/gestao-de-projetos`} component={() => <StubPageLayout data={stubData["gestao-de-projetos"]} />} />
        <Route path={`/${lang}/solucoes/gestao-de-processos`} component={() => <StubPageLayout data={stubData["gestao-de-processos"]} />} />
        <Route path={`/${lang}/solucoes/governanca-e-indicadores`} component={() => <StubPageLayout data={stubData["governanca-e-indicadores"]} />} />
        <Route path={`/${lang}/operacoes`} component={() => <StubPageLayout data={stubData.operacoes} />} />
        <Route path={`/${lang}/operacoes/gestao-de-eventos`} component={() => <StubPageLayout data={stubData["gestao-de-eventos"]} />} />
        <Route path={`/${lang}/operacoes/producao-executiva`} component={() => <StubPageLayout data={stubData["producao-executiva"]} />} />
        <Route path={`/${lang}/operacoes/location-fixer-rio-de-janeiro`} component={() => <StubPageLayout data={stubData["location-fixer-rio-de-janeiro"]} />} />
        <Route path={`/${lang}/operacoes/receptivo-drivers-locacoes`} component={() => <StubPageLayout data={stubData["receptivo-drivers-locacoes"]} />} />
        <Route path={`/${lang}/inovacao`} component={() => <StubPageLayout data={stubData.inovacao} />} />
        <Route path={`/${lang}/impacto`} component={() => <StubPageLayout data={stubData.impacto} />} />
        <Route path={`/${lang}/impacto/marketing-de-causa`} component={() => <StubPageLayout data={stubData["marketing-de-causa"]} />} />
        <Route path={`/${lang}/branding-experiencias`} component={() => <StubPageLayout data={stubData["branding-experiencias"]} />} />
        <Route path={`/${lang}/como-trabalhamos`} component={() => <StubPageLayout data={stubData["como-trabalhamos"]} />} />
        <Route path={`/${lang}/cases`} component={Cases} />

        <Route path={`/${lang}/creator-ops-rio`} component={CreatorOpsRio} />
        <Route path={`/${lang}/creation-marcas`} component={CreationMarcas} />
        <Route path={`/${lang}/ong-zero`} component={OngZero} />
        <Route path={`/${lang}/motor-sroi`} component={MotorSroi} />
        <Route path={`/${lang}/bi-de-eventos`} component={BiEventos} />
        <Route path={`/${lang}/quem-somos`} component={QuemSomos} />
        <Route path={`/${lang}/contato`} component={Contato} />
        {lang === "en" && (
          <Route path={`/${lang}/profile`} component={CreationProfile} />
        )}

        {/* Redirects: rotas dissolvidas na Arquitetura V2 */}
        <Route path={`/${lang}/consultoria`}>
          <Redirect to={`/${lang}/solucoes`} />
        </Route>
        <Route path={`/${lang}/producoes`}>
          <Redirect to={`/${lang}/operacoes`} />
        </Route>
        <Route path={`/${lang}/impacto-social`}>
          <Redirect to={`/${lang}/impacto`} />
        </Route>
        <Route path={`/${lang}/metodo`}>
          <Redirect to={`/${lang}/como-trabalhamos`} />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function RedirectHandler() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const lang = getLangFromPath(location);
    if (!lang) {
      setLocation(getPathWithLang(location, resolveInitialLang()), {
        replace: true,
      });
    }
  }, [location, setLocation]);

  return null;
}

function Router() {
  const [location] = useLocation();
  const lang = getLangFromPath(location);

  if (location === "/") {
    return <Redirect to={`/${resolveInitialLang()}`} />;
  }

  if (!lang) {
    return <RedirectHandler />;
  }

  if (!isValidLang(lang)) {
    return <Redirect to={getPathWithLang(location, defaultLang)} />;
  }

  return <LangRouter lang={lang} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
