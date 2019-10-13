const createActionTypes = (arr) => {
  const actionTypes = {};
  arr.forEach((item) => (actionTypes[item] = item));
  return actionTypes;
};

const actionString = ['AUTHENTICATE_SUCCESSFUL', 'LOGOUT_SUCCESSFUL', 'UPDATE_SNACKBAR'];

export default createActionTypes(actionString);
