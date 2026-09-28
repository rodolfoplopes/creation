import type { ReactNode } from "react";

/**
 * Card de exemplo de entregavel (dashboard ilustrativo), portado dos HTMLs
 * do cliente em projetos/metodologias/creation-cards-site/cards/
 * (21-motor-sroi.html, 22-bi-de-eventos.html) — mesmo sistema de cores
 * terciarias (Iris/Lapis/Kelp/Amber/Ember/Rose) ja usado em
 * tailwind.config.ts e CicloCompletoSection.tsx. Objetivo do cliente:
 * mostrar o tipo de entregavel (nao so descreve-lo em texto), aproximando
 * o site do padrao visual de dado/produto do Notion.
 *
 * Valores sempre ilustrativos — cada uso deve manter o disclaimer visivel
 * (ver `disclaimer` prop), tal como no HTML fonte.
 */

export function MethodologyCard({
  title,
  description,
  label,
  disclaimer,
  children,
}: {
  title: string;
  description: string;
  label: string;
  disclaimer: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-abyss/10 bg-white overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-baseline justify-between gap-6 flex-wrap pb-5 mb-6 border-b border-abyss/10">
          <div>
            <h3 className="text-h3 font-semibold text-abyss">{title}</h3>
            <p className="text-small text-abyss/60 mt-1 max-w-md">{description}</p>
          </div>
          <span className="text-caption font-semibold uppercase tracking-widest text-abyss/50 whitespace-nowrap">
            {label}
          </span>
        </div>
        {children}
        <p className="text-caption text-abyss/50 mt-5 pt-4 border-t border-abyss/10">{disclaimer}</p>
      </div>
    </div>
  );
}

export interface MetricItem {
  label: string;
  value: string;
  unit?: string;
  sub: string;
  lead?: boolean;
}

export function MetricsGrid({ items }: { items: MetricItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-abyss/10 mb-6 rounded-xl overflow-hidden">
      {items.map((m) => (
        <div key={m.label} className={m.lead ? "bg-abyss p-5" : "bg-white p-5"}>
          <p className={`text-caption font-semibold uppercase tracking-wide ${m.lead ? "text-bone/60" : "text-abyss/50"}`}>
            {m.label}
          </p>
          <p className={`text-h3 font-bold mt-2 tabular-nums ${m.lead ? "text-bone" : "text-abyss"}`}>
            {m.value}
            {m.unit && <span className={`text-body font-semibold ml-0.5 ${m.lead ? "text-bone/60" : "text-abyss/50"}`}>{m.unit}</span>}
          </p>
          <p className={`text-caption mt-1 ${m.lead ? "text-bone/50" : "text-abyss/50"}`}>{m.sub}</p>
        </div>
      ))}
    </div>
  );
}

export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-small min-w-[560px]">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="text-left text-caption font-semibold uppercase tracking-wide text-abyss/50 pb-3 border-b border-abyss/10 px-1"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-3 px-1 border-b border-abyss/10 text-abyss/70 ${j > 0 ? "tabular-nums" : ""} ${j === row.length - 1 ? "font-semibold text-abyss" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface FunnelRow {
  label: string;
  value: string;
  widthPct: number;
  conversionPct?: string;
}

export function Funnel({ rows }: { rows: FunnelRow[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[100px_1fr_56px] sm:grid-cols-[140px_1fr_56px] items-center gap-3 sm:gap-4">
          <span className="text-small font-medium text-abyss truncate">{row.label}</span>
          <div className="h-7 bg-abyss rounded flex items-center px-3 min-w-0" style={{ width: `${row.widthPct}%` }}>
            <span className="text-caption font-semibold text-bone tabular-nums whitespace-nowrap overflow-hidden text-ellipsis">
              {row.value}
            </span>
          </div>
          <span className="text-small font-semibold text-abyss/50 text-right tabular-nums">{row.conversionPct ?? ""}</span>
        </div>
      ))}
    </div>
  );
}
