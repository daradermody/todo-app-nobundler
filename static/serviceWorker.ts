const broadcast = new BroadcastChannel('main');

self.addEventListener('fetch', async function(event) {
  broadcast.postMessage({ type: 'FETCH' });
  event.respondWith(fetch(event.request));
});

// Make work on first load
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});
