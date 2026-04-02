# Changelog

Todas as mudancas relevantes deste projeto serao documentadas neste arquivo.


## [1.0.26] - 2026-04-02
### Changed
- Rodape: aumentada a logo da assinatura `Desenvolvido por` para melhorar a visibilidade.
- Rodape: a logo `logo_marlenildo.png` passou a ser clicavel, apontando para `https://github.com/Marlenildo`.

### Fixed
- Sincronizado o versionamento do projeto em `VERSION` e `DESCRIPTION`.
- Regerados os artefatos publicados em `docs/` para refletir o ajuste do footer.

***

## [1.0.25] - 2026-04-02
### Added
- Rodape: adicionada uma nova linha final com o texto `Desenvolvido por` e a imagem `assets/img/logo_marlenildo.png`.
- Novo script em `assets/js/footer-credit.js` para inserir a assinatura visual sem alterar a estrutura existente do footer.

### Fixed
- Sincronizado o versionamento do projeto em `VERSION` e `DESCRIPTION`.
- Regerados os artefatos publicados em `docs/` para refletir a nova linha do rodape.

***

## [1.0.24] - 2026-04-02
### Changed
- Pagina `Quem Somos`: atualizada a foto de Geinilson Oliveira em `assets/img/geinilson.png`.
- Configuracao de cookies em `_quarto.yml`: alterado o banner de consentimento para o estilo `simple`.

### Fixed
- Sincronizado o versionamento do projeto em `VERSION` e `DESCRIPTION`.
- Regerados os artefatos publicados em `docs/` para refletir as mudancas de configuracao e imagem.

***

## [1.0.23] - 2026-04-02
### Added
- Pagina `Quem Somos`: adicionado Francisco Eliton na secao `Conheca nosso time` com funcao de `Avaliador de Campo` e descricao de `Assistente de Pesquisa & Desenvolvimento`.
- Nova imagem de perfil em `assets/img/francisco.JPG`.

### Fixed
- Sincronizado o versionamento do projeto em `VERSION` e `DESCRIPTION`.

***

## [1.0.22] - 2026-04-02
### Changed
- Homepage: padronizado o CTA da secao `Biblioteca MelonMundi` com o mesmo icone e estrutura visual do botao de `Como funciona o acesso`, mantendo a variante verde.
- Homepage: atualizada a copy da secao `Como funciona o acesso` para reforcar o fluxo de navegacao, login unico e acesso a conteudo exclusivo.
- Homepage: icone do card `Biblioteca Tecnica` ajustado para `fa-book-open`.

### Fixed
- Sincronizado o versionamento do projeto em `VERSION` e `DESCRIPTION`.
- Regerados os artefatos publicados em `docs/` para refletir as mudancas da homepage e do changelog.

***


## [1.0.21] - 2026-03-19
### Changed
- Novas imagens na págian Quem Somos `assets/img/`: `marlenildo.png`, `luis.png`, `juliana.png` e `geinilson.png`.
- Nova imagem de hero-fild na página Homepage em `assets/img/hero-field.jpg`.

### Added
- Novo card de consultoria técnica em Conheça a MelonMundi na página Quem Somos.

***
## [1.0.20] - 2026-02-24
### Changed
- Homepage: secao "Aplicativos em destaque" simplificada para usar imagens unicas dos apps (`app_agrofito.png` e `app_calculadorafrutas.png`) junto ao texto.
- Homepage: link do botao do Agrofito atualizado para URL publica real: `https://acervo.melonmundi.com/apps/agrofito/`.
- Homepage mobile: selo (`.app-tag`) e botao (`Ver app no Acervo`) empilhados no card de app em telas de celular.
- Ajustado layout da secao para ampliar area visual das imagens em tela de computador.

### Added
- Novas imagens de app em `assets/img/`: `app_agrofito.png` e `app_calculadorafrutas.png`.

***
## [1.0.19] - 2026-02-20
### Changed
- Atualizado o tracking Matomo do site publico para `siteId=3` em `_quarto.yml` e artefatos em `docs/`, alinhando com a configuracao atual do Matomo (IDs 1 e 3).

***
## [1.0.18] - 2026-02-20
### Changed
- Migracao de dominio principal para https://melonmundi.com em _quarto.yml.
- Atualizados links de acesso ao acervo para https://acervo.melonmundi.com na home.
- Atualizado endpoint Matomo para //acervo.melonmundi.com/matomo/.
- Regerados artefatos em docs/ com as URLs novas.

***
## [1.0.17] - 2026-02-20
### Fixed
- Definido o tÃ­tulo institucional da aba do navegador via `website.title` no `_quarto.yml`.
- Ocultado o texto da marca na navbar (`.navbar-title`), mantendo somente a logo.
- Preservado o comportamento da home com navbar transparente no topo e translucida ao rolar.
- Regerados os arquivos em `docs/` para publicacao.

