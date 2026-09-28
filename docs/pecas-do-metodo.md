# Peças do método — como produzir as imagens

Seção "Peças do método" em `/como-trabalhamos` (Tarefa 6, comando técnico
26/09/2026). Objetivo: provar gestão, não evento. Quem compra gestão quer
ver o artefato, não o palco.

Quatro artefatos, definidos em `client/src/content/types.ts`
(`MethodArtifact`) e preenchidos em `pt.ts`/`en.ts`/`es.ts`
(`methodArtifacts`), hoje **sem** `image`:

| id | Nome | Pergunta que responde |
|---|---|---|
| `raci` | Matriz de responsabilidades | Quem decide o quê, e quem só precisa ficar sabendo |
| `marcos` | Cronograma de marcos | O que precisa estar pronto antes do quê |
| `riscos` | Matriz de riscos | O que pode dar errado e qual é o plano se der |
| `contas` | Relatório de execução | O que foi feito, com qual recurso, com qual evidência |

O componente `client/src/components/MethodArtifacts.tsx` só renderiza um
card quando o item correspondente tem `image`. Sem nenhuma imagem em
nenhum item, a seção inteira não aparece. Basta adicionar
`image: { src, alt }` ao item em `pt.ts`/`en.ts`/`es.ts` para o card
aparecer — nenhuma mudança de código é necessária.

## Como anonimizar cada peça

1. **Pegar uma peça real** de um projeto já entregue (a matriz, o
   cronograma, o relatório de fato usado no projeto).
2. **Trocar identificação**: nome e logo do cliente viram "Cliente A",
   "Instituto B" (ou equivalente). Nome de pessoa vira cargo
   ("Coordenação", "Patrocinador").
3. **Valores**: arredondar para a casa acima, ou substituir por valores
   fictícios plausíveis, e marcar na legenda da imagem (ou em uma nota
   junto ao arquivo) que os números foram alterados. **Não usar tarja**:
   tarja comunica que havia algo a esconder; a substituição por um valor
   fictício, sim, é honesta sobre ser uma amostra.
4. **Exportar** a primeira página em PNG, 1600px de largura, fundo
   branco.
5. **Peça identificável mesmo anonimizada**: se o layout, o projeto ou o
   contexto ainda permitem identificar o cliente mesmo depois dos passos
   acima, pedir autorização por escrito ao cliente antes de publicar.

## Onde entra o arquivo

Depois de produzida a imagem (seguindo os passos acima) e hospedada no
mesmo padrão dos outros assets do projeto (`client/src/assets` ou
`/public`, conforme o padrão já usado nas outras imagens do site),
adicionar ao item correspondente em `methodArtifacts`:

```ts
{
  id: "raci",
  name: "Matriz de responsabilidades",
  question: "Quem decide o quê, e quem só precisa ficar sabendo",
  image: { src: "/caminho/da/imagem.png", alt: "Descrição da imagem" },
},
```

Repetir a mesma chave `image` nos três idiomas (`pt.ts`, `en.ts`,
`es.ts`) — o `alt` pode (e deve) ser traduzido; a imagem em si é a
mesma nos três.
