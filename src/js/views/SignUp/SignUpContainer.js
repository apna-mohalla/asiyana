import { connect } from 'react-redux';

import SignUpComponent from './SignUpComponent';
import { signUp } from './SignUpActions';

const mapStateToProps = (state) => ({
  signup: state.signup,
});

const dispatchActionToProps = (dispatch) => ({
  signUp: (email, password) => dispatch(signUp({ email, password })),
});

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(SignUpComponent);
