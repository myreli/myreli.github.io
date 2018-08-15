//adicionar ao cache todos os arquivos estáticos
var CACHE_NAME = 'static-v1';

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                './',
                './index.html',
                './assets/css/styles.css',
                './js/jquery.min.js',
                './js/script.js',
                './js/skel.min.js',
                './js/util.js',
                './manifest.js',
                './images/bg.jpg'
            ]);
        })
    )
});

//Ao ativar atualiza o cache se necessário
this.addEventListener('activate', function activator(event) {
    event.waitUntil(caches.keys().then(function (keys) {
        return Promise.all(keys.filter(function (key) {

            return key.indexOf(CACHE_NAME) !== 0;
        }).map(function (key) {

            return caches.delete(key);
        })
        );
    })
    );
});

//pegar o que for solicitado do cache, e se ele não existir fazer um request
this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});