import React from 'react';
import { Switch, Route } from 'react-router-dom';

import paths from 'configs/paths';
import SignInComponent from '../SignIn/SignInComponent';
import SignUpComponent from '../SignUp/SignUpComponent';
import ForgotPasswordComponent from '../ForgotPassword/ForgotPasswordComponent';

const UnauthorisedComponent = () => (
  <Switch>
    <Route path="/" exact>
      <SignInComponent />
    </Route>
    <Route path={paths.signUpPath}>
      <SignUpComponent />
    </Route>
    <Route path={paths.forgotPasswordPath}>
      <ForgotPasswordComponent />
    </Route>
  </Switch>
);

export default UnauthorisedComponent;
