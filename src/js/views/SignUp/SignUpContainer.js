import { connect } from 'react-redux';

import SignUpComponent from './SignUpComponent';
import { signUp } from './SignUpActions';

const mapStateToProps = (state) => ({
  signup: state.signup,
});

/* eslint-disable implicit-arrow-linebreak */
const dispatchActionToProps = (dispatch) => ({
  signUp: (email, password, name, phone, blockName, flatNumber) =>
    dispatch(signUp({ email, password, displayName: name, blockName, flatNumber, phone })),
});

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(SignUpComponent);
