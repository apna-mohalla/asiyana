import { connect } from 'react-redux';
import SignInComponent from './SignInComponent';
import { authenticateUser } from './SignInActions';

const mapStateToProps = (state) => ({
  signInMessage: state.app.message,
});

const dispatchActionToProps = (dispatch) => ({
  login: (userid, password) => dispatch(authenticateUser({ userid, password })),
  updateSignInNotification: (messageType, message) => dispatch(updateSignInNotification({ messageType, message })),
});

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(SignInComponent);
