import React, { useEffect, useReducer } from 'react';
import { createContext } from "react";
import { Usuario, LoginResp, LoginData, RegisterData } from '../../interfaces/Auth/loginInterface';
import { authReducer, AuthState } from './authReducer';
import cafeApi from '../../api/cafeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: ({ correo, password, nombre }: RegisterData) => Promise<void>;
  signIn: ({ correo, password }: LoginData) => Promise<void>;
  logOut: () => void;
  removeError: () => void;
}

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {

    checkToken()

  }, [])


  const checkToken = async () => {

    const token = await AsyncStorage.getItem('token');
    if (!token) return dispatch({ type: 'notAuthenticated' })

    const resp = await cafeApi.get('/auth');

    if (resp.status !== 200) {
      dispatch({ type: 'notAuthenticated' })
    }

    // await AsyncStorage.setItem('token', resp.data.token)

    dispatch({ type: 'signUp', payload: { token: token, user: resp.data.usuario } })

  }


  const signIn = async ({ correo, password }: LoginData) => {

    try {

      const resp = await cafeApi.post<LoginResp>('/auth/login', { correo, password })

      dispatch({ type: 'signUp', payload: { token: resp.data.token, user: resp.data.usuario } })

      await AsyncStorage.setItem('token', resp.data.token)

    } catch (error: any) {
      dispatch({ type: 'addError', payload: error.response.data.msg || 'Información incorrecta' })
    }

  }


  const signUp = async ({ correo, password, nombre }: RegisterData) => {

    try {

      const resp = await cafeApi.post<LoginResp>('/usuarios', { correo, password, nombre })

      dispatch({ type: 'signUp', payload: { token: resp.data.token, user: resp.data.usuario } })

      await AsyncStorage.setItem('token', resp.data.token)

    } catch (error: any) {
      dispatch({ type: 'addError', payload: error.response.data.erros[0].msg || 'Información incorrecta' })
    }

  }


  const logOut = async () => {

    await AsyncStorage.removeItem('token');

    dispatch({ type: 'logout' });

  }


  const removeError = () => {
    dispatch({ type: 'removeError' })
  }


  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}