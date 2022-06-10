import {authApi, EResponseCode} from "../../api/api.ts";
import {setUserPage, setCurrentUserId} from "../profile-reducer/profile-reducer.ts";
import { stopSubmit } from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";

const SET_AUTH_USER_DATA = 'app/auth/SET_AUTH_USER_DATA'
const LOG_IN = 'app/auth/LOG_IN'
const TOGGLE_IS_FETCHING = 'app/auth/TOGGLE_IS_FETCHING'


export type InitialStateType = {
  email: null | string,
  login: null | string,
  userId: null | number,
  isFetching: boolean,
  isLogIn: boolean,
  avatar: null | string,
  photos: null | string
}

const initialState = {
  email: null,
  login: null,
  userId: null,
  isFetching: false,
  isLogIn: false,
  avatar: null,
  photos: null
}

type TAction = SetAuthUserDataActionType | SetIsLogInActionType | ToggleIsFetchingActionType

const authReducer = (state = initialState, action: TAction): InitialStateType => {
  switch(action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data
      }

    case LOG_IN:
      return {
        ...state,
        isLogIn: action.isLogin
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}
export default authReducer




type AuthUserDataType = {
  userId: number | null
  login: string
  email: string
}
type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA
  data: AuthUserDataType
}
export const setAuthUserData = (userId: number | null, login: string, email: string): SetAuthUserDataActionType =>
({ type: SET_AUTH_USER_DATA, data: { userId, login, email } })


type SetIsLogInActionType = {
  type: typeof LOG_IN
  isLogin: boolean
}
export const setIsLogIn = (isLogin: boolean): SetIsLogInActionType => ({type: LOG_IN, isLogin})


type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType =>
    ({type: TOGGLE_IS_FETCHING, isFetching})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, TAction>



export const checkAuthUser = (): ThunkType => async (dispatch, getState) => {
  dispatch(toggleIsFetching(true))
  const response = await authApi.getAuth()

  if (response.resultCode !== EResponseCode.Success) return

    dispatch(setIsLogIn(true))
    const {id, login, email} = response.data
    dispatch(setAuthUserData(id, login, email))
    dispatch(setCurrentUserId(id))
    dispatch(setUserPage(id))
    dispatch(toggleIsFetching(false))

}




export const logInToApp = (email: string, password: string, rememberMe: boolean): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(toggleIsFetching(true))
    const response = await authApi.logIn(email, password, rememberMe)

      if (response.resultCode === EResponseCode.Success)  {
        dispatch(checkAuthUser())
      } else {
        const message = response.messages.length ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
      }

    dispatch(toggleIsFetching(false))
  }
}



export const logOut = (): ThunkType  => async (dispatch, getState) => {
  const response = await authApi.logOut()

      if (response.resultCode === EResponseCode.Success) {
        dispatch(setAuthUserData(null, '', ''))
        dispatch(setIsLogIn(false))
      }
}



