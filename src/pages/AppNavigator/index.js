/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import InputHomeScreen from '../InputHomeScreen';
import ResultScreen from '../ResultScreen';
import HistoryScreen from '../HistoryScreen';
import InfoScreen from '../InfoScreen';
import Colors from '../../style/Color';
import {Icon} from '../../assets/icon/Icon';
import LoadingScreen from '../LoadingScreen';
import HistoryDetailScreen from '../HistoryDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'HomeScreen') {
            return <Icon.Home height={20} width={20} style={{color: color}} />;
          } else if (route.name === 'History') {
            return (
              <Icon.History height={20} width={20} style={{color: color}} />
            );
          } else {
            return <Icon.Info height={20} width={20} style={{color: color}} />;
          }
        },

        tabBarActiveTintColor: Colors.darkBlue,
        tabBarInactiveTintColor: Colors.darkGrey,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Data Info"
        component={InfoScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InputHomeScreen"
          component={InputHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoryDetail"
          component={HistoryDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
