import React from "react";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";
import EStyleSheet from 'react-native-extended-stylesheet';

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

//
import ChartScreen from "./screens/ChartScreen";
import HistoryScreen from "./screens/HistoryScreen";
import InputScreen from "./screens/InputScreen";

const AppNavigator = createBottomTabNavigator({
    Home: InputScreen,
    History: HistoryScreen,
    Chart: ChartScreen,
}, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTabColor: "#a41034"
        }
    });

export default AppNavigator;