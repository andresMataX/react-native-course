import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/Stack';
import { AuthProvider } from './src/context/Auth/AuthContext';
import { ProductsProvider } from './src/context/Products/ProductsContext';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        {children}
      </ProductsProvider>
    </AuthProvider>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App;