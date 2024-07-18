import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigator} from './pages';
import {AppProvider} from './context';
import {createDetailTables, createTables} from './db';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    createTables()
      .then(() => console.log('success create user table'))
      .catch(error => console.error('error creating user table: ', error));
    createDetailTables()
      .then(() => console.log('success create detail table'))
      .catch(error => console.error('error creating detail table: ', error));
  }, []);

  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
