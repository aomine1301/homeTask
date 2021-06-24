import {LOGIN_USER, REGISTER_USER} from "../reducers/auth";

export interface LOGIN_TYPE {
    type: typeof LOGIN_USER,
    payload: {
        email: string,
        password: string
    }
}
export interface REGISTER_TYPE {
    type: typeof REGISTER_USER,
    payload: {
        email: string,
        password: string
    }
}

export type actionsType = LOGIN_TYPE | REGISTER_TYPE