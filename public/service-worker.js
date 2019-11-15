
self.addEventListener('install', event => {
  console.log(': service worker is installing');
});

self.addEventListener('activate', event => {
  console.log(': service worker has activated');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin == location.origin ) {
    console.log(': service worker sees fetch ' + url.pathname);
  }
});
