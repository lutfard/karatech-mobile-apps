import React, {useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { HomeScreen, InputHomeScreen, LoadingScreen, ResultScreen, OverlayExample, AppNavigator, HistoryScreen } from './pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './context';
import {CreatedTable, DropTable}  from './db';
import {openDatabase} from 'react-native-sqlite-storage';



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



// createTable().then((result) => {
//   console.log('init db success!')
// }).catch((err) => {
//   console.log('init failed!')
//   console.log(err)
// });

const db = openDatabase({
  name: 'lmapps.db',
  location: 'default',
});

const createdTable = async () => {
  const query = 'CREATE TABLE IF NOT EXIST test (ID INTEGER PRIMARY KEY NOT NULL, NAME TEXT NOT NULL)';

  try{
    await db.executeSql(query);
  }
  catch(err){
    console.log(err);
  }
};

const dropTable = async () => {
  const query = 'DROP TABLE test';

  try{
    await db.executeSql(query);
    console.log('delete');
  }
  catch(err){
    console.log(err);
  }
};


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    dropTable().then((result) => {
      console.log('init db success!')
    }).catch((err) => {
      console.log('init failed!')
      console.log(err)
    });
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