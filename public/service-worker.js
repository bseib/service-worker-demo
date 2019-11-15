
self.addEventListener('install', event => {
  console.log(': service worker is installing');
  event.waitUntil(
    caches.open('my-svg-cache').then( cache => {
      cache.add('/dog.svg');
    })
  );
});

self.addEventListener('activate', event => {
  console.log(': service worker has activated');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin == location.origin ) {
    console.log(': service worker sees fetch ' + url.pathname);
    event.respondWith(caches.match(url.pathname));
  }
});
