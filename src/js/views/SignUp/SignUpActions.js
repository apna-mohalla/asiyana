import { labels } from 'configs/translations';
import { messageTypes } from 'configs/snackBar';
import { updateNotification } from 'js/app/appActions';

/* eslint-disable no-unused-vars */
export const signUp = ({ email, password }) => (dispatch) => {
  const message = labels.signUpSuccessfull;
  const messageType = messageTypes.success;
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => dispatch(updateNotification({ message, messageType })))
    .catch((err) => {
      dispatch(updateNotification({ message: err.message, messageType: messageTypes.error }));
    });
};
