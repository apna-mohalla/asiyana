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
/* eslint-disable arrow-body-style */
export const authenticateUser = ({ userid, password }) => (dispatch) =>
  auth
    .signInWithEmailAndPassword(userid, password)
    .then((cred) => {
      return db
        .collection('users')
        .doc(cred.user.uid)
        .get()
        .then((doc) => {
          const { displayName, blockName, flatNumber, phoneNumber } = doc.data();
          dispatch(
            updateLoginCredentials({
              displayName,
              email: cred.user.email,
              blockName,
              flatNumber,
              phoneNumber,
            }),
          );
        });
    })
    .catch((err) => dispatch(updateNotification({ message: err.message, messageType: messageTypes.error })));

export const logout = () => (dispatch) =>
  auth
    .signOut()
    .then(() => dispatch(logoutAction()))
    .catch((err) => dispatch(updateNotification({ message: err.message, messageType: messageTypes.error })))
    .finally(() => {
      // clear all data
    });
