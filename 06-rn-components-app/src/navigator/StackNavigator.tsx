import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../context/theme/ThemeContext';

import { styles } from '../theme/appTheme';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ligthTheme } from '../context/theme/themeReducer';
import { View } from 'react-native';

import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  PullToRefreshScreen,
  SwitchScreen,
  TextInputScreen,
  CustomSectionListScreen,
  ModalScreen,
  InfiniteScrollScreen,
  SlidesScreen
} from '../screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      <NavigationContainer
        theme={theme}
      >
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              // backgroundColor: 'white',
              flex: 1,
              ...styles.globalPadding
            },
            headerShown: false,
          }} >

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen} />
          <Stack.Screen
            name="Animation101Screen"
            component={Animation101Screen} />
          <Stack.Screen
            name="Animation102Screen"
            component={Animation102Screen} />
          <Stack.Screen
            name="SwitchScreen"
            component={SwitchScreen} />
          <Stack.Screen
            name="AlertScreen"
            component={AlertScreen} />
          <Stack.Screen
            name="TextInputScreen"
            component={TextInputScreen} />
          <Stack.Screen
            name="PullToRefreshScreen"
            component={PullToRefreshScreen} />
          <Stack.Screen
            name="CustomSectionListScreen"
            component={CustomSectionListScreen} />
          <Stack.Screen
            name="ModalScreen"
            component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen} />
          <Stack.Screen
            name="SlidesScreen"
            component={SlidesScreen} />
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
}