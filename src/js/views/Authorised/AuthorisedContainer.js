import { connect } from 'react-redux';

import AuthorisedComponent from './AuthorisedComponent';
import { logout } from '../SignIn/SignInActions';

const mapStateToProps = (state) => ({
  name: state.app.user.displayName || '',
  isLoggedIn: state.app.isLoggedIn,
});

const dispatchActionToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(AuthorisedComponent);
