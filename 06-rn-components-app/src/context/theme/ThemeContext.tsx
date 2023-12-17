import React, { createContext, useReducer } from 'react';
import { AppState, useColorScheme, Appearance } from 'react-native';
import { ThemeState, themeReducer, ligthTheme, darkTheme } from './themeReducer';
import { useEffect } from 'react';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(themeReducer, colorScheme === 'dark' ? darkTheme : ligthTheme);


  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme()
      }
    })
  }, [])



  // SOLO EN IOS
  // useEffect(() => {
  //   colorScheme === 'light'
  //     ? setLightTheme()
  //     : setDarkTheme()
  // }, [])



  const setDarkTheme = () => {
    dispatch({ type: 'dark_theme' })
    console.log('Dark');
  }


  const setLightTheme = () => {
    dispatch({ type: 'light_theme' })
    console.log('Light');
  }

  return (
    <ThemeContext.Provider
      value={{
        setDarkTheme,
        setLightTheme,
        theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}