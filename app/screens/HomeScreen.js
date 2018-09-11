import React, { Component } from 'react';
import { FlatList, StatusBar, View, KeyboardAvoidingView } from 'react-native';
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
    records: [
      {
        lowPressure:60,
        highPressure:120,
        dateTime: '11111'
      },
      {
        lowPressure:70,
        highPressure:150,
        dateTime: '11111'
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
    this.state.records.push({
      dateTime: new Date(),
      lowPressure: this.state.lowPressure,
      highPressure: this.state.highPressure,
    });

    this.setState({
      lowPressure: '',
      highPressure: '',
      isFormValid: false
    })

    console.log(this.state);
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
        <View style={{ height: 200, alignSelf: "flex-end" }}>
          {/* <FlatList
            data={this.state.records}
            renderItem={({ record }) => (
              <ListItem record={record} key={record.dateTime}/>
            )}
            // keyExtractor={item => item}
            // ItemSeparatorComponent={Separator}
          /> */}
        </View>
      </Container>
    );
  }
}
export default HomeScreen;