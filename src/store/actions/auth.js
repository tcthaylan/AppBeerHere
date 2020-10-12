import { Alert } from 'react-native'
import * as actionTypes from '../actions/actionTypes'
import api from '../../services/api'

export const signIn = (email, password) => dispatch => {
  api.post('/auth/login', { email, password })
    .then(resp => {
      const { user, token } = resp.data

      if (user.provider) {
        Alert.alert('O usuário não pode ser prestador de serviços')
        return
      }

      api.defaults.headers.Authorization = `Bearer ${token}`

      dispatch({
        type: actionTypes.SIGN_IN,
        payload: { user, token }
      })
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Verifique se as suas credenciais estão corretas')
      return
    })
}

export const signOut = () => dispatch => {
  api.defaults.headers.Authorization = ''
  dispatch({
    type: actionTypes.SIGN_OUT,
  })
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