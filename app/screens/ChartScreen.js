import React, { Component } from 'react';
import { ScrollView, StatusBar,Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class ChartScreen extends Component {
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <Text>Chart Screen</Text>
      </ScrollView>
    );
  }
}
export default ChartScreen;