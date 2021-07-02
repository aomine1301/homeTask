import { ThunkAction } from 'redux-thunk';
import { appStateType } from '../store';
// import {CurrencyBodyType, CurrencyType} from "../../axios/typesAPI";
// import {API} from "../../axios/allCurrencyAPI";

const SIGN_IN = 'LOGIN';
const SIGN_UP = 'REGISTRATION';

interface SIGN_IN {
    type: typeof SIGN_IN
    payload: any
}
interface SIGN_UP {
    type: typeof SIGN_UP
    payload: any
}

export type ActionsTypeCurrencyReducer = SIGN_IN | SIGN_UP

type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionsTypeCurrencyReducer>

type getStateType = () => appStateType

const initialState = {
  email: null,
};
export type InitialStateCurrencyReducerType = typeof initialState

const currencyReducer = (state = initialState, action: ActionsTypeCurrencyReducer)
:InitialStateCurrencyReducerType => {
  switch (action.type) {
    case SIGN_IN:
      return {
        email: { ...action.payload },
      };
    case SIGN_UP:
      return {
        email: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
// action
export const login = ():ActionsTypeCurrencyReducer => ({
  type: SIGN_IN, payload: null,
});
// thunk
// export const getAllCurrency = ():ThunkType =>
//     async (dispatch
//         ,getState:getStateType) => {
//
//         let currencyData;
//         currencyData = await API.getAllCurrency()
//         if (currencyData.valid === true) {
//             let currencies = currencyData.currencies
//             dispatch(setAllCurrency(currencies))
//         }
//
//     }
export default currencyReducer;
