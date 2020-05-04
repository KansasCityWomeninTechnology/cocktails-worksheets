(function () {
  const REGEX = /<p>{% filename %}(.+){% endfilename %}<\/p>/g;

  const install = (hook, vm) => {
    hook.afterEach(function (html, next) {
      const modifiedHtml = html.replace(REGEX, (match, label) => {
        if (!label) {
          return match;
        }

        return (
          `
            <p class="cnc-codeblock-label">${label}</p>
         `
        );
      });

      next(modifiedHtml);
    });
  };

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
}());