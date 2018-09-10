import React, { Component } from 'react';
import { ScrollView, StatusBar, Text } from 'react-native';
import Container from '../components/Container';

class InputScreen extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <Text>Chart Screen</Text>
      </Container>
    );
  }
}
export default InputScreen;