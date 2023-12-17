import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  item: MenuItem
}

export const FlatListMenuItem = ({ item }: Props) => {

  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(item.component as never)} >

      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name={item.icon}
            color={colors.primary}
            size={25} />
          <Text style={{ ...styles.itemText, color: colors.text }}>{item.name}</Text>
        </View>
        <Icon
          name="chevron-forward-outline"
          color={colors.primary}
          size={25} />
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 19,
  }
});