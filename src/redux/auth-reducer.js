import {authApi} from "../api/api";
import {setUserPage, setCurrentUserId} from "./profile-reducer";

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
        isLogIn: action.resultCode === 0 ? true : false
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

export const logIn = (resultCode) => ({type: LOG_IN, resultCode})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const authUser = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    authApi.getAuth().then(data => {
      dispatch(logIn(data.resultCode))
      const {id, login, email} = data.data
      dispatch(setAuthUserData(id, login, email))
      dispatch(setCurrentUserId(id))
      dispatch(setUserPage(id))
      dispatch(toggleIsFetching(false))

    })
  }
}

