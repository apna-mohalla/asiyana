import { connect } from 'react-redux';
import { checkAuthentication } from 'js/app/appActions';
import { updateNotification } from 'js/app/notificationActions';
import AppViewComponent from './AppViewComponent';

const mapStateToProps = (state) => ({
  isLoggedIn: state.app.isLoggedIn,
  snackBar: state.app.snackBar,
  authStatus: state.app.authStatus,
});

const dispatchActionToProps = (dispatch) => ({
  updateNotification: (message = '', messageType = '') => dispatch(updateNotification(message, messageType)),
  checkAuthentication: () => dispatch(checkAuthentication()),
});

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(AppViewComponent);
