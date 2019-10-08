import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import paths from 'configs/paths';
import SignInComponent from '../SignIn/SignInComponent';
import SignUpComponent from '../SignUp/SignUpComponent';
import ForgotPasswordComponent from '../ForgotPassword/ForgotPasswordComponent';

const UnauthorisedComponent = () => (
  <Router>
    <Route path={paths.signInPath} exact component={SignInComponent} />
    <Route path={paths.signUpPath} component={SignUpComponent} />
    <Route path={paths.forgotPasswordPath} component={ForgotPasswordComponent} />
  </Router>
);

export default UnauthorisedComponent;
