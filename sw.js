self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('wame').then(function (cache) {
      cache.addAll([
        '/',
        '/index.html',
      ]);
    })
  );
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request, { ignoreSearch: true })
      .then(function (response) {
        return response || fetch(event.request);
      })
  );
});
