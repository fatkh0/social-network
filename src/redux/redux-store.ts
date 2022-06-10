import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer.ts";
import messagesReducer from "./messages-reduser/messages-reducer.ts";
import usersReducer from "./users-reducer/users-reducer.ts";
import authReducer from "./auth-reducer/auth-reducer.ts";
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer/app-reducer.ts'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


type TProperties<T> = T extends {[key: string]: infer U} ? U : never

export type TInferActions<T extends {[key: string]: (...args: any) => any}> = ReturnType<TProperties<T>>

//@ts-ignore
const composEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composEnhancers(applyMiddleware(thunkMiddleware)))

//@ts-ignore
window.__store__ = store

export default store



