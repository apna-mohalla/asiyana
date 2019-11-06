import paths from '../configs/paths';
import { requestPushNotification, subscribePushNotification, saveSubscriptionToLocalStorage } from './PushNotification';

const isServiceWorkerSupported = 'serviceWorker' in navigator;
const isPushNotificationSupported = 'PushManager' in window;

export const registerServiceWorker = function() {
  if (window.location.hostname === 'localhost') return;
  const { hostname, pathname } = window.location;

  if (isServiceWorkerSupported && isPushNotificationSupported) {
    navigator.serviceWorker.register(`${hostname}${pathname}sw.js`).then((sw) => {
      requestPushNotification();
      subscribePushNotification(sw);
      saveSubscriptionToLocalStorage(sw);
    });
  }
};
