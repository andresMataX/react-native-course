import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { ThemeProvider } from './src/context/theme/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     // primary: string,
//     // background: string,
//     // card: string,
//     // text: string,
//     // border: string,
//     // notification: string,
//     ...DarkTheme.colors
//   }
// }

const App = () => {

  return (
    <AppState>
      <StackNavigator />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;