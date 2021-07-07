import { Dispatch } from 'redux';
// import axios from 'axios';
import { AuthAction, AuthActionsTypes } from '../types/auth';

export const signIn = (emailValue:string) => async (dispatch:Dispatch<AuthAction>) => {
  try {
    dispatch({
      payload: emailValue,
      type: AuthActionsTypes.SIGN_IN,
    });
  } catch (e) {
    dispatch({
      payload: 'Mistake',
      type: AuthActionsTypes.SIGN_ERROR,
    });
  }
};
export const signUp = (emailValue:string) => async (dispatch:Dispatch<AuthAction>) => {
  try {
    dispatch({
      payload: emailValue,
      type: AuthActionsTypes.SIGN_UP,
    });
  } catch (e) {
    dispatch({
      payload: 'Mistake',
      type: AuthActionsTypes.SIGN_ERROR,
    });
  }
};
