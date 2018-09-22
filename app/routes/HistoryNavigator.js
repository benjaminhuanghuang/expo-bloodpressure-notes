import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { HistoryListScreen, HistoryChartScreen } from '../screens';

const HistoryNavigator = createStackNavigator(
  {
    HistoryList: {
      screen: HistoryListScreen,
      navigationOptions: ({ navigation }) => ({
        title: `History`,
        headerBackTitle: null,
        headerRight: (
          <Button title="Chart" onPress={() =>  navigation.navigate('HistoryChart')}/>
        ),
      }),
    },
    HistoryChart: {
      screen: HistoryChartScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Chart`,
        headerLeft: (
          <Button title="List" onPress={() => navigation.navigate('HistoryList')} />
        ),
      }),
    },
  }, {
    initialRouteName: 'HistoryList',
    navigationOptions: {
    },
  });

export default HistoryNavigator;