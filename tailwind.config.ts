import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.5rem" /* 8px - corporate BlackRock style */,
        md: "0.375rem" /* 6px */,
        sm: "0.25rem" /* 4px */,
      },
      colors: {
        // ========================================================
        // CREATION — Manual de Identidade V6.0 (agosto/2026)
        // Substitui o Manual v3. Mudancas criticas:
        //   - Signal (#1EB3C6, ciano) SAIU da paleta oficial.
        //   - O NOME do token "signal" foi mantido no codigo (evita
        //     reeditar toda pagina que ja usa text-signal/bg-signal/
        //     border-signal); só o VALOR mudou para o novo acento Mist.
        //     Renomear o token para "mist" fica como limpeza futura,
        //     cosmetica, nao bloqueia nada visualmente.
        //
        // Pares texto/fundo validados em WCAG 2.1 AA (manual, pag. 15):
        //   Abyss/White      14.32:1  Aprovado  texto principal
        //   Abyss/Bone       12.47:1  Aprovado  secoes editoriais
        //   White/Abyss      14.32:1  Aprovado  menu, rodape, secao imersiva
        //   Mist/Abyss       11.88:1  Aprovado  links/labels/acentos em fundo escuro
        //   Abyss/Mist       11.88:1  Aprovado  texto/controles sobre Mist
        //   Abyss/RhodiumFlat 7.62:1  Aprovado  texto sobre metalico plano
        //   RhodiumFlat/Abyss 7.62:1  Aprovado  dado grande, icone, acento
        //   Slate/White       4.34:1  Reprovado no corpo (so texto grande)
        //   Mist/White        1.20:1  Reprovado  nunca usar como texto
        //
        // Regra critica: em fundo claro, link e Abyss peso 600 sublinhado
        // (nao mais cor de acento). Mist so atua como acento em fundo escuro.
        // ========================================================
        abyss: "#0A2E3B",
        signal: "#D8EEF2", // valor = Mist (V6); nome do token preservado
        bone: "#F2EFE9",
        ink: "#061C24",
        slate: "#6E7B85",

        // Tokens novos do V6, disponiveis para uso futuro (nao usados em
        // nenhuma pagina ainda — nenhum componente precisa mudar por isso).
        mist: "#D8EEF2",

        // EXPERIMENTAL — nao aprovado ainda, so para teste visual pontual
        // (pedido do cliente apos ver bcg.com/notion.com: os dois usam uma
        // cor de acento viva, algo que Abyss/Bone/Mist/Rhodium nao tem).
        // Nao e cor inventada: e o "Signal" original (#1EB3C6, ciano) que
        // existia ANTES do V6 substituir por Mist (ver comentario acima).
        // Usar so em pontos isolados e reversiveis ate aprovacao — nao
        // trocar o token "signal" em si (isso afetaria o site inteiro).
        spark: "#1EB3C6",
        rhodium: {
          shadow: "#7F878B",
          flat: "#B8BEC1",
          highlight: "#EEF1F2",
        },

        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)",
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
        petroleo: {
          DEFAULT: "hsl(var(--petroleo) / <alpha-value>)",
          dark: "hsl(var(--petroleo-dark) / <alpha-value>)",
        },
        ouro: {
          DEFAULT: "hsl(var(--ouro) / <alpha-value>)",
        },
      },
      // ========================================================
      // TIPOGRAFIA — Manual V6.0, pagina 16
      //   Regra substituida: Newsreader e Sohne SAIRAM do sistema.
      //   Agora e Inter para tudo: titulos, corpo, interface, dados.
      //   O logotipo em si (a palavra "creation") continua sendo um
      //   desenho proprio em curvas (TeX Gyre Termes Bold) — isso e
      //   so o arquivo do lockup, nao afeta fonte de conteudo.
      //   Pesos oficiais: 400, 500, 600, 700.
      //
      //   NAO migrado hoje (fica para depois): a escala fluida por
      //   clamp() que o V6 especifica (display: clamp(40,6vw,72) etc.)
      //   Os tamanhos fixos abaixo (px) sao os do V3 antigo — ainda
      //   funcionam, so nao sao fluidos. Trocar por clamp() e tarefa
      //   separada, nao urgente (nao quebra nada, so nao e ideal).
      // ========================================================
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        display: ["39px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["31px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["25px", { lineHeight: "1.2" }],
        h3: ["20px", { lineHeight: "1.35" }],
        body: ["16px", { lineHeight: "1.6" }],
        small: ["13px", { lineHeight: "1.5" }],
        caption: ["11px", { lineHeight: "1.4" }],
      },
      maxWidth: {
        measure: "68ch",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Motion — Manual V7.1, pag. 18: "assentar" (fade + 6px), "repousar"
        // (sem overshoot). Linear/ease-out de proposito — nenhuma curva com
        // overshoot (nada de spring/bounce/elastic).
        reveal: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        // Substitui animate-bounce (proibido pelo manual: "sem bounce,
        // brilho, tremor ou teatralidade"). Vaivem suave, sem overshoot.
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        reveal: "reveal 0.5s ease-out both",
        drift: "drift 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
