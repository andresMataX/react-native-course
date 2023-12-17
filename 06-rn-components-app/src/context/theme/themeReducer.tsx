import { Theme } from "@react-navigation/native"

type ThemeAction =
  | { type: 'light_theme' }
  | { type: 'dark_theme' }

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark',
  dividerColor: string
}

export const ligthTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
  dividerColor: 'rgba(0,0,0,0.7)'
}

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
  dividerColor: 'rgba(0,0,0,0.7)'
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

  switch (action.type) {
    case "light_theme":
      return {
        ...ligthTheme
      }
    case "dark_theme":
      return {
        ...darkTheme
      }
    default:
      return state;
  }
}