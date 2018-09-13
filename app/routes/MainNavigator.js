import { createBottomTabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";


//
import { HomeScreen } from "./screens";
import HistoryNavigator from "./HistoryNavigator";

const MainNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    History: HistoryNavigator,
}, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTabColor: "#a41034"
        }
    });

export default MainNavigator;