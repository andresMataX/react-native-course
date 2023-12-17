import React, { createContext } from "react";
import { useReducer } from 'react';
import { authReducer } from './AuthReducer';

// Definir cómo luce la información que tendré
export interface AuthState {
    isLoggedIn: boolean
    username?: string
    favoriteIcon?: string
}

// Estado inicial
export const authInitalState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Decimos a React cómo luce y qué expone
export interface AuthContextProps {
    authState: AuthState
    signIn: () => void
    logOut: () => void
    changeFavoriteIcon: (iconName: string) => void
    changeUsername: (username: string) => void
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitalState);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const logOut = () => {
        dispatch({ type: 'logout' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}