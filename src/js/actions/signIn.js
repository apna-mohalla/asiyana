import * as actionTypes from '../utils/actionTypes';

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}

const loginsuccess = (res) => ({
  type: actionTypes.SIGNINSUCCESS,
  payload: res,
});

const loginfailure = (res) => ({
  type: actionTypes.SIGNINFAILURE,
  payload: res,
});

export function authenticateUser({ userid, password }) {
  return (dispatch) => auth
    .signInWithEmailAndPassword(userid, password)
    .then((res) => {
      dispatch(loginsuccess(res));
    })
    .catch((err) => {
      dispatch(loginfailure(err));
    });
}
