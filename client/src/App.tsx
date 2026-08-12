import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/Home";
import QuemSomos from "@/pages/QuemSomos";
import Consultoria from "@/pages/Consultoria";
import Producoes from "@/pages/Producoes";
import CreatorOpsRio from "@/pages/producoes/CreatorOpsRio";
import CreationMarcas from "@/pages/CreationMarcas";
import OngZero from "@/pages/OngZero";
import MotorSroi from "@/pages/MotorSroi";
import BiEventos from "@/pages/BiEventos";
import ImpactoSocial from "@/pages/ImpactoSocial";
import Metodo from "@/pages/Metodo";
import Contato from "@/pages/Contato";
import CreationProfile from "@/pages/CreationProfile";
import NotFound from "@/pages/not-found";
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
 * Mudancas de IA (3 areas):
 *   /consultoria    -> Consultoria.tsx (renomeado de Servicos.tsx; ponte encerrada)
 *   /impacto-social -> ImpactoSocial.tsx (renomeado de Impacto.tsx; ponte encerrada)
 *   /servicos/ops   -> removido (Creation OPS dissolvido; CreationOps.tsx orfao)
 *   /profile        -> so em EN
 *   /metodo         -> R5 ATIVADO: pagina propria (Metodo.tsx), nao mais redirect
 *   /creator-ops-rio -> URL curta (era /producoes/creator-ops-rio)
 *   /creation-marcas, /ong-zero, /motor-sroi, /bi-de-eventos -> 4 landings novas
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
        <Route path={`/${lang}/consultoria`} component={Consultoria} />
        <Route path={`/${lang}/producoes`} component={Producoes} />
        <Route path={`/${lang}/creator-ops-rio`} component={CreatorOpsRio} />
        <Route path={`/${lang}/creation-marcas`} component={CreationMarcas} />
        <Route path={`/${lang}/ong-zero`} component={OngZero} />
        <Route path={`/${lang}/motor-sroi`} component={MotorSroi} />
        <Route path={`/${lang}/bi-de-eventos`} component={BiEventos} />
        <Route path={`/${lang}/impacto-social`} component={ImpactoSocial} />
        <Route path={`/${lang}/quem-somos`} component={QuemSomos} />
        <Route path={`/${lang}/contato`} component={Contato} />
        <Route path={`/${lang}/metodo`} component={Metodo} />
        {lang === "en" && (
          <Route path={`/${lang}/profile`} component={CreationProfile} />
        )}
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
