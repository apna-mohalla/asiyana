import React from 'react';
import { Switch, Route } from 'react-router-dom';

import paths from 'configs/paths';
import ForgotPasswordComponent from '../ForgotPassword/ForgotPasswordComponent';
import SignInContainer from '../SignIn/SignInContainer';
import SignUpContainer from '../SignUp/SignUpContainer';

const UnauthorisedComponent = () => (
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
);

export default UnauthorisedComponent;
