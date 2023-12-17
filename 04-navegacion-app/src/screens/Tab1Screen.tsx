import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{paddingHorizontal: 20, flex: 1, backgroundColor: 'white'}}>
      <Text style={styles.title}>Icons</Text>

      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};
