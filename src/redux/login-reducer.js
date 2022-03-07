

const initialState = {

}

const loginReducer = (state = initialState, action) => {
  switch (action.type){
    case true:
      return {
        ...state
      }

    default:
      return state
  }

}

export default loginReducer