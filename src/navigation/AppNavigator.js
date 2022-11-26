import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen'
import {AboutScreen} from '../screens/AboutScreen'
const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={AboutScreen} />
    </Tab.Navigator>
  );
}