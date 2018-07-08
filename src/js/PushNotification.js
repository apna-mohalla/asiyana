const pushNotificationPublicKey = 'BBMLkY9uGZhFnU7S_UyTweHVaYNJbR70EMFc9iXnDhLA1eU7axYbNVWDtJnePLEBwmQncA21uR0LNq7x0r5P154';

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function saveSubscriptionToLocalStorage(sw) {
  sw.pushManager.getSubscription().then((subscription) => {
    localStorage.setItem('pushNotification', JSON.stringify(subscription));
  });
}

export function subscribePushNotification(swRegistration) {
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array(pushNotificationPublicKey),
  }).then((subscription) => {
    // here goes what we want to do with subscription.
    /* eslint no-console: 1 */
    console.log('subscription', subscription);
  });
}

export function requestPushNotification() {
  Notification.requestPermission((status) => {
    /* eslint no-console: 1 */
    console.log('Notification permission status:', status);
  });
}

export function showPushNotification(notification) {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => reg.showNotification(notification));
  } else if (Notification.permission === 'blocked') {
    /* eslint no-console: 1 */
    console.log('User has not given permission to push notification. Reload the page');
  } else {
    /* eslint no-console: 1 */
    console.log('Push notification is not supported');
  }
}
