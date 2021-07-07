// action interface
export enum AuthActionsTypes {
  // eslint-disable-next-line no-unused-vars
  SIGN_IN = 'SIGN_IN',
  // eslint-disable-next-line no-unused-vars
  SIGN_UP = 'SIGN_UP',
  // eslint-disable-next-line no-unused-vars
  SIGN_ERROR = 'SIGN_ERROR',
}

interface SignInAction {
  type: AuthActionsTypes.SIGN_IN;
  payload:string;
}
interface SignUpAction {
  type: AuthActionsTypes.SIGN_UP;
  payload:string;
}
interface SignErrorAction {
  type: AuthActionsTypes.SIGN_ERROR;
  payload:string;
}

export type AuthAction = SignInAction | SignUpAction | SignErrorAction

// state interface
export interface authState {
  email: string[] | string,
  emailValue:string,
  loading: boolean,
  error: null | string
}
