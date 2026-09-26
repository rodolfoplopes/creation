# Medição — GA4

Decisão de arquitetura: GA4 direto via `gtag.js`, sem Google Tag Manager. O site
tem um único destino de conversão e nenhuma equipe de mídia operando tags — GTM
só adicionaria uma camada para manter. Se entrar mídia paga depois, migra-se
para GTM sem perder os eventos, porque os nomes seguem o padrão GA4.

## Onde está o código

- `client/src/lib/analytics.ts` — `initAnalytics()`, `trackPageView()`,
  `trackEvent()`. Tudo vira no-op sem `VITE_GA_MEASUREMENT_ID` ou fora de
  produção (`import.meta.env.PROD`).
- `client/src/main.tsx` — chama `initAnalytics()` uma única vez, antes do
  render.
- `client/src/App.tsx` — componente `PageViewTracker`, dispara `page_view` a
  cada troca de rota do wouter (`useLocation`), incluindo a primeira
  renderização.

## Eventos implementados

| Evento | Quando dispara | Parâmetros | Onde no código |
|---|---|---|---|
| `page_view` | toda troca de rota (`send_page_view:false` desliga o automático do gtag.js) | `page_path`, `page_title`, `page_location` | `App.tsx`, `PageViewTracker` |
| `generate_lead` | resposta 200 do POST de `/api/contact` | `form: "contato"`, `project_type` (se preenchido) | `pages/Contato.tsx` |
| `whatsapp_click` | clique em qualquer link `wa.me` | `source`: `"fab"` \| `"footer"` \| `"contato_aside"` | `WhatsAppFab.tsx`, `Footer.tsx`, `pages/Contato.tsx` |
| `email_click` | clique no e-mail `contato@creation-pro.com` | `source`: `"footer"` \| `"contato_aside"` | `Footer.tsx`, `pages/Contato.tsx` |
| `cta_click` | clique em qualquer `CTAButton` | `label`, `href`, `page` | `components/primitives.tsx`, centralizado |
| `home_slide_cta` | clique no CTA de um slide do carrossel da home | `slide_id`: `"inovacao"` \| `"impacto"` \| `"ops-rio"` | `WhyWeExistSection.tsx` |
| `form_details_open` | primeira abertura do bloco "Adicionar detalhes" no formulário de contato | nenhum | `pages/Contato.tsx` |

`generate_lead` é o nome canônico do GA4 para lead — aparece como evento
recomendado no relatório sem configuração extra.

Não há evento de scroll nem de outbound: o Enhanced Measurement do GA4 já
cobre os dois automaticamente.

## O que configurar no painel do GA4 (fora do código)

1. Criar a propriedade GA4 e o data stream de `creation-pro.com`, pegar o
   `G-XXXXXXX` e colocar na Vercel (Production, Preview e Development) como
   `VITE_GA_MEASUREMENT_ID`.
2. Marcar `generate_lead` e `whatsapp_click` como **eventos principais** (key
   events) em Administrador → Eventos.
3. Verificar o domínio no Search Console pelo método **Domínio** via DNS,
   enviar o sitemap e vincular a propriedade GA4.
4. Esperar duas semanas antes de tirar qualquer conclusão de conversão.

## Como testar

Com `VITE_GA_MEASUREMENT_ID` preenchido em produção (ou local com
`NODE_ENV=production` simulado), abrir o DebugView do GA4 e navegar entre
rotas — cada troca deve gerar um `page_view` com `page_path` correto. Enviar
o formulário de contato deve gerar exatamente um `generate_lead`.

## Aviso de cookies

Não implementado nesta rodada (item opcional da spec, condicionado a "só se
for rápido" — ficou de fora para não atrasar as tarefas prioritárias). A
configuração de GA4 usada aqui não tem recurso de publicidade, remarketing
ou `user_id`, então não há obrigação técnica de bloquear o carregamento até
aceite. Se o cliente decidir exigir isso depois, o módulo já tem o ponto de
extensão comentado (constante `REQUIRE_CONSENT` em `analytics.ts`).
