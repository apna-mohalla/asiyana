import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import { configureStore } from './reduxStore';
import { requestPushNotification, subscribePushNotification } from './PushNotification';
import { paths } from './constants';
import '../styles/style.scss';

const store = configureStore();

const isServiceWorkerSupported = 'serviceWorker' in navigator;
const isPushNotificationSupported = 'PushManager' in window;

const registerServiceWorker = () => {
  if (isServiceWorkerSupported && isPushNotificationSupported) {
    navigator.serviceWorker.register(`${paths.baseUrl}sw.js`).then((sw) => {
      requestPushNotification();
      subscribePushNotification(sw);
    });
  }
};

function renderDom() {
  /* eslint no-undef: 2 */
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>,
    document.getElementById('main'),
  );
}

function run() {
  registerServiceWorker();
  renderDom();
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
