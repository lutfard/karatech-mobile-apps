
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import InputHomeScreen from '../InputHomeScreen';
import ResultScreen from '../ResultScreen';
import HistoryScreen from '../HistoryScreen';
import InfoScreen from '../InfoScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="InputHomeScreen" component={InputHomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeStack} options={{ headerShown: false }}/>
        <Tab.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="InfoScreen" component={InfoScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;