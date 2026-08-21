import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { stubPages } from "@/content/stub";
import { useLang } from "@/content";

/**
 * /cases — pagina unica com todos os cases selecionados (sem paginas
 * individuais), conforme decisao registrada no indice mestre da Arquitetura
 * V2. Traduzida nos 3 idiomas (ver client/src/content/stub/{lang}.ts pro
 * array de cases; os textos fixos desta pagina — hero, CTA — sao curtos o
 * bastante pra ficar hardcoded aqui mesmo, mesmo padrao do t() em Header.tsx).
 *
 * DESIGN V7.1 piloto (mesmo tratamento aprovado na Home/StubPageLayout):
 * fundo branco predominante + acento "spark" pontual. Experimental, ainda
 * sem validacao formal do time de design do cliente.
 */
export default function Cases() {
  const lang = useLang();
  const casesStub = stubPages[lang].casesStub;
  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);

  return (
    <Layout>
      <section className="relative bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-measure">
            <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
              {t("CASES", "CASES", "CASES")}
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {t(
                "Projetos em que pensar e fazer fizeram parte da mesma entrega.",
                "Projects where thinking and doing were part of the same delivery.",
                "Proyectos en los que pensar y hacer fueron parte de la misma entrega.",
              )}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {t(
                "Uma seleção de trabalhos em inovação, eventos, produção executiva e desenvolvimento territorial.",
                "A selection of work in innovation, events, executive production and territorial development.",
                "Una selección de trabajos en innovación, eventos, producción ejecutiva y desarrollo territorial.",
              )}
            </p>
          </div>
        </div>
      </section>

      <Section tone="white" divider>
        <SectionHeader title={t("Projetos selecionados", "Selected projects", "Proyectos seleccionados")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-abyss/14 border border-abyss/14">
          {casesStub.map((item) => (
            <article key={item.title} className="bg-white hover:bg-spark/5 transition-colors p-8">
              <p className="text-caption font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
                {item.client}
              </p>
              <h3 className="text-h3 font-semibold text-abyss mb-3">
                {item.title}
              </h3>
              <p className="text-abyss/70 leading-relaxed mb-4">
                {item.context}
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {item.numbers.map((n) => (
                  <li
                    key={n}
                    className="text-small font-semibold text-spark"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="abyss" size="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 sm:text-h1 font-bold text-bone mb-6">
            {t(
              "Se o próximo desafio também exige estratégia, gestão e capacidade operacional no mesmo trabalho, queremos entendê-lo.",
              "If your next challenge also calls for strategy, management and operational capacity in the same effort, we want to hear about it.",
              "Si el próximo desafío también exige estrategia, gestión y capacidad operativa en el mismo trabajo, queremos conocerlo.",
            )}
          </h2>
          <CTAButton label={t("Conte seu projeto", "Tell us about your project", "Cuéntenos su proyecto")} href="/contato" onDark />
        </div>
      </Section>
    </Layout>
  );
}
