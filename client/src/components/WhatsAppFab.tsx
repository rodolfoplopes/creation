import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { MessageCircle } from "lucide-react";
import { useContent, useLang } from "@/content";
import { getPathWithoutLang } from "@/lib/lang";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

/**
 * Botao flutuante de WhatsApp, montado uma vez em Layout.tsx pra aparecer
 * em todo o site (Tarefa 10, comando tecnico 26/09/2026).
 *
 * Elegancia = contencao: nao pulsa, sem badge, sem bolha automatica, sem
 * verde saturado, sem som, nao cobre conteudo. O unico movimento e a
 * expansao em pilula no hover (desktop).
 *
 * Aparece so depois de 400px de scroll, e some quando o formulario de
 * contato ou o CTA final da pagina atual estao visiveis (nao faz sentido
 * oferecer o atalho quando o destino ja esta na tela) — via
 * IntersectionObserver, procurando [data-testid="button-submit"] e
 * [data-fab-hide-target] (marcado no CTASection e no fechamento de cada
 * StubPageLayout/pagina bespoke).
 */
export default function WhatsAppFab() {
  const c = useContent();
  const lang = useLang();
  const [location] = useLocation();
  const cleanPath = getPathWithoutLang(location) || "/";

  const [scrolledPast, setScrolledPast] = useState(false);
  const [nearTarget, setNearTarget] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reavalia os alvos a esconder a cada troca de rota — o formulario de
  // contato e o CTA final tem data-attributes proprios pra isso. Mapa
  // persistente (nao so os `entries` do ultimo callback) porque o
  // IntersectionObserver so reporta o que MUDOU desde a ultima leitura,
  // nao o estado de todos os alvos observados.
  useEffect(() => {
    setNearTarget(false);
    observerRef.current?.disconnect();

    const targets = document.querySelectorAll('[data-fab-hide-target], [data-testid="button-submit"]');
    if (targets.length === 0) return;

    const visibility = new Map<Element, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting));
        setNearTarget(Array.from(visibility.values()).some(Boolean));
      },
      { threshold: 0.1 },
    );
    targets.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [location]);

  const visible = scrolledPast && !nearTarget;

  const ariaLabel = lang === "en" ? "Chat on WhatsApp" : lang === "es" ? "Hablar por WhatsApp" : "Falar no WhatsApp";
  const href = buildWhatsAppUrl(c.contact.aside.whatsappNumber, cleanPath, lang);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { source: "fab" })}
      aria-label={ariaLabel}
      data-testid="link-whatsapp-fab"
      className={`group fixed z-40 flex items-center gap-2 rounded-full bg-abyss text-bone shadow-lg shadow-abyss/20 hover:bg-ink transition-all duration-200 motion-reduce:transition-none overflow-hidden ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      style={{
        bottom: "max(1.5rem, env(safe-area-inset-bottom))",
        right: "1.5rem",
      }}
    >
      <span className="flex items-center justify-center h-12 w-12 md:h-[52px] md:w-[52px] shrink-0">
        <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <span className="hidden md:block max-w-0 group-hover:max-w-[180px] transition-[max-width] duration-200 whitespace-nowrap overflow-hidden text-small font-semibold pr-0 group-hover:pr-5">
        {ariaLabel}
      </span>
    </a>
  );
}
