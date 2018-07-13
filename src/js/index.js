import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import { configureStore } from './reduxStore';
import { requestPushNotification, subscribePushNotification, saveSubscriptionToLocalStorage } from './PushNotification';
import { paths } from './constants';
import theme from './material-theme';
import '../styles/style.scss';

const store = configureStore();

const isServiceWorkerSupported = 'serviceWorker' in navigator;
const isPushNotificationSupported = 'PushManager' in window;

const registerServiceWorker = () => {
  if (isServiceWorkerSupported && isPushNotificationSupported) {
    navigator.serviceWorker.register(`${paths.baseUrl}sw.js`).then((sw) => {
      requestPushNotification();
      subscribePushNotification(sw);
      saveSubscriptionToLocalStorage(sw);
    });
  }
};

const addToHomeScreen = () => {
  // Add to Homescreen functionality.
  window.addEventListener('beforeinstallprompt', (e) => {
    // beforeinstallprompt Event fired
    // e.userChoice will return a Promise.
    e.userChoice.then((choice) => {
      console.log(choice.outcome);
      if (choice.outcome === 'dismissed') {
        console.log('User has dismissed the add to home screen');
      } else {
        console.log('User has added to home screen');
      }
    });
  });
};

function renderDom() {
  /* eslint no-undef: 2 */
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </HashRouter>
    </Provider>,
    document.getElementById('main'),
  );
}

function run() {
  registerServiceWorker();
  addToHomeScreen();
  renderDom();
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
