
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
import { Image } from 'react-native-svg';
import { iconChart, iconHistory, iconHome, iconHomeActive } from '../../assets';


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
      <Tab.Navigator tabBarOptions={{
        labelStyle: { textAlign: 'center' }
      }}>
        <Tab.Screen name="HomeScreen" component={HomeStack} options={{ headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={iconHomeActive}
                />
              );
            },}}/>
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Data Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
