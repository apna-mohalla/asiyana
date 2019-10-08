import * as actionTypes from '../utils/actionTypes';
import { labels } from '../constants';

const initialState = {
  isLoggedIn: false,
  message: '',
  user: null,
};

export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNINSUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        message: '',
        user: action.payload,
      };

    case actionTypes.SIGNINFAILURE:
      return {
        ...state,
        isLoggedIn: false,
        message: labels.loginFailure,
        user: null,
      };

    case actionTypes.LOGOUT:
    default:
      return state;
  }
}
