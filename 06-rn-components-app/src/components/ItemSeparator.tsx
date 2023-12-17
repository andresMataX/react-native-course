import React from 'react';
import { View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ItemSeparator = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View
      style={{
        borderBottomWidth: 2,
        opacity: 0.4,
        marginVertical: 8,
        backgroundColor: colors.border
      }} />
  )
}