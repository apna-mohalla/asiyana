import axios from 'axios';
import { apiPath } from '../constants';
import * as actionTypes from '../utils/actionTypes';

export function signUpsuccess(res) {
  return {
    type: actionTypes.SIGNUPSUCCESS,
    payload: res,
  };
}

export function resetSignUpData() {
  return {
    type: actionTypes.SIGNUPRESET,
  };
}

export function postSignUpData({
  name,
  email,
  password,
  apartmentKey,
  blockName,
  flatNumber,
  phonenumber,
}) {
  return dispatch => axios.post(apiPath.signUp, {
    name,
    email,
    userid: email,
    password,
    apartmentKey,
    blockName,
    flatNumber,
    phonenumber,
  }).then((res) => {
    dispatch(signUpsuccess(res));
  }).catch((err) => {
    console.log('some error occured while sign up. please try again', err);
  });
}
