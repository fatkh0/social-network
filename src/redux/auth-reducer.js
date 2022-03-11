import {authApi} from "../api/api";
import {setUserPage, setCurrentUserId} from "./profile-reducer";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_PHOTOS = 'SET_PHOTOS'
const LOG_IN = 'LOG_IN'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  email: null,
  login: null,
  userId: null,
  isFetching: false,
  isLogIn: false,
  avatar: null,
}

const authReducer = (state = initialState, action) => {



  switch(action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data
      }

    case SET_PHOTOS:
      return {
        ...state,
        photos: {...action.photos}
      }

    case LOG_IN:
      return {
        ...state,
        isLogIn: action.isLogin
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetcjing
      }
    default:
      return state
  }
}
export default authReducer

export const setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_USER_DATA,
  data: {
    userId, login, email
  }
})

export const setIsLogIn = (isLogin) => ({type: LOG_IN, isLogin})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export const checkAuthUser = () => (dispatch) => {
    dispatch(toggleIsFetching(true))
    return authApi.getAuth().then(data => {
      if (data.resultCode !== 0) return

      dispatch(setIsLogIn(true))
      const {id, login, email} = data.data
      dispatch(setAuthUserData(id, login, email))
      dispatch(setCurrentUserId(id))
      dispatch(setUserPage(id))
      dispatch(toggleIsFetching(false))
    })
}


export const logInToApp = (email, password, rememberMe) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    authApi.logIn(email, password, rememberMe).then(data => {
      if (data.resultCode === 0)  {
        dispatch(checkAuthUser())
      } else {
        const message = data.messages.length ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
      }
      
    })

    dispatch(toggleIsFetching(false))
  }
}

export const logOut = () => dispatch => {
  
    authApi.logOut().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData('', '', ''))
        dispatch(setIsLogIn(false))
      } 
      
    })

}



