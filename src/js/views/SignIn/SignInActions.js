import actionTypes from 'configs/actionTypes';
import { messageTypes } from 'configs/snackBar';
import { updateNotification } from 'js/app/notificationActions';

export const updateLoginCredentials = () => ({
  type: actionTypes.AUTHENTICATE_SUCCESSFUL,
});

export const logoutAction = () => ({
  type: actionTypes.LOGOUT_SUCCESSFUL,
});

/* eslint-disable implicit-arrow-linebreak */
export const authenticateUser = ({ userid, password }) => (dispatch) =>
  auth
    .signInWithEmailAndPassword(userid, password)
    .then((cred) => {
      console.log(cred.user);
      dispatch(updateLoginCredentials());
    })
    .catch((err) => updateNotification(err.message, messageTypes.error));

export const logout = () => (dispatch) =>
  auth
    .signOut()
    .then(() => dispatch(logoutAction()))
    .catch((err) => updateNotification(err.message, messageTypes.error));
