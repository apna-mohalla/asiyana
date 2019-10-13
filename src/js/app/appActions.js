import { updateLoginCredentials, logoutAction } from 'views/SignIn/SignInActions';

/* eslint-disable implicit-arrow-linebreak */
export const checkAuthentication = () => (dispatch) =>
  auth.onAuthStateChanged((user) => (user ? dispatch(updateLoginCredentials()) : dispatch(logoutAction())));
