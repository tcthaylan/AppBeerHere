import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loggedUser: {}
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload
      }

    default:
      return state;
  }
}