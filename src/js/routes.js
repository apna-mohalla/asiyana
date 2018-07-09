import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import { paths } from './constants';


const Routes = () => (
  <Switch>
    <Route exact path={paths.homePath} component={SignIn} />
    <Route path={paths.signInPath} component={SignIn} />
    <Route path={paths.signUpPath} component={SignUp} />
    <Route path={paths.forgotPasswordPath} component={ForgotPassword} />
  </Switch>
);

export default Routes;
