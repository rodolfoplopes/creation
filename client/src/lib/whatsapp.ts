import type { SupportedLang } from "@/lib/lang";

/**
 * Numero do WhatsApp fica em um so lugar (c.contact.aside.whatsappNumber,
 * ja existente no content) — nao duplicado em cada componente que monta
 * um link wa.me (Tarefa 10.2, comando tecnico 26/09/2026).
 */
export function whatsappDigits(whatsappNumber: string): string {
  return whatsappNumber.replace(/\D/g, "");
}

// Mapa de rota -> mensagem pre-preenchida por contexto. Chave e o path
// SEM prefixo de idioma (ex.: "/creation-ops-rio"), igual getPathWithoutLang.
const contextMessages: Record<string, Record<SupportedLang, string>> = {
  "/creation-ops-rio": {
    pt: "Olá! Vim pela página Creation Ops Rio e quero falar sobre uma produção no Rio.",
    en: "Hello! I came from the Creation Ops Rio page and I'd like to talk about a production in Rio.",
    es: "¡Hola! Vine por la página Creation Ops Rio y quiero hablar sobre una producción en Río.",
  },
  "/motor-sroi": {
    pt: "Olá! Vim pela página do Motor SROI e quero falar sobre medição de impacto.",
    en: "Hello! I came from the SROI Engine page and I'd like to talk about measuring impact.",
    es: "¡Hola! Vine por la página del Motor SROI y quiero hablar sobre medición de impacto.",
  },
  "/bi-de-eventos": {
    pt: "Olá! Vim pela página de BI de Eventos e quero falar sobre indicadores do meu evento.",
    en: "Hello! I came from the Event BI page and I'd like to talk about my event's indicators.",
    es: "¡Hola! Vine por la página de BI de Eventos y quiero hablar sobre los indicadores de mi evento.",
  },
  "/ong-zero": {
    pt: "Olá! Vim pela página ONG.zero e quero falar sobre estruturar uma organização.",
    en: "Hello! I came from the ONG.zero page and I'd like to talk about structuring an organization.",
    es: "¡Hola! Vine por la página ONG.zero y quiero hablar sobre estructurar una organización.",
  },
  "/creation-marcas": {
    pt: "Olá! Vim pela página Creation Marcas e quero falar sobre a minha marca.",
    en: "Hello! I came from the Creation Marcas page and I'd like to talk about my brand.",
    es: "¡Hola! Vine por la página Creation Marcas y quiero hablar sobre mi marca.",
  },
  "/cases": {
    pt: "Olá! Vi os cases no site da Creation e quero falar sobre um projeto parecido.",
    en: "Hello! I saw the cases on the Creation site and I'd like to talk about a similar project.",
    es: "¡Hola! Vi los casos en el sitio de Creation y quiero hablar sobre un proyecto parecido.",
  },
};

const defaultMessages: Record<SupportedLang, string> = {
  pt: "Olá! Vim pelo site da Creation e quero falar sobre um projeto.",
  en: "Hello! I came from the Creation site and I'd like to talk about a project.",
  es: "¡Hola! Vine por el sitio de Creation y quiero hablar sobre un proyecto.",
};

export function buildWhatsAppUrl(whatsappNumber: string, cleanPath: string, lang: SupportedLang): string {
  const message = contextMessages[cleanPath]?.[lang] ?? defaultMessages[lang];
  const digits = whatsappDigits(whatsappNumber);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
