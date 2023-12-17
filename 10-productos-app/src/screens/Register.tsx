import React, { useContext, useEffect, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { loginStyles } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Stack';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/Auth/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'Register'> { }

export const Register = ({ navigation }: Props) => {

  const { signUp, errorMessage, removeError } = useContext(AuthContext);

  const { email, password, name, onChange, form } = useForm({
    email: '',
    password: '',
    name: ''
  });

  const onRegister = () => {
    Keyboard.dismiss();
    signUp({ correo: email, nombre: name, password })
  }

  useEffect(() => {

    if (errorMessage.length === 0) return;

    Alert.alert('Login incorrect!', errorMessage, [{
      text: 'Ok',
      onPress: removeError
    }]);

  }, [errorMessage])

  const inputEmail = useRef<TextInput>()
  const inputPassword = useRef<TextInput>()

  return (
    <>

      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#5856D6' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

        <View style={loginStyles.formContainer}>

          <WhiteLogo />
          <Text style={loginStyles.title}>Create an Account</Text>

          <Text style={loginStyles.label}>Name:</Text>
          <TextInput
            style={loginStyles.input}
            placeholder="Enter your full name"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            selectionColor="white"
            autoCapitalize='words'
            autoCorrect={false}
            value={name}
            onChangeText={(value) => onChange(value, 'name')}
            onSubmitEditing={() => inputEmail.current?.focus()}
          />

          <Text style={loginStyles.label}>Email:</Text>
          <TextInput
            ref={(el) => inputEmail.current = el!}
            style={loginStyles.input}
            placeholder="Enter your email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            keyboardType='email-address'
            selectionColor="white"
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={(value) => onChange(value, 'email')}
            onSubmitEditing={() => inputPassword.current?.focus()}
          />

          <Text style={loginStyles.label}>Contraseña:</Text>
          <TextInput
            ref={(el) => inputPassword.current = el!}
            style={loginStyles.input}
            placeholder="Create a new password"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            selectionColor="white"
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(value) => onChange(value, 'password')}
            onSubmitEditing={onRegister}
            secureTextEntry
          />

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={loginStyles.button}
              onPress={onRegister}
            >
              <Text style={loginStyles.buttonText}>Create account</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.replace('Login')}
            style={loginStyles.buttonReturn}
          >
            <Text style={loginStyles.buttonText}>I have an account </Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </>
  )
}