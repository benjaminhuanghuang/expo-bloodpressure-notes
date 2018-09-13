import React from "react";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";


//
import HomeScreen from "./screens/home/HomeScreen";
import HistoryScreen from "./screens/history/HistoryListScreen";
import ChartScreen from "./screens/history/HistoryChartScreen";

const AppNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    History: HistoryScreen,
    Chart: ChartScreen,
}, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTabColor: "#a41034"
        }
    });

export default AppNavigator;