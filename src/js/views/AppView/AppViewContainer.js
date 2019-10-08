import { connect } from 'react-redux';
import AppViewComponent from './AppViewComponent';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const dispatchActionToProps = () => ({});

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(AppViewComponent);
