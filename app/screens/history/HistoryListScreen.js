import React, { Component } from 'react';
import {View, StatusBar, FlatList, Picker } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchRecords } from './actions';

import Container from '../../components/Container';
import { ListItem, Separator, ListHeader } from '../../components/List';

const styles = EStyleSheet.create({
  list: {
    width: '90%',    
    height: 200,
    backgroundColor: '$white',
    marginBottom: 5,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 20,
  },
})

@connect(
  state => ({
    bpRecords: state.history.bpRecords,
    error: state.history.error,
    isLoding: state.history.isLoding,
    userId: state.user.info.id,
  }),
  { fetchRecords }
)
class HistoryListScreen extends Component {
  state = {
    range: 'week',
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', (route) => {
      this.fetchData();
    });
  }

  fetchData() {
    let startUTC = moment().subtract(7, 'd').startOf('day').utc().format();
    if (this.state.range === 'month') {
      startUTC = moment().subtract(1, 'M').startOf('day').utc().format();
    } else if (this.state.range === 'month3') {
      startUTC = moment().subtract(3, 'M').startOf('day').utc().format();
    }

    const endUTC = moment().endOf('day').utc().format();

    this.props.fetchRecords(startUTC, endUTC, this.props.userId);
  }

  render() {
    const {
      isLoading,
      bpRecords,
      error,
    } = this.props;


    return (
      <Container>
        <View style={styles.flexContainer}>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            <Picker.Item label="1 Week" value="week" />
            <Picker.Item label="1 Month" value="month" />
            <Picker.Item label="3 Month" value="month3" />
          </Picker>
        </View>
        <ListHeader />
        <FlatList style={styles.list}
          data={bpRecords}
          renderItem={({ item }) => <ListItem data={item} dateFormat={'MM-DD HH:mm'}/>}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item._id}
        />
      </Container>
    );
  }
}

export default HistoryListScreen;