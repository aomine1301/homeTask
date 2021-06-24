import {actionsType} from "../types/actionTypes"

//action
export const LOGIN_USER = 'LOGIN_USER'
export const REGISTER_USER = 'REGISTER_USER'


const initialState = {
    email: '',
    password: ''
}
export type authState = typeof initialState
export const authReducer = (state: authState, action: actionsType)
    : authState => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        case REGISTER_USER:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
    }
}
//actions
const setLogin = (email: string, password: string): actionsType => ({
    type: LOGIN_USER,
    payload: {email, password}
})
//thunk
