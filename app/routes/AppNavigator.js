import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LoginScreen } from '../screens';
import MainNavigator from './MainNavigator';

// @connect(
//   state => ({
//     navigation: state.navigation,
//     user: state.user,
//   })
// )
export default class AppNavigator extends Component {
  state = {};

  render() {
    // const navigation = {
    //   dispatch: this.props.dispatch,
    //   state: this.props.navigation,
    // };

    // if (this.props.user.isLogged) {
    //   return <MainNavigator navigation={navigation} />;
    // }

    return <LoginScreen />;
  }
}

export const router = MainNavigator.router;