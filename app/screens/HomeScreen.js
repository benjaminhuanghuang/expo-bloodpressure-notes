import React, { Component } from 'react';
import { FlatList, StatusBar, KeyboardAvoidingView } from 'react-native';
//
import Container from '../components/Container';
import BloodPressureInput from '../components/BloodPressureInput';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import SubmitButton from '../components/SubmitButton';
import { ListItem, Separator } from '../components/List';

class HomeScreen extends Component {
  state = {
    lowPressure: '',
    highPressure: '',
    records: [],
    isFormValid: false,
  }

  getHandler = key => val => {
    this.setState({ [key]: val })
  }

  handleLowPressureChange = this.getHandler('lowPressure')
  handleHighPressureChange = this.getHandler('highPressure')

  handleSubmit = () => {
  };

  validateForm = () => {
    if (
      +this.state.lowPressure >= 0 && +this.state.highPressure >= 0
    ) {
      this.setState({ isFormValid: true })
    }
    else {
      this.setState({ isFormValid: false })
    }
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <BloodPressureInput
            label='低压'
            keyboardType="numeric"
            name="lowPressure"
            onChangeText={this.getHandler('phone')}
          />
          <BloodPressureInput
            label='高压'
            keyboardType="numeric"
            name="highPressure"
            onChangeText={this.getHandler('name')}
          />
          <SubmitButton onPress={this.handleSubmit} text="保存" />
        </KeyboardAvoidingView>
        <FlatList
          data={this.state.records}
          renderItem={({ record }) => (
            <ListItem data={record} />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </Container>
    );
  }
}
export default HomeScreen;