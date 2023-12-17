import React, { useContext, useEffect, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Stack';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/Auth/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'Login'> { }

export const Login = ({ navigation }: Props) => {

  const { signIn, errorMessage, removeError } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    Keyboard.dismiss();
    signIn({ correo: email, password });
  }

  const inputPassword = useRef<TextInput>();

  useEffect(() => {

    if (errorMessage.length === 0) return;

    Alert.alert('Login incorrect!', errorMessage, [{
      text: 'Ok',
      onPress: removeError
    }]);

  }, [errorMessage])


  return (
    <>
      <Background />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

        <View style={loginStyles.formContainer}>

          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>

          <Text style={loginStyles.label}>Email:</Text>
          <TextInput
            style={loginStyles.input}
            placeholder="Enter your email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            keyboardType='email-address'
            selectionColor="white"
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={(value) => onChange(value.trim(), 'email')}
            onSubmitEditing={() => inputPassword.current?.focus()}
          />

          <Text style={loginStyles.label}>Password:</Text>
          <TextInput
            ref={(el) => inputPassword.current = el!}
            style={loginStyles.input}
            placeholder="Enter your password"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            selectionColor="white"
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(value) => onChange(value.trim(), 'password')}
            onSubmitEditing={onLogin}
            secureTextEntry
          />

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={loginStyles.button}
              onPress={onLogin}
            >
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.replace('Register')}
            >
              <Text style={loginStyles.buttonText}>Create an account </Text>
            </TouchableOpacity>
          </View>

        </View>

      </KeyboardAvoidingView>
    </>
  )
}