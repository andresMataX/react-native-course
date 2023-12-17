import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParams, StackNavigator } from './StackNavigator';
import { Search } from '../screens/Search';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { Pokemon } from '../screens/Pokemon';

const Tab = createBottomTabNavigator();

const TabSearch = createStackNavigator<RootStackParams>();

export const TabScreen = () => {
  return (
    <TabSearch.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <TabSearch.Screen name="Search" component={Search} />
      <TabSearch.Screen name="Pokemon" component={Pokemon} />
    </TabSearch.Navigator>
  );
}

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: 60,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.85)'
        }
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        options={{
          tabBarLabel: "Listado",
          tabBarIcon: ({ color }) => <Icon name='list-outline' color={color} size={20} />
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="TabScreen"
        options={{
          tabBarLabel: "Búsqueda",
          tabBarIcon: ({ color }) => <Icon name='search-outline' color={color} size={20} />
        }}
        component={TabScreen}
      />
    </Tab.Navigator>
  );
}