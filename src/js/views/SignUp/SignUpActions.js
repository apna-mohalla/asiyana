import { labels } from 'configs/translations';
import { messageTypes } from 'configs/snackBar';
import { updateNotification } from 'js/app/notificationActions';

/* eslint-disable no-unused-vars */
export const signUp = ({ email, password }) => (dispatch) => {
  const message = labels.signUpSuccessfull;
  const messageType = messageTypes.success;
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => dispatch(updateNotification({ message, messageType })))
    .catch((err) => {
      dispatch(updateNotification({ message: err.message, messageType: messageTypes.error }));
    });
};
