import React, { Component } from 'react';
import { FlatList, StatusBar, View, KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
//
import moment from 'moment';
//
import Container from '../components/Container';
import BloodPressureInput from '../components/BloodPressureInput';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import SubmitButton from '../components/SubmitButton';
import { ListItem, Separator, ListHeader } from '../components/List';

const styles = EStyleSheet.create({
  list: {
    width: '90%',
    backgroundColor: '$white',
    marginBottom: 5,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
})

class HomeScreen extends Component {
  state = {
    lowPressure: '',
    highPressure: '',
    records: [
      {
        lowPressure: 60,
        highPressure: 120,
        dateTime: '11111'
      },
      {
        lowPressure: 70,
        highPressure: 150,
        dateTime: '22222'
      }
    ],
    isFormValid: false,
  }

  getHandler = key => val => {
    this.setState({ [key]: val }, () => {
      this.validateForm();
    });
  }

  handleSubmit = () => {
    this.setState({
      lowPressure: '',
      highPressure: '',
      isFormValid: false,
      records: [
        {
          dateTime: moment().format('h:mm:ss'),
          lowPressure: this.state.lowPressure,
          highPressure: this.state.highPressure,
        }, ...this.state.records]
    });
  };

  validateForm = () => {
    if (
      +this.state.lowPressure > 0 && +this.state.highPressure > 0
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
        <Logo />
        <BloodPressureInput
          label='低压'
          keyboardType="numeric"
          name="lowPressure"
          value={this.state.lowPressure}
          onChangeText={this.getHandler('lowPressure')}
        />
        <BloodPressureInput
          label='高压'
          keyboardType="numeric"
          name="highPressure"
          value={this.state.highPressure}
          onChangeText={this.getHandler('highPressure')}
        />
        <SubmitButton enabled={this.state.isFormValid} onPress={this.handleSubmit} text="保存" />
        <ListHeader />
        <FlatList style={styles.list}
          data={this.state.records}
          renderItem={({ item }) => <ListItem data={item} />}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.dateTime}
        />
      </Container>
    );
  }
}
export default HomeScreen;