import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { useLocalizedHref } from "@/content";
import type { StubBlock, StubPageData } from "@/content/stub";

function BlockRenderer({ block }: { block: StubBlock }) {
  return (
    <Section tone="white">
      <SectionHeader title={block.heading} subtitle={block.intro} />
      {block.type === "bullets" && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-abyss/70 leading-relaxed">
              <Check className="h-4 w-4 mt-1 shrink-0 text-spark" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {block.type === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {block.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-abyss/10 bg-bone/50 hover:bg-spark/5 hover:border-spark/30 transition-colors p-8"
            >
              <h3 className="text-h3 font-semibold text-abyss mb-2">{item.title}</h3>
              <p className="text-abyss/70 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      )}
      {block.type === "steps" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {block.items.map((step) => (
            <div key={step.number} className="border-l-2 border-spark pl-6 py-1">
              <p className="text-caption font-semibold text-spark mb-2 tracking-widest">
                {step.number}
              </p>
              <h3 className="text-h3 font-semibold text-abyss mb-2">{step.title}</h3>
              <p className="text-abyss/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

/**
 * Renderizador generico das paginas da Arquitetura V2 (ver
 * client/src/content/stub/pt.ts, en.ts, es.ts — ja traduzidas nos 3
 * idiomas). Reusa os primitivos visuais existentes (Section, SectionHeader,
 * CTAButton) — nao e um redesign, e a validacao da nova arquitetura de menu
 * com o visual atual.
 *
 * DESIGN V7.1 piloto (mesmo tratamento aprovado na Home — ver
 * CapacidadesSection/EspecialidadesSection/HeroSection): fundo branco
 * predominante (era tone "bone" no grid de filhos) com o acento "spark"
 * pontual (dot no eyebrow, hover dos cards e do link de voltar).
 * Experimental, ainda sem validacao formal do time de design do cliente.
 *
 * ENTRADA DE IMAGEM (pedido do cliente): `data.image`, quando presente
 * (hoje so Inovacao/Impacto/Branding & Experiencias), renderiza logo
 * abaixo do texto do hero, no mesmo tratamento rounded-2xl + sombra leve
 * usado no carrossel da Home (WhyWeExistSection).
 *
 * DIAGRAMACAO DAS PAGINAS INTERNAS (pedido do cliente — emular o padrao
 * de paginas internas do notion.com, ex. notion.com/enterprise): as
 * hairlines divisorias entre blocos (border-t cinza a cada secao) saem —
 * o ritmo passa a vir so do respiro (padding), como nas paginas internas
 * do Notion, que nunca usam linha divisoria entre blocos de conteudo.
 * Os grids de "cards" (Frentes de atuacao) e "children" (O que podemos
 * assumir) trocam o mosaico de hairline (gap-px + bg cinza formando
 * grade) por cards soltos, arredondados (rounded-2xl) e com respiro real
 * entre eles (gap-6) — o padrao de card que o Notion usa em toda pagina
 * interna.
 */
export default function StubPageLayout({ data }: { data: StubPageData }) {
  const localize = useLocalizedHref();

  return (
    <Layout>
      <section className="relative bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
          {data.parentHref && data.parentLabel && (
            <Link href={localize(data.parentHref)}>
              <span className="inline-flex items-center gap-2 text-small font-semibold text-abyss/60 hover:text-spark mb-6 cursor-pointer transition-colors">
                <ArrowLeft className="h-4 w-4" />
                {data.parentLabel}
              </span>
            </Link>
          )}
          <div className="max-w-measure">
            <p className="inline-flex items-center gap-2 text-caption font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
              {data.eyebrow}
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">{data.intro}</p>
            {data.lead && (
              <p className="mt-4 text-lg text-abyss/70 leading-relaxed">
                {data.lead}
              </p>
            )}
          </div>
        </div>
      </section>

      {data.image ? (
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24 pb-14 md:pb-20">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="w-full h-[280px] md:h-[420px] object-cover"
            />
          </div>
        </div>
      ) : data.imageHint ? (
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24 pb-14 md:pb-20">
          <ImagePlaceholder hint={data.imageHint} />
        </div>
      ) : null}

      {data.blocks?.map((block) => (
        <BlockRenderer key={block.heading} block={block} />
      ))}

      {data.children && data.children.length > 0 && (
        <Section tone="white">
          <SectionHeader title={data.childrenLabel ?? "O que podemos assumir"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.children.map((child) => (
              <Link key={child.href} href={localize(child.href)}>
                <article className="rounded-2xl border border-abyss/10 bg-bone/50 hover:bg-spark/5 hover:border-spark/30 p-8 h-full transition-colors cursor-pointer group">
                  <h3 className="text-h3 font-semibold text-abyss group-hover:text-spark transition-colors mb-2">
                    {child.title}
                  </h3>
                  <p className="text-abyss/70 leading-relaxed">
                    {child.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section tone="abyss" size="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-h2 sm:text-h1 font-bold text-bone mb-6">
            {data.title}
          </h2>
          {data.ctaBody && (
            <p className="text-bone/70 leading-relaxed mb-8">{data.ctaBody}</p>
          )}
          <CTAButton label={data.ctaLabel} href={data.ctaHref} onDark />
        </div>
      </Section>
    </Layout>
  );
}
