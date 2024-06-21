import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigator} from './pages';
import {AppProvider} from './context';
import {createDetailTables, createTables} from './db';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    createTables();
    createDetailTables();
  }, []);

  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
