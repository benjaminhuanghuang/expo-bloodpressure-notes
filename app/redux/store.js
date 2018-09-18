import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
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
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  undefined, // init state
  compose(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);
