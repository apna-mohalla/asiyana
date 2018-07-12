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
