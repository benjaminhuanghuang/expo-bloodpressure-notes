import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
//
import AppNavigator from './app/routes/AppNavigator';
import MainNavigator from './routes/MainNavigator';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0', 
  $border: '#979797',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}
