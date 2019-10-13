import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { labels, placeholder } from 'configs/translations';
import paths from 'configs/paths';

import AuthenticationHeader from '../Unauthorised/AuthenticationHeader';

const SignInComponent = (props) => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const signInButtonClicked = (e) => {
    e.preventDefault();
    props.login(userid, password);
  };

  return (
    <article className="authentication-container">
      <AuthenticationHeader />
      <section className="authentication-form-container">
        <form className="authentication-form form" onSubmit={(e) => signInButtonClicked(e)}>
          <h1 className="title">{labels.signIn}</h1>
          <div className="error">{props.message}</div>
          <TextField
            type="email"
            id="email"
            required
            fullWidth
            label={placeholder.email}
            className="input-field"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
          <TextField
            type="password"
            id="password"
            required
            fullWidth
            label={placeholder.password}
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" variant="contained" className="topSpacer">
            {labels.signIn}
          </Button>
        </form>
        <Link to={paths.forgotPasswordPath}>{labels.forgotPassword}</Link>
        <label className="small-font" htmlFor="dummy-label">
          {labels.newToMohalla}
        </label>
        <Link to={paths.signUpPath}>{labels.signUp}</Link>
      </section>
    </article>
  );
};

SignInComponent.propTypes = {
  message: PropTypes.string,
  login: PropTypes.func,
};

export default SignInComponent;
