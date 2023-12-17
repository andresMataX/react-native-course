import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { Tabs } from './src/navigator/Tabs';

const App = () => {

  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <Tabs />
    </NavigationContainer>
  )
}

export default App;