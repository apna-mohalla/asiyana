import * as actionTypes from '../utils/actionTypes';

const initialState = {
  resourceName: '',
  fieldName: '',
  fieldValue: '',
  status: '',
  message: '',
};

export default function signUp(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNUPSUCCESS:
      return Object.assign({}, state, action.payload);
    case actionTypes.SIGNUPRESET:
    default:
      return Object.assign({}, state, initialState);
  }
}
