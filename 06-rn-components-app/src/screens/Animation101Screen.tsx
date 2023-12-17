import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useContext } from 'react';

export const Animation101Screen = () => {

  const { position, opacity, fadeIn, fadeOut, startMovingPosition } = useAnimation();

  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          transform: [{
            translateY: position
          }],
          opacity,
          backgroundColor: colors.primary
        }} />

      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(-150, 300)
        }}
        color={colors.primary}
      />

      <Button
        title="Fade Out"
        onPress={fadeOut}
        color={colors.primary}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150
  }
});