import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryBlue',
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
});

const Container = ({ children }) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;