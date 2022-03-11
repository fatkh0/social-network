import { checkAuthUser } from "./auth-reducer"

const SET_INICIALIZED = 'SET_INICIALIZED'

const initialState = {
  isInitialized: false,
}

const appReducer = (state = initialState, action) => {
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

export const setInicialized = () => ({type: SET_INICIALIZED})

export const initialize = () => (dispatch) => {
  const checkAuth = dispatch(checkAuthUser())

  Promise.all([checkAuth]).then(data => {
    dispatch(setInicialized(true))
  })
}





