import actionTypes from 'configs/actionTypes';
import { setPromiseState } from '../utils/setPromise';

const initialState = {
  authStatus: setPromiseState(true, false, false),
  isLoggedIn: false,
  snackBar: {
    message: '',
    messageType: '',
  },
  user: null,
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

    case actionTypes.UPDATE_AUTHENTICATION:
      return {
        ...state,
        authStatus: action.payload,
      };

    case actionTypes.AUTHENTICATE_SUCCESSFUL:
      return { ...state, isLoggedIn: true, user: action.payload };

    case actionTypes.LOGOUT_SUCCESSFUL:
      return { ...state, isLoggedIn: false, user: null };

    default:
      return state;
  }
}
