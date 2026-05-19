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

