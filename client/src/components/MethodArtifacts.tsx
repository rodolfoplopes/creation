import { Section, SectionHeader } from "@/components/primitives";
import PhotoFrame from "@/components/PhotoFrame";
import { useLang } from "@/content";
import type { MethodArtifact } from "@/content/types";

/**
 * "Pecas do metodo" (Tarefa 6, comando tecnico 26/09/2026): prova de gestao
 * em /como-trabalhamos — o site provava evento (numeros do Hacking.Rio) e
 * nao provava gestao. Quem compra gestao quer ver o artefato, nao o palco.
 *
 * Cada item so renderiza com `image` presente (anonimizada pelo usuario,
 * ver docs/pecas-do-metodo.md). Sem nenhuma imagem em nenhum item, a secao
 * inteira nao renderiza — mesma regra de "nada de caixa vazia no ar" da
 * Tarefa 7.
 *
 * Titulo e introducao da secao nao vieram especificados no comando tecnico
 * (so nome/pergunta/imagem por artefato); texto abaixo e uma decisao minha,
 * registrada no resumo final para aprovacao do cliente.
 */
export default function MethodArtifacts({ items }: { items: MethodArtifact[] }) {
  const lang = useLang();
  const withImage = items.filter((item) => item.image);
  if (withImage.length === 0) return null;

  const t = (pt: string, en: string, es: string) => (lang === "en" ? en : lang === "es" ? es : pt);

  return (
    <Section tone="white">
      <SectionHeader
        title={t("Peças do método", "Pieces of the method", "Piezas del método")}
        subtitle={t(
          "Artefatos reais de projetos entregues, com nomes e valores alterados. Mostram o tipo de documento que sustenta a gestão, não o resultado de um projeto específico.",
          "Real artifacts from delivered projects, with names and figures changed. They show the kind of document that underpins the management, not the outcome of any specific project.",
          "Artefactos reales de proyectos entregados, con nombres y valores alterados. Muestran el tipo de documento que sostiene la gestión, no el resultado de un proyecto específico.",
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {withImage.map((item) => (
          <article key={item.id} data-testid={`card-method-artifact-${item.id}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <PhotoFrame src={item.image!.src} alt={item.image!.alt} intensity="normal" className="h-56" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-abyss text-signal text-xs font-semibold uppercase tracking-widest">
                {t("Amostra", "Sample", "Muestra")}
              </span>
            </div>
            <h3 className="mt-4 text-h3 font-semibold text-abyss">{item.name}</h3>
            <p className="mt-2 text-abyss/70 leading-relaxed">{item.question}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
