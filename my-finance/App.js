import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="litgh-content"/>
      <Routes/>
    </NavigationContainer>
  );
}
