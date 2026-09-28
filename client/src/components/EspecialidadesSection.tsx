import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import { useLocalizedHref, useLang } from "@/content";
import { stubPages } from "@/content/stub";

/**
 * Home V2, Bloco 04 (ESPECIALIDADES) — Inovacao/Impacto/Branding &
 * Experiencias. Nao existia antes na Home. Traduzida nos 3 idiomas (ver
 * client/src/content/stub/{lang}.ts).
 *
 * TESTE EXPERIMENTAL (nao aprovado): borda esquerda vira "spark" no hover
 * (era abyss estatico) — mesmo racional do teste em CapacidadesSection.
 *
 * ENTRADA DE IMAGEM (pedido do cliente — emular notion.com, secao de
 * "confiado por equipes que..."): cada uma das 3 especialidades ganhou
 * uma foto real (esp.image) acima do texto, rounded-2xl + sombra leve,
 * mesmo tratamento usado no carrossel da Home (WhyWeExistSection).
 *
 * TITULO/SUBTITULO (Tarefa 3.1b, comando tecnico 26/09/2026): saiu do
 * hardcode em t() aqui dentro e foi pra stub/{pt,en,es}.ts
 * (homeEspecialidadesSection), seguindo o padrao do resto do site de
 * manter texto em arquivo de conteudo. Titulo trocado de categoria
 * abstrata ("Onde combinamos capacidade com repertório") pra frase com
 * sujeito e verbo que diz o que o leitor ganha.
 */
export default function EspecialidadesSection() {
  const localize = useLocalizedHref();
  const lang = useLang();
  const homeEspecialidades = stubPages[lang].homeEspecialidades;
  const section = stubPages[lang].homeEspecialidadesSection;

  return (
    <Section id="especialidades" tone="white" divider>
      <SectionHeader title={section.title} subtitle={section.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {homeEspecialidades.map((esp, i) => (
          <Reveal key={esp.href} delay={i * 80}>
            <Link href={localize(esp.href)}>
              <article className="h-full cursor-pointer group transition-transform active:scale-[0.98]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mb-6">
                  <PhotoFrame
                    src={esp.image.src}
                    alt={esp.image.alt}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="border-l-2 border-abyss group-hover:border-spark transition-colors pl-6 py-1">
                  <h3 className="text-h3 font-semibold text-abyss mb-2">
                    {esp.title}
                  </h3>
                  <p className="text-abyss font-semibold mb-2">{esp.tagline}</p>
                  <p className="text-abyss/70 leading-relaxed mb-4">
                    {esp.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-abyss font-semibold group-hover:text-spark group-hover:gap-3 transition-all">
                    {esp.linkLabel}
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
