(function () {
  const REGEX = /<p>\s*{% codeblock (.+?)?\s?%}(.+?)?{% codeblock %}<\/p>(<pre[\S\s]+?<\/pre>)/g;

  const install = (hook, vm) => {
    hook.afterEach(function (html, next) {
      const modifiedHtml = html.replace(REGEX, (match, copy, filename, code) => {
        
        const copyButton = copy ? `
        <button class="cnc-copy-code-button">
          <span><i class="far fa-copy"></i>&nbsp;Copy</span>
          <div class="cnc-copy-code-indicator cnc-copy-code-hide">
            <span><i class="fas fa-check"></i> Copied</span>
          </div>
        </button>` : '';
        const filenameLabel = filename ? `<span class="cnc-filename-label">${filename}</span>` : `<span class="cnc-filename-label"></span>`;

        return `
        <div class="cnc-codeblock-label">
          <div class="cnc-codeblock-label-header">${filenameLabel}${copyButton}</div>
          ${code}
        </div>
        `;
      });

      next(modifiedHtml);
    });

    hook.doneEach(function() {
      const listenerHosts = [...document.querySelectorAll('button.cnc-copy-code-button')];
      listenerHosts.forEach( el => el.addEventListener('click', (evt) => {

        let codeNode = evt.target.parentNode;
        while(codeNode.tagName !== 'DIV' || ![...codeNode.classList].find(name => name === 'cnc-codeblock-label')) {
          codeNode = codeNode.parentNode;
        }
        codeNode = codeNode.querySelector('code');

        let buttonNode = evt.target;
        while(buttonNode.tagName !== 'BUTTON') {
          buttonNode = buttonNode.parentNode;
        }

        navigator.clipboard
          .writeText(codeNode.innerText)
          .then(() => {
            buttonNode.lastElementChild.classList.remove('cnc-copy-code-hide');
            setTimeout(() => buttonNode.lastElementChild.classList.add('cnc-copy-code-hide'), 3000);
          }, () => {});
      }));
    });

  };

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
}());
