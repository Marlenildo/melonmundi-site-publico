# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.
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

