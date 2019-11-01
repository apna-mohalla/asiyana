import actionTypes from 'configs/actionTypes';
import { messageTypes } from 'configs/snackBar';
import { updateNotification } from 'js/app/notificationActions';

export const updateLoginCredentials = (payload) => ({
  type: actionTypes.AUTHENTICATE_SUCCESSFUL,
  payload,
});

export const logoutAction = () => ({
  type: actionTypes.LOGOUT_SUCCESSFUL,
});

/* eslint-disable implicit-arrow-linebreak */
export const authenticateUser = ({ userid, password }) => (dispatch) =>
  auth
    .signInWithEmailAndPassword(userid, password)
    .then((cred) => {
      dispatch(
        updateLoginCredentials({
          displayName: cred.user.displayName,
          email: cred.user.email,
        }),
      );
    })
    .catch((err) => dispatch(updateNotification(err.message, messageTypes.error)));

export const logout = () => (dispatch) =>
  auth
    .signOut()
    .then(() => dispatch(logoutAction()))
    .catch((err) => dispatch(updateNotification(err.message, messageTypes.error)));
