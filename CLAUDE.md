# CLAUDE.md — melonmundi-site-publico

@AGENTS.md

## Como o Claude trabalha aqui

- As regras do `AGENTS.md` (importado acima) valem integralmente. Não duplicar
  regras aqui: se uma regra mudar, editar o `AGENTS.md`.
- Ler este arquivo antes de explorar. Não revisar a repo inteira: ir direto aos
  arquivos que a tarefa toca (ver "Arquivos de maior impacto" no `AGENTS.md`).
- Visão do ecossistema e fronteiras entre repos: `../melonmundi-workspace/AGENTS.md`.
- Em sessões na nuvem, os repos irmãos ficam lado a lado (`../<repo>`), como no
  guarda-chuva local.
- Ao fim de cada sessão, atualizar a seção "Estado atual" abaixo com o que mudou.

## Comandos rápidos

```bash
quarto render    # gera docs/, publicado pela Vercel; não editar docs/ à mão
quarto preview
```

`project.render` em `_quarto.yml` é uma lista explícita: `.md` como este não
vira página.

## Estado atual

- Versão: ver `VERSION` e `CHANGELOG.md` (1.6.0 na `dev` e na `main`: PR #12
  para a `dev` e #13 para a `main`, promovido com o ok do usuário em
  2026-11-08; deploy de produção da Vercel concluído). O site no ar não foi
  aberto na sessão (melonmundi.com fora da lista de acesso da nuvem).
- 1.6.0 (2026-11-08), a pedido do usuário: conteúdo da home e de Quem Somos
  alinhado ao Acervo (7 simuladores, AgroJornal publicado, temas da Biblioteca,
  programas de capacitação) e só melão e melancia, sem abóbora. As imagens
  `sim-agro*-logo.webp` e `sim-agro*-tela.webp` são cópias byte a byte de
  `app-agro*-vertical.webp` e `app-agro*-gallery.webp` do Acervo: simulador
  novo, copiar de lá. A tela do AgroJornal não entrou (mostra nomes comerciais
  de defensivos). Validado: `quarto render` (1.9.37) e Chrome em 1366 e 375 px
  (sem rolagem horizontal, sem 404, imagens carregando). Sem teste: ícones Font
  Awesome e Matomo (bloqueados na nuvem). Pendente com o usuário: a Política de
  Privacidade (4.3 e prazos) ainda diz que nenhum simulador usa `localStorage`
  e lista só quatro, o que não vale para AgroFerti, AgroMix e AgroMeta.
- Antes:  o crédito "Desenvolvido por" do rodapé passou a usar a marca
  Marlenildo.online (`assets/img/logo_marlenildo_online.svg`, SVG com o texto em
  curvas, montado a partir de `site-marlenildo`). O link do crédito leva a
  `https://marlenildo.online`. Conferido no build em desktop e celular, sem 404.
- Promoção 1.0.31 → 1.5.1: antes do merge, `quarto render` na `dev` gerou o
  mesmo texto das cinco páginas que já estava em `docs/` (diferenças só de
  versão do Quarto). Não houve conferência visual no navegador.
- Próximos passos: (preencher)