***
## [1.0.16] - 2026-02-20
### Fixed
- Restaurado o comportamento original da home: navbar transparente no topo e translucida ao rolar, com cores corretas para links e icone hamburguer.
- Removido o titulo extra exibido ao lado da logo na navbar.
- Mantido o fluxo de scripts/CSS da home no padrao anterior, sem mudancas de layout indesejadas.

***
## [1.0.15] - 2026-02-20
### Changed
- Definido o titulo do site no _quarto.yml para corrigir o nome exibido na aba do navegador na home.
- Ajustado index.qmd para manter front matter simples (apenas metadados essenciais da pagina).
- Atualizados links da home para acesso direto ao acervo externo (https://acervo.melonmundi.com).
- Removida a pagina local acervo.qmd e seu artefato docs/acervo.html.

### Fixed
- Ocultado o bloco visual padrao de titulo/descricao do Quarto via CSS (#title-block-header) para nao sobrepor o hero.
- Limpeza de arquivos locais de conflito/sincronizacao (*MarlenildoNoteDell*, live_index*, etc.).

***
## [1.0.14] - 2026-02-20
### Fixed
- Corrigida a remocao do titulo visual da home publica com title-block-style none em index.qmd.
- Aplicada a mesma estrategia na pagina inicial do acervo (acervo.qmd) para ocultar o bloco visual de titulo.
- Mantidos title e description no front matter para preservar SEO e metadados sociais (aba do navegador, Open Graph e Twitter Card).

***

## [1.0.13] - 2026-02-19
### Changed
- Home configurada com `title-block: false` em `index.qmd`, removendo o titulo visual `Pagina Inicial` do conteudo e mantendo o nome na aba do navegador.

***

## [1.0.12] - 2026-02-19
### Changed
- Ajustado texto do rodape para identidade institucional: `Copyright � 2026 MelonMundi - Global Solutions � Licenciado sob MIT`.

***

## [1.0.11] - 2026-02-19
### Fixed
- Adicionado `vercel.json` para forcar publicacao do conteudo estatico da pasta `docs/` na Vercel, evitando servir snapshot desatualizado.

***

## [1.0.10] - 2026-02-19
### Changed
- Corrigida a codificacao de textos com caracteres quebrados (acentos) em paginas principais e de configuracao.
- Padronizado o layout visual de `politica de privacidade`, `termos de uso` e `licenca` com o mesmo design.
- Renomeado o menu da navbar de `Mais` para `Informacoes` e adicionado o link `Licenca`.

***

## [1.0.9] - 2026-02-19
### Changed
- Rodape atualizado para refletir a licenca MIT: `Copyright � 2026 Marlenildo Ferreira Melo � Licenciado sob MIT`.
- Adicionado link `Licenca` no rodape, junto aos links institucionais.
- Criada a pagina `licenca.qmd` com explicacao e texto completo da licenca MIT.

***

## [1.0.8] - 2026-02-19
### Changed
- Atualizado o texto do destaque da home para `Bem-vindo a MelonMundi!` no card principal.

***

## [1.0.7] - 2026-02-19
### Fixed
- Removido o contorno branco do botao hamburguer na navbar em tela de celular (estado antes de rolar), mantendo apenas as linhas do icone.

***


## [1.0.6] - 2026-02-19
### Changed
- Atualizado o arquivo `assets/img/favicon.ico` do site publico e regenerados os artefatos em `docs/`.

***

## [1.0.5] - 2026-02-19
### Changed
- Define o titulo da home (`index.qmd`) como `Pagina Inicial` para corrigir o texto exibido na aba do navegador.

***

## [1.0.4] - 2026-02-19
### Changed
- Configurado `favicon.ico` em `_quarto.yml` para padronizar o icone do navegador no site publico.
- Mantida a instrumentacao Matomo do site publico com `siteId=2` apontando para endpoint publico de tracking.

***

## [1.0.3] - 2026-02-08
### Changed
- Navbar ajustada para modo translucido
- Melhoria visual na sobreposicao com o conteudo de fundo
- Padronizacao do estilo visual do topo do site

***
## [1.0.2] - 2026-02-06
### Fixed
- Correcao dos links de **Termos de Uso** e **Politica de Privacidade**
- Inclusao dos links legais no menu da navbar para melhor acessibilidade

***

## [1.0.1] - 2026-02-06
### Changed
- Ajuste do layout da pagina **Sobre** para `column-page`
- Melhoria na leitura e organizacao do conteudo institucional

***

## [1.0.0] - 2026-02-05
### Changed
- Ajuste do botao **Entrar** para integracao com o fluxo de autenticacao (oauth2-proxy)
- Atualizacao da URL de login do ecossistema MelonMundi

### Added
- Tela provisoria de login com aviso ao usuario
- Preparacao do site publico para integracao definitiva com Keycloak

***

## [0.1.0] - 2026-01-27
### Added
- Estrutura inicial do site publico
- Configuracao do Quarto
- Pagina inicial e pagina Sobre
- SEO basico
- Botao de login externo
