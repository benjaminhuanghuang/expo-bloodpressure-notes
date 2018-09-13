import { createStackNavigator } from 'react-navigation';

import { HistoryListScreen, HistoryChartScreen } from '../screens';

const HistoryNavigator = createStackNavigator(
  {
    HistoryList: HistoryListScreen,
    HistoryChart: HistoryChartScreen,
  }, {
    initialRouteName: 'HistoryList',
    navigationOptions: {
    },
  });

export default HistoryNavigator;