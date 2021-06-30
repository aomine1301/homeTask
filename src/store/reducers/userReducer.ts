import {appStateType} from "../store";
import {ThunkAction} from 'redux-thunk'
// import {CurrencyBodyType, CurrencyType} from "../../axios/typesAPI";
// import {API} from "../../axios/allCurrencyAPI";

const LOGIN = 'LOGIN'
const REGISTRATION = 'REGISTRATION'

interface LOGIN {
    type: typeof LOGIN
    payload: any
}
interface REGISTRATION {
    type: typeof REGISTRATION
    payload: any
}

export type ActionsTypeCurrencyReducer = LOGIN | REGISTRATION

type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionsTypeCurrencyReducer>

type getStateType = () => appStateType

// type StateType = {
//     defaultCurrency: string
//     currency: CurrencyType | null
// }

const initialState = {
    currency: null
}
export type InitialStateCurrencyReducerType = typeof initialState

const currencyReducer = (state = initialState, action: ActionsTypeCurrencyReducer)
:InitialStateCurrencyReducerType => {
    switch (action.type) {
        case LOGIN:
            return {
                currency: {...action.payload}
            }
        case REGISTRATION:
            return {
                currency: {
                    ...action.payload
                }
            }
        default:
            return state
    }


}
//action
export const login = (login:any):ActionsTypeCurrencyReducer => ({
    type: LOGIN,
    payload:login
})

//thunk
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
export default currencyReducer
