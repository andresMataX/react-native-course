import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AlbumsScreen, ChatScreen, ContacsScreen } from '../screens';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colors.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary,
                },
                tabBarStyle: {
                    elevation: 0
                },
                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'chatbubbles-outline'
                            break;
                        case 'ContacsScreen':
                            iconName = 'people-outline'
                            break;
                        case 'AlbumsScreen':
                            iconName = 'images-outline'
                            break;
                    }

                    return (
                        <Text style={{ color }}>
                            <Icon name={`${iconName}`} size={20} color={color} />
                        </Text>
                    )
                }
            })}
        >
            <Tab.Screen name="ChatScreen" options={{ title: 'Chats' }} component={ChatScreen} />
            <Tab.Screen name="ContacsScreen" options={{ title: 'Contacts' }} component={ContacsScreen} />
            <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums' }} component={AlbumsScreen} />
        </Tab.Navigator>
    );
}