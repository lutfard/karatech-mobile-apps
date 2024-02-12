import React, {useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { HomeScreen, InputHomeScreen, LoadingScreen, ResultScreen, OverlayExample, AppNavigator, HistoryScreen } from './pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './context';


// function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <HomeScreen/>
//   </View>
//   );
// }

// function InputHome() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <InputHomeScreen/>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();



const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <NavigationContainer>
    //    {/* <SplashScreen/> */}
    //  {/* <HomeScreen/> */}
    //  {/* <InputHomeScreen/> */}
    //  {/* <LoadingScreen/> */}
    // <ResultScreen/>
    // </NavigationContainer>
    // <HistoryScreen/>

    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={stackNavigate} />
    //     <Tab.Screen name="InputHome" component={InputHomeScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <AppProvider>
      <AppNavigator/>
    </AppProvider>
    
  );
};

export default App;

const styles = StyleSheet.create({})