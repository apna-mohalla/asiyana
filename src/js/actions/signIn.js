import axios from 'axios';
import * as actionTypes from '../utils/actionTypes';
import { apiPath } from '../constants';

export function updateLogin(res) {
  if (res.userid) {
    return {
      type: actionTypes.SIGNINSUCCESS,
      payload: res,
    };
  }
  return {
    type: actionTypes.SIGNINFAILURE,
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}

export function authenticateUser({ userid, password }) {
  return dispatch => axios.post(apiPath.authenticate, {
    userid,
    password,
  }).then(res => dispatch(updateLogin(res)))
    .catch((err) => {
      console.log('some error in authenticatiing', err);
    });
}
