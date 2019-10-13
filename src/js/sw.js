const version = 4;
// Use this function if we require to add functionality.
// self.addEventListener('notificationclose', (e) => {
//   // const { notification } = e;
//   // console.log(notification);
//   // const { data } = notification;
//   // /* eslint no-console: 1 */
//   // if (data !== null) {
//   //   console.log(`Closed notification: ${data.primaryKey}`);
//   // }
// });

/* eslint no-restricted-globals: 2 */
self.addEventListener('push', (event) => {
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  const title = 'Apna Mohalla';
  const options = {
    body: event.data.text(),
  };
  /* eslint no-restricted-globals: 2 */
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('install', (event) => {
  console.log('SW installed ', version, ' -> ', new Date().toLocaleString());
  self.skipWaiting();
  event.waitUntil(caches.open(version).then((cache) => cache.addAll(['index.html', 'index.js', 'main.css'])));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      if (res) {
        return res;
      }
      if (!navigator.onLine) {
        return caches.match(new Request('index.html'));
      }
      // The below line is buggy. The fetch header needs to be cleared after a request is done.
      return fetch(event.request);
    }),
  );
});
