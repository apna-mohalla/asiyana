import { connect } from 'react-redux';
import { logout } from 'views/SignIn/SignInActions';
import { updateNotification } from 'js/app/appActions';
import AppViewComponent from './AppViewComponent';

const mapStateToProps = (state) => ({
  isLoggedIn: state.app.isLoggedIn,
  snackBar: state.app.snackBar,
});

const dispatchActionToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  updateNotification: (message = '', messageType = '') => dispatch(updateNotification(message, messageType)),
});

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(AppViewComponent);
