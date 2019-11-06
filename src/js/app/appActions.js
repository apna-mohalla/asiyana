import { logoutAction } from 'views/SignIn/SignInActions';
import actionTypes from 'configs/actionTypes';
import { setPromiseState } from '../utils/setPromise';

const updateAuthenticationStatus = (isPending, isSuccessfull, isFailure) => ({
  type: actionTypes.UPDATE_AUTHENTICATION,
  payload: setPromiseState(isPending, isSuccessfull, isFailure),
});

export const checkAuthentication = () => (dispatch) => {
  dispatch(updateAuthenticationStatus(true, false, false));
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(updateAuthenticationStatus(false, true, false));
    } else {
      dispatch(updateAuthenticationStatus(false, false, true));
      dispatch(logoutAction());
    }
  });
};
