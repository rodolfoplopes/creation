import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { casesStub } from "@/content/stubData";

/**
 * /cases — pagina unica com todos os cases selecionados (sem paginas
 * individuais), conforme decisao registrada no indice mestre da Arquitetura
 * V2. Stub PT-only.
 *
 * DESIGN V7.1 piloto (mesmo tratamento aprovado na Home/StubPageLayout):
 * fundo branco predominante + acento "spark" pontual. Experimental, ainda
 * sem validacao formal do time de design do cliente.
 */
export default function Cases() {
  return (
    <Layout>
      <section className="relative bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-measure">
            <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
              CASES
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              Projetos em que pensar e fazer fizeram parte da mesma entrega.
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              Uma seleção de trabalhos em inovação, eventos, produção
              executiva e desenvolvimento territorial.
            </p>
          </div>
        </div>
      </section>

      <Section tone="white" divider>
        <SectionHeader title="Projetos selecionados" />
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
            Se o próximo desafio também exige estratégia, gestão e capacidade
            operacional no mesmo trabalho, queremos entendê-lo.
          </h2>
          <CTAButton label="Conte seu projeto" href="/contato" onDark />
        </div>
      </Section>
    </Layout>
  );
}
