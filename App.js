import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';
import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
