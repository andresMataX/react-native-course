import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ModalScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const [isVisible, setIsVisible] = useState(false)

  return (
    <View>
      <HeaderTitle title="Modal" />

      <Button
        title="Abrir Modal"
        onPress={() => setIsVisible(true)}
        color={colors.primary}
      />

      <Modal
        animationType="fade"
        visible={isVisible}
        transparent={true} >

        <View style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <View style={{
            backgroundColor: 'white',
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5
          }}>
            <Text style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>Modal</Text>
            <Text style={{
              color: 'black',
              fontSize: 16,
              marginBottom: 30
            }}>Cuerpo del Modal</Text>
            <Button
              title="Cerrar"
              onPress={() => setIsVisible(false)} />
          </View>
        </View>

      </Modal>
    </View>
  )
}