import { connect } from 'react-redux';

import AuthorisedComponent from './AuthorisedComponent';
import { logout } from '../SignIn/SignInActions';

const mapStateToProps = () => ({
  name: 'Jagat',
});

const dispatchActionToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(AuthorisedComponent);
