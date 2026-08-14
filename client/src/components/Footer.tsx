import { Link } from "wouter";
import { useContent, useLocalizedHref } from "@/content";
/**
 * ============================================================================
 * A TERCEIRA TAXONOMIA MORAVA AQUI
 * O footer antigo hardcodava 8 links e listava:
 *     Creation OPS - OPS Impact - OPS Expansion - OPS Creative
 * Enquanto a nav dizia:  Solucoes - Producoes - Impacto
 * E a home dizia:        Creation OPS - Creation Producoes - Creation Impacto
 * E os quatro links do footer apontavam TODOS para /servicos.
 * Agora: uma taxonomia, vinda do content, com hrefs de verdade.
 *
 * FIX (logo quebrada): src apontava para /brand/lockup_bone_transp.svg, que
 * nao existe mais desde a troca de logo. Trocado para o arquivo novo
 * (assinatura completa, variante branca — fundo abyss escuro, mesma regra
 * do Header.tsx: "Branco reverso: Abyss, Ink... e dark mode", manual V6).
 * Tamanho reduzido tambem, mesma logica do ajuste no Header.
 * ============================================================================
 */
export default function Footer() {
  const c = useContent();
  const localize = useLocalizedHref();
  return (
    <footer className="bg-abyss text-bone" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <Link href={localize("/")}>
                <img
                  src="/brand/creation_assinatura_completa_branca.svg"
                  alt={c.brand.name}
                  className="h-10 md:h-12 w-auto cursor-pointer"
                  data-testid="img-footer-logo"
                />
              </Link>
              <p className="mt-6 text-bone/60 max-w-md leading-relaxed">
                {c.footer.description}
              </p>
              <p className="mt-3 text-bone/60 text-sm">{c.footer.locations}</p>
              <p className="mt-6 text-signal font-semibold tracking-widest text-sm uppercase">
                {c.brand.microcopy}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-bone mb-6 uppercase tracking-widest">
                {c.footer.companyTitle}
              </h3>
              <ul className="space-y-4">
                {c.footer.companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={localize(link.href)}>
                      <span className="text-bone/60 hover:text-signal transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-bone mb-6 uppercase tracking-widest">
                {c.footer.solutionsTitle}
              </h3>
              <ul className="space-y-4">
                {c.footer.solutionsLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={localize(link.href)}>
                      <span className="text-bone/60 hover:text-signal transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-bone/14">
            <p className="text-sm text-bone/60">
              &copy; {new Date().getFullYear()} {c.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
