import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './routes/MainNavigator';
import { AlertProvider } from './components/Alert';
import store from './redux/store';


// onNavigationStateChange={null}  will disable the log about navigation
export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);