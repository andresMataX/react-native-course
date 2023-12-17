import React from 'react';
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false
  });

  const onChangeSwitch = (value: boolean, field: string) => {

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

      <ScrollView>
        <View>

          <HeaderTitle title="TextInputs" />

          <TextInput
            onChangeText={(value) => onChange(value, 'name')}
            style={{
              ...styles.input,
              color: colors.text,
              borderColor: colors.border
            }}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
          />

          <TextInput
            onChangeText={(value) => onChange(value, 'email')}
            style={{
              ...styles.input,
              color: colors.text,
              borderColor: colors.border
            }}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType='email-address'
          />

          <View style={styles.switchRow}>
            <Text style={{
              ...styles.switchText,
              color: colors.text
            }}>Suscribirme</Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={(isSubscribed) => onChange(isSubscribed, 'isSubscribed')}
            />
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <TextInput
            onChangeText={(value) => onChange(value, 'phone')}
            style={{
              ...styles.input,
              color: colors.text,
              borderColor: colors.border
            }}
            placeholder="Ingrese su teléfono"
            keyboardType='phone-pad'
          />

        </View>

        <View style={{ marginBottom: 100 }} />
      </ScrollView>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    height: 50,
    paddingHorizontal: 10,
    color: 'black',
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.7)',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
    color: 'black'
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});