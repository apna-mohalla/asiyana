const pushNotificationPublicKey =
  'BEU7TT-5LqAMDwNX_REn-34GR0k8vAY0G_VsJs1xg7aeTo3DGsCytNBSmJqKoqTgYTBhdLPtKHehEugf7kr01Tg';

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

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
  swRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(pushNotificationPublicKey),
    })
    .then((subscription) => {
      // here goes what we want to do with subscription.
      console.log('subscription', subscription);
    });
}

export function requestPushNotification() {
  Notification.requestPermission((status) => {
    console.log('Notification permission status:', status);
  });
}

export function showPushNotification(notification) {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then((reg) => reg.showNotification(notification));
  } else if (Notification.permission === 'blocked') {
    console.log('User has not given permission to push notification. Reload the page');
  } else {
    console.log('Push notification is not supported');
  }
}
