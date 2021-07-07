import { AuthAction, AuthActionsTypes, authState } from '../types/auth';

const initialState: authState = {
  email: [],
  emailValue: '',
  loading: false,
  error: null,
};
const authReducer = (state = initialState, action: AuthAction)
  : authState => {
  switch (action.type) {
    case AuthActionsTypes.SIGN_IN:
      return {
        ...state,
        loading: true,
        emailValue: action.payload,
      };
    case AuthActionsTypes.SIGN_UP:
      return {
        ...state,
        loading: true,
        email: [...state.email, action.payload],
      };
    case AuthActionsTypes.SIGN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
// action
export const signInAction = (emailValue: string): AuthAction => ({
  type: AuthActionsTypes.SIGN_IN,
  payload: emailValue,
});
export const signUpAction = (email: string): AuthAction => ({
  type: AuthActionsTypes.SIGN_UP,
  payload: email,
});

export default authReducer;
