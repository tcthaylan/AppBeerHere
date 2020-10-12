import * as actionTypes from '../actions/actionTypes'

const initialState = {
  user: {},
  token: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    case actionTypes.SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        user: {},
        token: {}
      }

    default:
      return state;
  }
}