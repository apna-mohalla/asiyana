/* eslint no-underscore-dangle: 0 */ // --> OFF
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

// Reducers
import reducers from './reducers/rootReducers';

export function configureStore() {
  const middleware = applyMiddleware(thunk);

  const createStoreWithMiddleware = compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  );
  return createStoreWithMiddleware(createStore)(reducers, {});
}
