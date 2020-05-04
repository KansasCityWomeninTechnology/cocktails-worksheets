(function () {
  const CALLOUTTYPES = ['WORKING', 'WARNING', 'INFO', 'TIP', 'CHECKPOINT'];
  const REGEX = RegExp(`<\\s*blockquote[^>]*>(?:<p>|[\\S\\n]*)?\\[!((?:${CALLOUTTYPES.join('|')})?)\\]([\\s\\S]*?)(?:<\\/p>)?<\\s*\\/\\s*blockquote>`, 'g');

  const install = (hook, vm) => {
    hook.afterEach(function (html, next) {

      const modifiedHtml = html.replace(REGEX, (match, calloutType, contents) => {
        if (!CALLOUTTYPES.includes(calloutType)) {
          
          return match;
        }

        return (
          `
            <div class="cnc-callout cnc-${calloutType.toLowerCase()}">
               ${contents}
            </div>
         `
        );
      });

      next(modifiedHtml);
    });
  };

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
}());