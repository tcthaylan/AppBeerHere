import * as actionTypes from '../actions/actionTypes'

export const getLoggedUser = () => dispatch => {
  const user = {
    name: "Thaylan",
    idade: 23,
  }

  dispatch({
    type: actionTypes.GET_LOGGED_USER,
    payload: user
  })
}