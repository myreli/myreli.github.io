/*
 * The South Coders custom translate JS v1.0
 * Using i18next
 * Copyright © 2017 The South Coders
 * All rights reserved.
*/

(function($) {

    // translation

    i18next
    .use(window.i18nextXHRBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLnh: 'pt',
      debug: true,
      backend: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
        loadPath: 'js/locales/{{lng}}.json'
      },
      escapeInterpolation: true,
    }, function(err, t) {
      //console.warn(i18next.store.data);
      //console.warn("lang: " + i18next.language);
      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $);

      // start localizing, details:
      // https://github.com/i18next/jquery-i18next#usage-of-selector-function
      $(document).localize();
    });


    function changeLng(lng) {
      i18next.changeLanguage(lng);
      location.reload();
    }

    /*i18next.on('languageChanged', () => {

    });*/

    $('.setLanguage').click(function() {
      changeLng($(this).data("lang"));
    });

})(jQuery);