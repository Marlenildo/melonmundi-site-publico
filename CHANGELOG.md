# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.
## [1.0.16] - 2026-02-20
### Fixed
- Restaurado o comportamento original da home: navbar transparente no topo e translúcida ao rolar, com cores corretas para links e ícone hambúrguer.
- Removido o título extra exibido ao lado da logo na navbar.
- Mantido o fluxo de scripts/CSS da home no padrão anterior, sem mudanças de layout indesejadas.

---
## [1.0.15] - 2026-02-20
### Changed
- Definido o titulo do site no _quarto.yml para corrigir o nome exibido na aba do navegador na home.
- Ajustado index.qmd para manter front matter simples (apenas metadados essenciais da página).
- Atualizados links da home para acesso direto ao acervo externo (https://acervo.marlenildo.site).
- Removida a página local acervo.qmd e seu artefato docs/acervo.html.

### Fixed
- Ocultado o bloco visual padrão de título/descrição do Quarto via CSS (#title-block-header) para não sobrepor o hero.
- Limpeza de arquivos locais de conflito/sincronização (*MarlenildoNoteDell*, live_index*, etc.).

---
## [1.0.14] - 2026-02-20
### Fixed
- Corrigida a remocao do titulo visual da home publica com title-block-style none em index.qmd.
- Aplicada a mesma estrategia na pagina inicial do acervo (acervo.qmd) para ocultar o bloco visual de titulo.
- Mantidos title e description no front matter para preservar SEO e metadados sociais (aba do navegador, Open Graph e Twitter Card).

---

## [1.0.13] - 2026-02-19
### Changed
- Home configurada com `title-block: false` em `index.qmd`, removendo o título visual `Página Inicial` do conteúdo e mantendo o nome na aba do navegador.

---

## [1.0.12] - 2026-02-19
### Changed
- Ajustado texto do rodapé para identidade institucional: `Copyright © 2026 MelonMundi - Global Solutions · Licenciado sob MIT`.

---

## [1.0.11] - 2026-02-19
### Fixed
- Adicionado `vercel.json` para forçar publicação do conteúdo estático da pasta `docs/` na Vercel, evitando servir snapshot desatualizado.

---

## [1.0.10] - 2026-02-19
### Changed
- Corrigida a codificação de textos com caracteres quebrados (acentos) em páginas principais e de configuração.
- Padronizado o layout visual de `política de privacidade`, `termos de uso` e `licença` com o mesmo design.
- Renomeado o menu da navbar de `Mais` para `Informações` e adicionado o link `Licença`.

---

## [1.0.9] - 2026-02-19
### Changed
- Rodapé atualizado para refletir a licença MIT: `Copyright © 2026 Marlenildo Ferreira Melo · Licenciado sob MIT`.
- Adicionado link `Licença` no rodapé, junto aos links institucionais.
- Criada a página `licenca.qmd` com explicação e texto completo da licença MIT.

---

## [1.0.8] - 2026-02-19
### Changed
- Atualizado o texto do destaque da home para `Bem-vindo à MelonMundi!` no card principal.

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
- Navbar ajustada para modo translúcido
- Melhoria visual na sobreposição com o conteúdo de fundo
- Padronização do estilo visual do topo do site

---
## [1.0.2] - 2026-02-06
### Fixed
- Correção dos links de **Termos de Uso** e **Política de Privacidade**
- Inclusão dos links legais no menu da navbar para melhor acessibilidade

---

## [1.0.1] - 2026-02-06
### Changed
- Ajuste do layout da página **Sobre** para `column-page`
- Melhoria na leitura e organização do conteúdo institucional

---

## [1.0.0] - 2026-02-05
### Changed
- Ajuste do botão **Entrar** para integração com o fluxo de autenticação (oauth2-proxy)
- Atualização da URL de login do ecossistema MelonMundi

### Added
- Tela provisória de login com aviso ao usuário
- Preparação do site público para integração definitiva com Keycloak

---

## [0.1.0] - 2026-01-27
### Added
- Estrutura inicial do site público
- Configuração do Quarto
- Página inicial e página Sobre
- SEO básico
- Botão de login externo


