# melonmundi-site-publico - Regras Locais para Codex

Este repo gera o site institucional publico da MelonMundi em Quarto. O site e
publico, sem senha, e publicado na Vercel a partir de `docs/`.

## Responsabilidade

- Pagina inicial publica.
- Paginas institucionais.
- Politica de privacidade, termos de uso e licenca.
- SEO, responsividade e identidade visual publica.

## Cuidados obrigatorios

- Nao adicionar autenticacao real, dados privados, segredos ou logica backend.
- O botao "Entrar" deve apontar para `https://acervo.melonmundi.com`.
- Preservar o carater publico: conteudo livre para qualquer visitante.
- Como `docs/` e o diretorio publicado pela Vercel, conferir artefatos gerados
  quando rodar `quarto render`.
- Se o README mencionar GitHub Pages, considerar Vercel como publicacao atual
  salvo pedido contrario.

## Armadilhas conhecidas

- Nao salvar `.qmd` nem `_quarto.yml` com BOM (UTF-8 com marca de ordem de
  bytes). Com BOM o Quarto ignora `body-classes`, a classe `home-page` so chega
  pelo JavaScript no fim do `<body>` e o bloco de titulo (com a descricao de
  SEO) pisca antes de sumir.
- Dentro de `.column-screen` o Quarto prende os filhos a coluna de leitura
  (~800 px). O CSS reabre `.column-screen > .column-body` para a largura da tela
  e limita o container num unico ponto.
- O atalho "Entrar" do celular vem de `navbar.tools`, que o Quarto renderiza em
  `.quarto-navbar-tools`, fora de `.navbar-collapse`. O rotulo e desenhado por
  CSS (`::after`), porque `tools` so gera icone. No desktop ele fica oculto e
  vale o item de `navbar.right`.
- `project.render` e uma lista explicita: arquivos novos na raiz so viram pagina
  publicada se forem adicionados ali.

## Arquivos de maior impacto

- `_quarto.yml`
- `index.qmd`
- `sobre-nos.qmd`
- `politica-de-privacidade.qmd`
- `termos-de-uso.qmd`
- `licenca.qmd`
- `assets/css/styles.css`
- `assets/js/*.js`
- `vercel.json`

## Verificacao recomendada

```bash
quarto render
quarto preview
```

Ao alterar UI, verificar visualmente desktop e mobile quando possivel.

