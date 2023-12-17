import { Usuario } from '../../interfaces/Auth/loginInterface';

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  errorMessage: string;
  user: Usuario | null;
}

type AuthActions =
  | { type: 'signUp', payload: { token: string, user: Usuario } }
  | { type: 'addError', payload: string }
  | { type: 'removeError' }
  | { type: 'notAuthenticated' }
  | { type: 'logout' }

export const authReducer = (state: AuthState, action: AuthActions): AuthState => {

  switch (action.type) {
    case 'addError':
      return {
        ...state,
        errorMessage: action.payload,
        user: null,
        status: 'not-authenticated',
        token: null,
      }
    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      }
    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user
      }
    case 'logout':
    case 'notAuthenticated':
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        user: null,
      }
    default:
      return state
  }
}