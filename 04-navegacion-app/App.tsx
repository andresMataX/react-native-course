import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContex';

export const App = () => {

    return (
        <NavigationContainer>
            <AppState>
                {/* <StackNavigator /> */}
                {/* <MenuLateralBasico /> */}
                <MenuLateral />
                {/* <Tabs /> */}
            </AppState>
        </NavigationContainer>
    )
}

const AppState = ({ children }: any) => {

    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}