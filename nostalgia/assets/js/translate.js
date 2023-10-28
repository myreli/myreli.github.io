(function ($) {

    i18next
        .use(window.i18nextXHRBackend)
        .use(i18nextBrowserLanguageDetector)
        .init({
            fallbackLnh: ['pt', 'en'],
            returnEmptyString: false,
            debug: false,
            backend: {
                loadPath: 'assets/js/locales/{{lng}}.json'
            },
            escapeInterpolation: true,
        }, function (err, t) {
            jqueryI18next.init(i18next, $);

            // localize the entire app (wrapped by #page)
            $('#page').localize();
        });

    var changeLng = function(lng) {
        i18next.changeLanguage(lng);
        location.reload();
    }

    $('#page').on('click', '.set-language', function() {
        console.log(`change language to ${$(this).data('lang')}`)
        changeLng($(this).data("lang"));
    })

    i18next.on('languageChanged', function() {
        // TODO: display new language
    });

})(jQuery);