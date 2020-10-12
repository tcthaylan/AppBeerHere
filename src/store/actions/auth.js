import * as actionTypes from '../actions/actionTypes'
import api from '../../services/api'

export const signIn = (email, password) => dispatch => {
  api.post('/auth/login', { email, password })
    .then(resp => {
      console.log(resp)
    })
    .catch(error => {
      console.log('error');
      console.log(error);
    })

  // dispatch({
  //   type: actionTypes.SIGN_IN,
  //   payload: user
  // })
}

// export const getLoggedUser = () => dispatch => {
//   const user = {
//     name: "Thaylan",
//     idade: 23,
//   }

//   dispatch({
//     type: actionTypes.GET_LOGGED_USER,
//     payload: user
//   })
// }