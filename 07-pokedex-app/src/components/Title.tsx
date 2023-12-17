import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  text?: string
}

export const Title = ({ text = "Pokedex" }: Props) => {

  const { top } = useSafeAreaInsets();


  return (
    <Text
      style={{
        ...styles.title,
        ...styles.globalMargin,
        top: top + 20,
        marginBottom: top + 20,
        paddingBottom: 10,
        marginTop: (text !== "Pokedex") ? top + 60 : top + 10
      }}
    >
      {text}
    </Text>
  )
}