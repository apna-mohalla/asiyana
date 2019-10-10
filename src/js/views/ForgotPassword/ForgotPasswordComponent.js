import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import paths from 'configs/paths';
import { labels, placeholder } from 'configs/translations';
import AuthenticationHeader from '../Unauthorised/AuthenticationHeader';

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [isPhoneInValid, setisPhoneInValid] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setisPhoneInValid(phone.length !== 10);
  };

  return (
    <article className="authentication-container">
      <AuthenticationHeader />
      <section className="authentication-form-container">
        <form className="authentication-form form" onSubmit={onFormSubmit}>
          <h1 className="title">{labels.forgotPassword}</h1>
          <TextField
            className="input-field"
            fullWidth
            id="email"
            label={placeholder.email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="text"
            value={email}
          />
          <TextField
            className="input-field"
            error={isPhoneInValid}
            fullWidth
            id="phone"
            label={placeholder.telephone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[(0-9){10}]"
            required
            type="number"
            value={phone}
          />
          <Button type="submit" color="primary" variant="contained" className="topSpacer">
            {labels.retrievePassword}
          </Button>
        </form>
        <label className="small-font" htmlFor="some-dummy">
          {labels.backToLogin}
        </label>
        <Link to={paths.signInPath}>{labels.signIn}</Link>
      </section>
    </article>
  );
};

export default ForgotPasswordComponent;
