import {checkAuthUser} from "../auth-reducer/auth-reducer.ts";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";

const SET_INICIALIZED = 'app/SET_INICIALIZED'


export type InitialStateType = {
  isInitialized: boolean
}

const initialState: InitialStateType = {
  isInitialized: false,
}

type TActions = SetInitializedType

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch(action.type) {
    case SET_INICIALIZED:
      return {
        ...state,
        isInitialized: true
      }
    default:
      return state
  }
}
export default appReducer

type SetInitializedType = {
  type: typeof SET_INICIALIZED
}
export const setInicialized = (): SetInitializedType => ({type: SET_INICIALIZED})




export const initialize = () => (dispatch: Dispatch<TActions>, getState) => {
  const checkAuth = dispatch(checkAuthUser())

  Promise.all([checkAuth]).then(data => {
    dispatch(setInicialized())
  })
}





