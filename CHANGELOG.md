# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

## [1.0.18] - 2026-02-20
### Changed
- Migracao de dominio principal para https://melonmundi.com em _quarto.yml.
- Atualizados links de acesso ao acervo para https://acervo.melonmundi.com na home.
- Atualizado endpoint Matomo para //acervo.melonmundi.com/matomo/.
- Regerados artefatos em docs/ com as URLs novas.

---
## [1.0.17] - 2026-02-20
### Fixed
- Definido o tÃ­tulo institucional da aba do navegador via `website.title` no `_quarto.yml`.
- Ocultado o texto da marca na navbar (`.navbar-title`), mantendo somente a logo.
- Preservado o comportamento da home com navbar transparente no topo e translÃºcida ao rolar.
- Regerados os arquivos em `docs/` para publicaÃ§Ã£o.

---
## [1.0.16] - 2026-02-20
### Fixed
- Restaurado o comportamento original da home: navbar transparente no topo e translÃºcida ao rolar, com cores corretas para links e Ã­cone hambÃºrguer.
- Removido o tÃ­tulo extra exibido ao lado da logo na navbar.
- Mantido o fluxo de scripts/CSS da home no padrÃ£o anterior, sem mudanÃ§as de layout indesejadas.

---
## [1.0.15] - 2026-02-20
### Changed
- Definido o titulo do site no _quarto.yml para corrigir o nome exibido na aba do navegador na home.
- Ajustado index.qmd para manter front matter simples (apenas metadados essenciais da pÃ¡gina).
- Atualizados links da home para acesso direto ao acervo externo (https://acervo.melonmundi.com).
- Removida a pÃ¡gina local acervo.qmd e seu artefato docs/acervo.html.

### Fixed
- Ocultado o bloco visual padrÃ£o de tÃ­tulo/descriÃ§Ã£o do Quarto via CSS (#title-block-header) para nÃ£o sobrepor o hero.
- Limpeza de arquivos locais de conflito/sincronizaÃ§Ã£o (*MarlenildoNoteDell*, live_index*, etc.).

---
## [1.0.14] - 2026-02-20
### Fixed
- Corrigida a remocao do titulo visual da home publica com title-block-style none em index.qmd.
- Aplicada a mesma estrategia na pagina inicial do acervo (acervo.qmd) para ocultar o bloco visual de titulo.
- Mantidos title e description no front matter para preservar SEO e metadados sociais (aba do navegador, Open Graph e Twitter Card).

---

## [1.0.13] - 2026-02-19
### Changed
- Home configurada com `title-block: false` em `index.qmd`, removendo o tÃ­tulo visual `PÃ¡gina Inicial` do conteÃºdo e mantendo o nome na aba do navegador.

---

## [1.0.12] - 2026-02-19
### Changed
- Ajustado texto do rodapÃ© para identidade institucional: `Copyright Â© 2026 MelonMundi - Global Solutions Â· Licenciado sob MIT`.

---

## [1.0.11] - 2026-02-19
### Fixed
- Adicionado `vercel.json` para forÃ§ar publicaÃ§Ã£o do conteÃºdo estÃ¡tico da pasta `docs/` na Vercel, evitando servir snapshot desatualizado.

---

## [1.0.10] - 2026-02-19
### Changed
- Corrigida a codificaÃ§Ã£o de textos com caracteres quebrados (acentos) em pÃ¡ginas principais e de configuraÃ§Ã£o.
- Padronizado o layout visual de `polÃ­tica de privacidade`, `termos de uso` e `licenÃ§a` com o mesmo design.
- Renomeado o menu da navbar de `Mais` para `InformaÃ§Ãµes` e adicionado o link `LicenÃ§a`.

---

## [1.0.9] - 2026-02-19
### Changed
- RodapÃ© atualizado para refletir a licenÃ§a MIT: `Copyright Â© 2026 Marlenildo Ferreira Melo Â· Licenciado sob MIT`.
- Adicionado link `LicenÃ§a` no rodapÃ©, junto aos links institucionais.
- Criada a pÃ¡gina `licenca.qmd` com explicaÃ§Ã£o e texto completo da licenÃ§a MIT.

---

## [1.0.8] - 2026-02-19
### Changed
- Atualizado o texto do destaque da home para `Bem-vindo Ã  MelonMundi!` no card principal.

---

## [1.0.7] - 2026-02-19
### Fixed
- Removido o contorno branco do botao hamburguer na navbar em tela de celular (estado antes de rolar), mantendo apenas as linhas do icone.

---


## [1.0.6] - 2026-02-19
### Changed
- Atualizado o arquivo `assets/img/favicon.ico` do site publico e regenerados os artefatos em `docs/`.

---

## [1.0.5] - 2026-02-19
### Changed
- Define o titulo da home (`index.qmd`) como `Pagina Inicial` para corrigir o texto exibido na aba do navegador.

---

## [1.0.4] - 2026-02-19
### Changed
- Configurado `favicon.ico` em `_quarto.yml` para padronizar o icone do navegador no site publico.
- Mantida a instrumentacao Matomo do site publico com `siteId=2` apontando para endpoint publico de tracking.

---

## [1.0.3] - 2026-02-08
### Changed
- Navbar ajustada para modo translÃºcido
- Melhoria visual na sobreposiÃ§Ã£o com o conteÃºdo de fundo
- PadronizaÃ§Ã£o do estilo visual do topo do site

---
## [1.0.2] - 2026-02-06
### Fixed
- CorreÃ§Ã£o dos links de **Termos de Uso** e **PolÃ­tica de Privacidade**
- InclusÃ£o dos links legais no menu da navbar para melhor acessibilidade

---

## [1.0.1] - 2026-02-06
### Changed
- Ajuste do layout da pÃ¡gina **Sobre** para `column-page`
- Melhoria na leitura e organizaÃ§Ã£o do conteÃºdo institucional

---

## [1.0.0] - 2026-02-05
### Changed
- Ajuste do botÃ£o **Entrar** para integraÃ§Ã£o com o fluxo de autenticaÃ§Ã£o (oauth2-proxy)
- AtualizaÃ§Ã£o da URL de login do ecossistema MelonMundi

### Added
- Tela provisÃ³ria de login com aviso ao usuÃ¡rio
- PreparaÃ§Ã£o do site pÃºblico para integraÃ§Ã£o definitiva com Keycloak

---

## [0.1.0] - 2026-01-27
### Added
- Estrutura inicial do site pÃºblico
- ConfiguraÃ§Ã£o do Quarto
- PÃ¡gina inicial e pÃ¡gina Sobre
- SEO bÃ¡sico
- BotÃ£o de login externo



