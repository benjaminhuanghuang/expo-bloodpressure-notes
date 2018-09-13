import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const middlewares = [
  promiseMiddleware(),
  thunk,
];

if (__DEV__) { // eslint-disable-line
  middlewares.push(createLogger());
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default createStore(
  persistedReducer,
  undefined, // init state
  compose(applyMiddleware(...middlewares)),
);