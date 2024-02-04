import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { HomeScreen, SplashScreen, InputHomeScreen, LoadingScreen, ResultScreen, OverlayExample } from './pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //    {/* <SplashScreen/> */}
    //  {/* <HomeScreen/> */}
    //  {/* <InputHomeScreen/> */}
    //  {/* <LoadingScreen/> */}
    // <ResultScreen/>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='InputHome' component={InputHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <OverlayExample/>

  );
};

export default App;

const styles = StyleSheet.create({})