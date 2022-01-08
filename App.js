import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import store from './src/redux/store';
import { StreamApp } from 'react-native-activity-feed';



const App = () => {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <StreamApp apiKey='c9mtmr3w2jsa' appId='1159574' token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFuY3ktZmlyZWZseS01In0.KoHiRV-71SPcV6wyM1MZ6xCUebDhXi7jogtiDWNVuiA'>
            <Routes />
          </StreamApp>
        </SafeAreaProvider>
    </Provider>
  );
};

export default App;
