import * as actionTypes from '../utils/actionTypes';

const initialState = {
  authenticate: false,
};

export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTHENTICATEUSER:
      return Object.assign({}, state, { authenticate: action.payload });
    default:
      return Object.assign({}, state, initialState);
  }
}
