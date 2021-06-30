import {createStore,combineReducers,applyMiddleware,compose} from'redux'
import thunkMiddleware from "redux-thunk"
import userReducer from "./reducers/userReducer";



const reducers =  combineReducers(
    {
        userReducer: userReducer,

    }
)

type RootReducerType = typeof reducers
export type appStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
