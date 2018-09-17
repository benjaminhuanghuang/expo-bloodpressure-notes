
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoadingScreen = ({ color }) => (
  <View style={styles.root}>
    <ActivityIndicator size="large" color={color || 'gray'} />
  </View>
);

export default LoadingScreen;