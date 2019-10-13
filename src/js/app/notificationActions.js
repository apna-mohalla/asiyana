import actionTypes from 'configs/actionTypes';

export const updateNotification = (message, messageType) => ({
  type: actionTypes.UPDATE_SNACKBAR,
  payload: {
    message,
    messageType,
  },
});
