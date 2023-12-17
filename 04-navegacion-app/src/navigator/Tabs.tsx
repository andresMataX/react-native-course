import React from 'react';
import { Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens';
import { colors } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndriod />;
}

const BottomTabAndriod = createMaterialBottomTabNavigator();

const TabsAndriod = () => {
    return (
        <BottomTabAndriod.Navigator
            sceneAnimationEnabled={true}
            barStyle={{ backgroundColor: colors.primary }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'airplane-outline'
                            break;
                        case 'TopTabNavigator':
                            iconName = 'bicycle-outline'
                            break;
                        case 'StackNavigator':
                            iconName = 'car-sport-outline'
                            break;
                    }

                    return (
                        <Text style={{ color }}>
                            <Icon name={`${iconName}`} size={20} color={color} />
                        </Text>
                    )
                },

            })}
        >
            <BottomTabAndriod.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTabAndriod.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
            <BottomTabAndriod.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabAndriod.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color, focused, size }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;
                        case 'StackNavigator':
                            iconName = 'ST'
                            break;
                    }

                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}

        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ headerShown: false, title: 'Stack' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}