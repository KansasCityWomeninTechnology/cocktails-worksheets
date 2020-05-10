(function () {
  const CALLOUTTYPES = ['EXTRACREDIT', 'WARNING', 'INFO', 'TIP', 'HINT', 'CODECHECK'];
  const REGEX = RegExp(`<\\s*blockquote[^>]*>(?:<p>|[\\S\\n]*)?\\[!((?:${CALLOUTTYPES.join('|')})?)\\]([\\s\\S]*?)(?:<\\/p>)?<\\s*\\/\\s*blockquote>`, 'g');

  const stdPanel = (calloutType, contents) => {
    return (
      `
        <div class="cnc-callout cnc-${calloutType.toLowerCase()}">
           ${contents}
        </div>
     `
    );
  };

  const hintPanel = (contents) => {
    return (
      `
        <div class="cnc-callout cnc-hint">
          <details>
            <p></p>
            <summary>Need a little help? Expand this section for guidance.
            </summary>
            ${contents}
          </details>
        </div>
     `
    );
  };

  const codeCheckPanel = (contents) => {
    return (
      `
        <div class="cnc-callout cnc-codecheck">
          <details>
            <p></p>
            <summary>Expand this section to compare your work.
            </summary>
            ${contents}
          </details>
        </div>
     `
    );
  }

  const EXTENDEDPANELS = [{type: 'HINT', panel: hintPanel}, {type: 'CODECHECK', panel: codeCheckPanel}];

  const install = (hook, vm) => {
    hook.afterEach(function (html, next) {

      const modifiedHtml = html.replace(REGEX, (match, calloutType, contents) => {
        if (!CALLOUTTYPES.includes(calloutType)) {
          
          return match;
        }

        const extendedPanel = EXTENDEDPANELS.find(el => el.type === calloutType);
        if(!extendedPanel) {
          return stdPanel(calloutType, contents);
        }

        return extendedPanel.panel(contents);
      });

      next(modifiedHtml);
    });
  };

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
}());