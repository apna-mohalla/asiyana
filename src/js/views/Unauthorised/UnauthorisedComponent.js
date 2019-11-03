import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import paths from 'configs/paths';
import ForgotPasswordComponent from '../ForgotPassword/ForgotPasswordComponent';
import SignInContainer from '../SignIn/SignInContainer';
import SignUpContainer from '../SignUp/SignUpContainer';

const UnauthorisedComponent = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <SignInContainer />
      </Route>
      <Route path={paths.signUpPath}>
        <SignUpContainer />
      </Route>
      <Route path={paths.forgotPasswordPath}>
        <ForgotPasswordComponent />
      </Route>
    </Switch>
  </Router>
);

export default UnauthorisedComponent;
