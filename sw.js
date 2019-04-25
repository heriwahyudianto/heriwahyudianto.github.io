
const version = "0.6.11";
const cacheName = 'heriwahyudianto-${version}';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/assets/css/style.css',
        '/assets/img/android-icon-36x36.png',
        "/assets/img/android-icon-48x48.png",
        "/assets/img/android-icon-72x72.png",
        "/assets/img/android-icon-96x96.png",
        "/assets/img/android-icon-144x144.png",
        "/assets/img/android-icon-192x192.png",
        "/assets/img/favicon.ico",
        "/assets/img/favicon-32x32.png",
        "/assets/img/favicon-16x16.png",
        "/assets/img/favicon-96x96.png"
      ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
