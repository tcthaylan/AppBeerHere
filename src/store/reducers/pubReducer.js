import * as actionTypes from '../actions/actionTypes'

const initialState = {
  list: [],
  loading: true
}

export const pubReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PUBS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      }
    case actionTypes.INIT_FETCH_REQUEST_PUBS:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}