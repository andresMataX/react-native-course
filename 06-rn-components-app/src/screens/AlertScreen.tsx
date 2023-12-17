import React from 'react';
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const AlertScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const showAlert = () => {
    Alert.alert(
      "Título",
      "Este es el cuerpo de la alerta",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss')
      }
    )
  }

  return (
    <View>
      <HeaderTitle title="Alerts" />

      <Button
        title="Mostrar alerta"
        onPress={showAlert}
        color={colors.primary}
      />
    </View>
  )
}