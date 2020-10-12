import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loggedUser: {}
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        loggedUser: action.payload
      }

    default:
      return state;
  }
}