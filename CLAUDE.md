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

- Versão: ver `VERSION` e `CHANGELOG.md` (1.5.1 em `dev`; a `main` ainda está
  na 1.0.31 — `dev` não foi promovida porque há pendências nela).
- Último trabalho: o crédito "Desenvolvido por" do rodapé passou a usar a marca
  Marlenildo.online (`assets/img/logo_marlenildo_online.svg`, SVG com o texto em
  curvas, montado a partir de `site-marlenildo`). O link do crédito leva a
  `https://marlenildo.online`. Conferido no build em desktop e celular, sem 404.
- Próximos passos: (preencher)
