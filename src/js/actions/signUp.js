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

/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint implicit-arrow-linebreak: 0 */
export function postSignUpData({ name, email, password, apartmentKey, blockName, flatNumber, phonenumber }) {
  return (dispatch) =>
    auth.createUserWithEmailAndPassword(email, password).then((cred) => dispatch(signUpsuccess(cred.user)));
}
