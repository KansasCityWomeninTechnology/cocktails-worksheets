(function () {
   const REGEX = /<p>\s*{% cloud-ide-begin %}([\S\s]+?){% cloud-ide-end %}<\/p>/g;
 
   const install = (hook, vm) => {
     hook.afterEach(function (html, next) {
       const modifiedHtml = html.replace(REGEX, (match, contents) => {
         if (!contents) {
           return match;
         }
 
         return (
           `<p>
               <div class="cnc-cloud-ide">
                  <details>
                     <summary>Expand for Cloud IDE instructions.</summary>
                     ${contents}
                  </details>
               </div>
             </p>
          `
         );
       });
 
       next(modifiedHtml);
     });
   };
 
   window.$docsify = window.$docsify || {};
   window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
 }());
