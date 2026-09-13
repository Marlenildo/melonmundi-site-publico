/**
 * Textos do banner de cookies.
 *
 * O Quarto aceita `title`, `description` e rótulos em `website.cookie-consent`,
 * mas não os repassa para a biblioteca: o `cookieconsent.run()` gerado recebe
 * apenas `language` e `website_name`. A biblioteca então usa a tradução própria
 * de português, que afirma que o site mostra "conteúdo personalizado, anúncios
 * direcionados" — coisas que a MelonMundi não faz. Informar finalidade errada
 * compromete o consentimento (LGPD, art. 9º), então os textos são corrigidos
 * aqui.
 *
 * Para não exibir o texto errado antes da troca, o banner é escondido por um
 * estilo que este próprio script injeta e só é revelado depois da correção. Se
 * o script não rodar, nada é escondido; se rodar e algo falhar, um limite de
 * tempo revela o banner assim mesmo. Em nenhum cenário o usuário fica sem a
 * escolha de consentimento.
 */
(() => {
  const TEXTOS = {
    ".cc-nb-title": "Cookies e privacidade",
    ".cc-nb-text":
      "Usamos cookies essenciais para manter a sua sessão e o funcionamento do " +
      "site. Com o seu consentimento, usamos também cookies de medição (Matomo) " +
      "para entender como o site é usado e melhorar o conteúdo. Não exibimos " +
      "publicidade nem compartilhamos os seus dados com redes de anúncios.",
    ".cc-nb-okagree": "Aceitar",
    ".cc-nb-reject": "Recusar",
    ".cc-nb-changep": "Alterar preferências",
  };

  const LIMITE_MS = 2000;
  const ESTILO_ID = "mm-cookie-consent-oculto";

  const esconder = () => {
    if (document.getElementById(ESTILO_ID)) return;
    const estilo = document.createElement("style");
    estilo.id = ESTILO_ID;
    estilo.textContent =
      "#cc-main .cc-nb-main-container,#cc-nb-main-container," +
      ".cc-nb-main-container{visibility:hidden}";
    document.head.appendChild(estilo);
  };

  const revelar = () => {
    const estilo = document.getElementById(ESTILO_ID);
    if (estilo) estilo.remove();
  };

  const aplicar = () => {
    const banner = document.querySelector(".cc-nb-text");
    if (!banner) return false;
    Object.entries(TEXTOS).forEach(([seletor, texto]) => {
      document.querySelectorAll(seletor).forEach((el) => {
        el.textContent = texto;
      });
    });
    return true;
  };

  // O link que o Quarto injeta no rodapé vem em inglês mesmo com lang pt-BR.
  const traduzirLinkDoRodape = () => {
    const link = document.querySelector(".cookie-consent-footer a");
    if (link && /cookie preferences/i.test(link.textContent)) {
      link.textContent = "Preferências de cookies";
    }
  };

  esconder();
  const expirar = window.setTimeout(revelar, LIMITE_MS);

  const finalizar = () => {
    window.clearTimeout(expirar);
    revelar();
  };

  if (aplicar()) {
    finalizar();
  } else {
    const observador = new MutationObserver(() => {
      if (!aplicar()) return;
      observador.disconnect();
      finalizar();
    });
    observador.observe(document.body, { childList: true, subtree: true });
    // Se o banner nunca aparecer (consentimento já registrado), para de observar.
    window.setTimeout(() => observador.disconnect(), LIMITE_MS);
  }

  traduzirLinkDoRodape();
  document.addEventListener("DOMContentLoaded", traduzirLinkDoRodape);
})();
