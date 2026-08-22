import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useContent, useLocalizedHref } from "@/content";

/**
 * Removidas as props titleI18n / subtitleI18n / badgeI18n / ctaI18n /
 * secondaryCtaI18n - eram chaves para o i18n.js, que nao existe mais.
 *
 * BUG CORRIGIDO: o <Link href={ctaHref}> nao prefixava o idioma. Clicando
 * em "Agende uma conversa" no /en, ia para /contato (sem o /en).
 */
interface HeroInternalProps {
  title: string;
  subtitle?: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
  showSecondaryCta?: boolean;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroInternal({
  title,
  subtitle,
  badge,
  imageSrc,
  imageAlt,
  videoSrc,
  showCta = false,
  ctaText,
  ctaHref,
  showSecondaryCta = false,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroInternalProps) {
  const c = useContent();
  const localize = useLocalizedHref();

  const primaryLabel = ctaText ?? c.cta.primary;
  const primaryHref = ctaHref ?? c.cta.href;
  const secondaryLabel = secondaryCtaText ?? c.cta.secondary;
  const secondaryHref = secondaryCtaHref ?? c.cta.methodHref;

  return (
    <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-signal" />

      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            {badge && (
              <span className="inline-block text-sm font-semibold text-abyss/70 uppercase tracking-widest mb-4">
                {badge}
              </span>
            )}

            <h1 className="text-4xl sm:text-5xl font-bold text-abyss mb-6 tracking-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xl text-abyss/70 leading-relaxed mb-10">
                {subtitle}
              </p>
            )}

            {showCta && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={localize(primaryHref)}>
                  <span className="inline-flex items-center gap-2 bg-abyss text-bone px-8 py-4 font-semibold hover:bg-ink transition-colors cursor-pointer">
                    {primaryLabel}
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>

                {showSecondaryCta && (
                  <Link href={localize(secondaryHref)}>
                    <span className="inline-flex items-center gap-2 border border-abyss/20 text-abyss px-8 py-4 font-semibold hover:border-abyss transition-colors cursor-pointer">
                      {secondaryLabel}
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Link>
                )}
              </div>
            )}
          </div>

          {(imageSrc || videoSrc) && (
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] border border-abyss/14">
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    className="w-full h-full object-cover min-h-[320px] md:min-h-[420px]"
                    controls
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={imageSrc}
                    alt={imageAlt || ""}
                    className="w-full h-full object-cover min-h-[320px] md:min-h-[420px]"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
