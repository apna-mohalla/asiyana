import axios from 'axios';
import * as actionTypes from '../utils/actionTypes';

/* eslint no-unused-vars: 1 */
export function updateSuccessfulLogin(res) {
  return {
    type: actionTypes.AUTHENTICATEUSER,
    payload: true,
  };
}

export function authenticateUser({ emailAddress, password }) {
  return dispatch => axios.post('/authenticate', {
    username: emailAddress,
    password,
  }).then(res => dispatch(updateSuccessfulLogin(res)))
    .catch((err) => {
      /* eslint no-console: 1 */
      console.log('some error in authenticatiing', err);
    });
}
