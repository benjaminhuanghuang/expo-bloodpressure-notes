import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './routes/AppNavigator';
import { AlertProvider } from './components/Alert';
import { store, persistor } from './redux/store';


// onNavigationStateChange={null}  will disable the log about navigation
export default class App extends React.Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <AlertProvider>
            <Navigator onNavigationStateChange={null} />
          </AlertProvider>
        </PersistGate>
      </Provider>)
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});