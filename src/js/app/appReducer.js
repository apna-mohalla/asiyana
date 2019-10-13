import actionTypes from 'configs/actionTypes';

const initialState = {
  isLoggedIn: false,
  snackBar: {
    message: '',
    messageType: '',
  },
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_SNACKBAR:
      return {
        ...state,
        snackBar: {
          ...state.snackBar,
          message: action.payload.message,
          messageType: action.payload.messageType,
        },
      };

    case actionTypes.AUTHENTICATE_SUCCESSFUL:
      return { ...state, isLoggedIn: true };

    case actionTypes.LOGOUT_SUCCESSFUL:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
}
