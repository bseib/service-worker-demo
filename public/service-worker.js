
self.addEventListener('install', event => {
  console.log(': service worker version 3 is installing');
  event.waitUntil(
    caches.open('my-svg-cache').then( cache => {
      cache.add('/index.html');
      cache.add('/dog.svg');
      cache.add('/cat.svg');
    })
  );
});

self.addEventListener('activate', event => {
  console.log(': service worker version 3 has activated');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin == location.origin ) {
    console.log(': service worker version 3 sees fetch ' + url.pathname);
    switch ( url.pathname ) {
      case '/index.html':
      case '/cat.svg':
        event.respondWith(caches.match(url.pathname));
        break;
      case '/dog.svg':
          event.respondWith(caches.match('/cat.svg'));
          break;
      default:
        break;
    }
  }
});
