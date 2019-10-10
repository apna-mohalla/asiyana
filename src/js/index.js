import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './reduxStore';

import theme from '../configs/material-theme';
import { registerServiceWorker } from '../pwa/registerSW';
import { addToHomeScreen } from '../pwa/addToHomeScreen';

import AppView from './views/AppView/AppViewContainer';

import '../styles/style.scss';

const store = configureStore();

function renderDom() {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppView />
        </MuiThemeProvider>
      </Router>
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
