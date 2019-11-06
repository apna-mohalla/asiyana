import { labels } from 'configs/translations';
import { messageTypes } from 'configs/snackBar';
import { updateNotification } from 'js/app/notificationActions';

/* eslint-disable no-unused-vars */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
export const signUp = ({ email, password, displayName, blockName, flatNumber, phone }) => (dispatch) => {
  const message = labels.signUpSuccessfull;
  const messageType = messageTypes.success;
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) =>
      db
        .collection('users')
        .doc(cred.user.uid)
        .set({
          displayName,
          blockName,
          flatNumber,
          phone,
        }),
    )
    .then(() => {
      dispatch(updateNotification({ message, messageType }));
    })
    .catch((err) => {
      dispatch(updateNotification({ message: err.message, messageType: messageTypes.error }));
    });
};
