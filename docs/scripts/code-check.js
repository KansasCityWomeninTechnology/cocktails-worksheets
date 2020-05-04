(function () {
  const REGEX = /\[!CODECHECK\]\s*([\s\S]+?)[\s]*\[CODECHECK!\]/g;

  const install = (hook, vm) => {
    hook.afterEach(function (html, next) {

      console.log(html);
      const modifiedHtml = html.replace(REGEX, (match, contents) => {
        return (
          `
            <div class="cnc-callout cnc-working">
              <details>
                <p></p>
                <summary>Need a little help? Expand this section for guidance.
                </summary>
                ${contents}
              </details>
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