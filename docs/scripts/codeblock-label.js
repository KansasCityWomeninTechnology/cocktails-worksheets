(function () {
  const REGEX = /<p>\s*{% codeblock (.+?)?\s?%}(.+?){% codeblock %}<\/p>(<pre[\S\s]+?<\/pre>)/g;

  const buttonListener = (evt) => {
    navigator.clipboard.writeText(evt.target.previousSibling.innerText)
      .then(() => {
          evt.target.classList.add('success');
          setTimeout(() => evt.target.classList.remove('success'), 1000);
        }, 
        ()=> {
          evt.target.classList.add('error');
          setTimeout(() => evt.target.classList.remove('error'), 1000);
        }
      );
  };

  const install = (hook, vm) => {
    hook.afterEach(function (html, next) {
      const modifiedHtml = html.replace(REGEX, (match, copyButton, filename, code) => {
        
        const label = filename ? `<p class="cnc-codeblock-label">${filename}</p>` : '';
        const data = copyButton ? 'data-cnc-copy-button' : '';

        return `
        <div class="cnc-codeblock-label" ${data}>
          ${label}
          ${code}
        </div>
        `;
      
      });

      next(modifiedHtml);
    });

    hook.doneEach(() => {
      const targetElms = [...document.querySelectorAll('div[data-cnc-copy-button] > pre[data-lang]')];      
      const template = `<button class="cnc-copy-code-button"><span class="label">Click to copy</span><span class="error">Error</span><span class="success">Copied!</span></button>`;

      targetElms.forEach(elm => {
          elm.insertAdjacentHTML('beforeend', template);
      });
    });

    hook.ready(function() {
      const listenerHosts = [...document.querySelectorAll('button.cnc-copy-code-button')];
      listenerHosts.forEach( el => el.addEventListener('click', (evt) => {

        navigator.clipboard
          .writeText(evt.target.previousSibling.innerText)
          .then(() => {
            evt.target.classList.add('success');
            setTimeout(() => evt.target.classList.remove('success'));
          }, () => {
            evt.target.classList.add('error');
            setTimeout(() => evt.target.classList.remove('error'));
          });
      }));
    });

  };

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
}());
