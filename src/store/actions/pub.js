import * as actionTypes from '../actions/actionTypes'
import api from '../../services/api'

export const getPubs = () => dispatch => {
  dispatch({
    type: actionTypes.INIT_FETCH_REQUEST_PUBS
  })

  api.get('/pub')
    .then(resp => {
      console.log('resp.data')
      console.log(resp.data)
      dispatch({
        type: actionTypes.GET_PUBS,
        payload: resp.data
      })
    })
    .catch(error => {
      console.log(error)
    })
}