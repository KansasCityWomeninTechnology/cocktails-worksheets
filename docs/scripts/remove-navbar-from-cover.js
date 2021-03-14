(function () {
   const HOME_LOCATION = /#\/\??/g;
   const install = (hook, vm) => {
     hook.doneEach(function() {
      if (HOME_LOCATION.test(window.location.hash)) {
         document.querySelector('.app-nav').classList.add('cnc-hide-element');         
         return;
      }
      document.querySelector('.app-nav').classList.remove('cnc-hide-element');   
     });
 
   };
 
   window.$docsify = window.$docsify || {};
   window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
 }());