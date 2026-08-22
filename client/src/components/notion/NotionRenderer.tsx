/**
 * Renderiza os blocos crus da API do Notion (ver server/notion.ts) como
 * React, usando a tipografia/cores do proprio design system da Creation
 * — nunca um embed/iframe do Notion. Cobre os tipos de bloco que um
 * artigo de texto usa normalmente: paragrafo, titulos, listas, citacao,
 * imagem, divisor e codigo. Blocos nao cobertos sao ignorados
 * silenciosamente (nao quebram a pagina).
 */

import type { ReactNode } from "react";
import PhotoFrame from "@/components/PhotoFrame";

interface RichText {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
  };
}

function RichTextSpan({ richText }: { richText: RichText[] }) {
  return (
    <>
      {richText.map((rt, i) => {
        let node: ReactNode = rt.plain_text;
        if (rt.annotations.code) {
          node = (
            <code key={i} className="bg-bone px-1.5 py-0.5 rounded text-[0.9em] text-abyss">
              {node}
            </code>
          );
        }
        if (rt.annotations.bold) node = <strong key={i}>{node}</strong>;
        if (rt.annotations.italic) node = <em key={i}>{node}</em>;
        if (rt.annotations.strikethrough) node = <s key={i}>{node}</s>;
        if (rt.annotations.underline) node = <u key={i}>{node}</u>;
        if (rt.href) {
          node = (
            <a
              key={i}
              href={rt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-spark underline underline-offset-2 hover:text-abyss transition-colors"
            >
              {node}
            </a>
          );
        }
        return <span key={i}>{node}</span>;
      })}
    </>
  );
}

function Block({ block }: { block: any }) {
  const type = block.type;
  const value = block[type];

  switch (type) {
    case "paragraph":
      if (!value.rich_text?.length) return <div className="h-2" />;
      return (
        <p className="text-abyss/80 leading-relaxed mb-5">
          <RichTextSpan richText={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h2 className="font-display text-h2 font-bold text-abyss mt-10 mb-4">
          <RichTextSpan richText={value.rich_text} />
        </h2>
      );
    case "heading_2":
      return (
        <h3 className="font-display text-h3 font-bold text-abyss mt-8 mb-3">
          <RichTextSpan richText={value.rich_text} />
        </h3>
      );
    case "heading_3":
      return (
        <h4 className="text-lg font-semibold text-abyss mt-6 mb-2">
          <RichTextSpan richText={value.rich_text} />
        </h4>
      );
    case "bulleted_list_item":
      return (
        <li className="text-abyss/80 leading-relaxed mb-2 ml-5 list-disc marker:text-spark">
          <RichTextSpan richText={value.rich_text} />
          {block.children?.map((child: any) => <Block key={child.id} block={child} />)}
        </li>
      );
    case "numbered_list_item":
      return (
        <li className="text-abyss/80 leading-relaxed mb-2 ml-5 list-decimal marker:text-spark marker:font-semibold">
          <RichTextSpan richText={value.rich_text} />
          {block.children?.map((child: any) => <Block key={child.id} block={child} />)}
        </li>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-spark pl-6 py-1 my-6 text-lg text-abyss/70 italic leading-relaxed">
          <RichTextSpan richText={value.rich_text} />
        </blockquote>
      );
    case "divider":
      return <hr className="border-abyss/10 my-10" />;
    case "code":
      return (
        <pre className="bg-abyss text-bone rounded-xl p-6 overflow-x-auto my-6 text-small">
          <code>
            <RichTextSpan richText={value.rich_text} />
          </code>
        </pre>
      );
    case "image": {
      const src = value.file?.url ?? value.external?.url;
      const caption = value.caption?.[0]?.plain_text;
      if (!src) return null;
      return (
        <figure className="my-8">
          <PhotoFrame
            src={src}
            alt={caption ?? ""}
            className="w-full rounded-2xl"
            imgClassName="w-full h-auto"
          />
          {caption && (
            <figcaption className="text-small text-abyss/50 text-center mt-2">{caption}</figcaption>
          )}
        </figure>
      );
    }
    case "callout":
      return (
        <div className="rounded-2xl border border-abyss/10 bg-bone/50 p-6 my-6 flex gap-4">
          {value.icon?.emoji && <span className="text-xl shrink-0">{value.icon.emoji}</span>}
          <p className="text-abyss/80 leading-relaxed">
            <RichTextSpan richText={value.rich_text} />
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default function NotionRenderer({ blocks }: { blocks: any[] }) {
  // Agrupa itens de lista consecutivos numa unica <ul>/<ol>, como o
  // Notion faz visualmente, em vez de uma tag <li> solta por bloco.
  const groups: { type: string; items: any[] }[] = [];
  for (const block of blocks) {
    const isList = block.type === "bulleted_list_item" || block.type === "numbered_list_item";
    const last = groups[groups.length - 1];
    if (isList && last && last.type === block.type) {
      last.items.push(block);
    } else if (isList) {
      groups.push({ type: block.type, items: [block] });
    } else {
      groups.push({ type: "single", items: [block] });
    }
  }

  return (
    <div>
      {groups.map((group, i) => {
        if (group.type === "single") {
          return <Block key={group.items[0].id} block={group.items[0]} />;
        }
        const Tag = group.type === "numbered_list_item" ? "ol" : "ul";
        return (
          <Tag key={i} className="mb-5">
            {group.items.map((item) => (
              <Block key={item.id} block={item} />
            ))}
          </Tag>
        );
      })}
    </div>
  );
}
