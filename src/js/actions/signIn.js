import axios from 'axios';
import * as actionTypes from '../utils/actionTypes';
import { apiPath } from '../constants';

/* eslint no-unused-vars: 1 */
export function updateSuccessfulLogin(res) {
  return {
    type: actionTypes.AUTHENTICATEUSER,
    payload: true,
  };
}

export function authenticateUser({ emailAddress, password }) {
  return dispatch => axios.post(apiPath.authenticate, {
    username: emailAddress,
    password,
  }).then(res => dispatch(updateSuccessfulLogin(res)))
    .catch((err) => {
      console.log('some error in authenticatiing', err);
    });
}
