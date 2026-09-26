/**
 * GA4 direto via gtag.js, sem Google Tag Manager (decisao de arquitetura,
 * comando tecnico 26/09/2026): o site tem um unico destino de conversao e
 * nenhuma equipe de midia operando tags. Se entrar midia paga depois, migra
 * pra GTM sem perder os eventos, porque os nomes seguem o padrao GA4.
 *
 * Sem VITE_GA_MEASUREMENT_ID (ou fora de producao), tudo aqui vira no-op —
 * mantem dev/preview limpos e nunca quebra por falta da variavel.
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

function isEnabled(): boolean {
  return Boolean(MEASUREMENT_ID) && import.meta.env.PROD;
}

let initialized = false;

export function initAnalytics(): void {
  if (!isEnabled() || initialized) return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  // send_page_view:false e obrigatorio numa SPA — o pageview automatico do
  // gtag.js dispara uma unica vez, no load, e perde toda navegacao interna
  // feita pelo wouter sem reload de pagina.
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(path: string, title?: string): void {
  if (!isEnabled()) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (!isEnabled()) return;
  window.gtag("event", name, params);
}

// Flag de bloqueio ate aceite de cookies — a config usada aqui (sem
// publicidade, remarketing ou user_id) nao exige bloqueio por padrao
// (ver docs/medicao.md, secao aviso de cookies). Se o cliente decidir
// bloquear GA4 ate o aceite, basta inverter esta constante para checar
// localStorage("cookie-consent") === "accepted" dentro de isEnabled().
const REQUIRE_CONSENT = false;
void REQUIRE_CONSENT;
