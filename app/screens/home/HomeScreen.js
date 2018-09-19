import React, { Component } from 'react';
import { FlatList, StatusBar, Text, View, KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
//
import Container from '../../components/Container';
import BloodPressureInput from '../../components/BloodPressureInput';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import SubmitButton from '../../components/SubmitButton';
import { ListItem, Separator, ListHeader } from '../../components/List';

import { createRecord, fetchTodayRecords } from './actions';

const styles = EStyleSheet.create({
  list: {
    width: '90%',
    backgroundColor: '$white',
    marginBottom: 5,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
})

@connect(
  state => ({
    todayRecords: state.home.todayRecords,
    error: state.home.error,
    isLoding: state.home.isLoding,
    userId: state.user.info.id
  }),
  { createRecord, fetchTodayRecords}
)
class HomeScreen extends Component {
  state = {
    lowPressure: '',
    highPressure: '',
    isFormValid: false,
  }

  getHandler = key => val => {
    this.setState({ [key]: val }, () => {
      this.validateForm();
    });
  }

  handleSubmit = () => {
    this.props.createRecord({
      lowPressure: this.state.lowPressure,
      highPressure: this.state.highPressure,
      userId: this.props.userId
    });

    this.setState({
      lowPressure: '',
      highPressure: '',
      isFormValid: false,
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

  componentDidMount()
  {
    this.props.fetchTodayRecords(this.props.userId);
  }

  render() {
    const {
      isLoading,
      todayRecords,
      error,
    } = this.props;

    if (isLoading) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <Container>
          <Text>{error.message}</Text>
        </Container>
      );
    }

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
          data={todayRecords}
          renderItem={({ item }) => <ListItem data={item} dateFormat={'ddd HH:mm'} />}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item._id}
        />
      </Container>
    );
  }
}
export default HomeScreen;