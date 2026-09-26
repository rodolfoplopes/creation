# Fotos pendentes

Levantamento direto do código (Tarefa 7.1d, comando técnico 26/09/2026) — todo
local que ainda usa `ImagePlaceholder`. Em produção esses locais não renderizam
nada (Tarefa 7.1): esta lista é o briefing de produção de foto, não uma
descrição do que está no ar.

| Página | Posição no layout | `imageHint` atual (PT) |
|---|---|---|
| `/solucoes/operacoes/location-fixer-rio-de-janeiro` | Hero, full-width | Foto de locação no Rio de Janeiro (praia, favela, ponto turístico ou cenário urbano) |
| `/solucoes/operacoes/receptivo-drivers-locacoes` | Hero, full-width | Foto de veículo, motorista ou translado de equipe/produção |
| `/creation-marcas` | Hero, full-width | Foto de uma revisão de documentos/marca ou ambiente de escritório |
| `/creation-marcas` | Miolo — 1ª etapa do processo (grid de 3 colunas) | Foto da conversa inicial de kickoff com o cliente |
| `/quem-somos` | Hero, full-width | Foto da equipe ou do escritório da Creation |
| `/motor-sroi` | Miolo — 1ª etapa da jornada (grid de 3 colunas) | Foto de sessão com stakeholders definindo o escopo do SROI |
| `/ong-zero` | Miolo — seção "O começo" (grid de 2 colunas, texto + imagem) | Foto de uma conversa inicial com lideranças de iniciativa social |
| `/ong-zero` | Miolo — 1ª etapa do processo (grid de 3 colunas) | Foto dos primeiros ciclos de operação da implantação |
| `/ong-zero` | Miolo — seção "Estrutura proporcional" (grid de 2 colunas, texto + imagem) | Foto de equipe organizando processos ou controles internos |
| `/bi-de-eventos` | Miolo — 3ª etapa do processo (grid de 3 colunas) | Foto de coleta de dados durante um evento (check-in, pesquisa, formulário) |
| `/en/profile` (Creation Profile) | Hero, retrato 4:5 | Foto still de produção em estúdio já enviada não serve — formato widescreen, o slot pede retrato corporativo |

## Regra de exibição (Tarefa 7)

- Em desenvolvimento (`npm run dev`), a caixa tracejada continua aparecendo
  normalmente, com o texto da dica — é assim que o time enxerga o que falta.
- Em produção, `ImagePlaceholder` retorna `null` e o container/espaçamento ao
  redor também não renderiza (sem margem órfã). Nas duas seções de ONG.zero
  que usam grid de 2 colunas (texto + imagem), o texto ocupa a largura cheia
  (`max-w-measure`) em vez de ficar espremido do lado de um vazio.

## Proposta de reaproveitamento (não aplicada — aguardando aprovação)

O repositório já tem imagem real em `client/public/images/` que talvez sirva
para alguns desses vazios. Correspondência só é inequívoca em dois casos:

- **Hero de `/quem-somos`**: nenhuma foto de bastidor específica da equipe
  Creation existe hoje nas pastas (`home-slides/`, `heroes/`, `methodologies/`,
  `team/`, `clients/`) — os retratos de `team/` são de Rodolfo e Raí
  individualmente, não servem para um hero de "equipe/escritório". Sem
  correspondência inequívoca — segue pendente de foto nova.
- **Hero de `/creation-marcas`**: mesma situação — nenhuma foto de
  documento/revisão de marca ou escritório existe no repositório.

Nenhum dos 11 vazios acima tem correspondência inequívoca nos assets já
existentes. Todos seguem pendentes de material novo. Banco de imagens
genérico está descartado por decisão do comando técnico.
