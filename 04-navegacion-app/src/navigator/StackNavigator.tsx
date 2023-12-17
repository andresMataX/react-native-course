import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen, Pagina2Screen, Pagina3Screen, PersonaScreen } from '../screens';

export type RootStackParams = {
    Pagina1Screen: undefined
    Pagina2Screen: undefined
    Pagina3Screen: undefined
    PersonaScreen: { id: number, nombre: string }
}

// Definimos el tipado global
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    return (
        <Stack.Navigator
            // initialRouteName="Pagina1Screen"
            screenOptions={{
                // headerShown: false,
                headerStyle: {
                    elevation: 0
                },
                cardStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <Stack.Screen name="Pagina1Screen" options={{ title: "Página 1" }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title: "Página 2" }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: "Página 3" }} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
        </Stack.Navigator>
    )
}