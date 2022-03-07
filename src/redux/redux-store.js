import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import pageRoutesReducer from "./pageRoutes-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import loginReducer from './login-reducer'
import thunkMiddleware from 'redux-thunk'
import NavbarReducer from "./navbar-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  pageRoutes: pageRoutesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  loginPage: loginReducer,
  navbar: NavbarReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store



