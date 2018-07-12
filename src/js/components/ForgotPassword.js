import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AuthenticationHeader from './AuthenticationHeader';
import { labels, placeholder, paths } from '../constants';

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      phone: '',
    };
  }

  render() {
    return (
      <article className="authentication-container">
        <AuthenticationHeader />
        <section className="authentication-form-container">
          <form className="authentication-form form">
            <h1 className="title">
              {labels.forgotPassword}
            </h1>
            <TextField
              className="input-field"
              fullWidth
              id="email"
              label={placeholder.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
              type="text"
              value={this.state.email}
            />
            <TextField
              className="input-field"
              error={this.state.isPhoneInValid}
              fullWidth
              id="phone"
              label={placeholder.telephone}
              onChange={e => this.setState({ phone: e.target.value, isPhoneInValid: false })}
              pattern="[(0-9){10}]"
              required
              type="number"
              value={this.state.phone}
            />
            <Button type="submit" color="primary" variant="contained" className="topSpacer">{labels.retrievePassword}</Button>
          </form>
          <label className="small-font">
            {labels.backToLogin}
          </label>
          <Link to={paths.signInPath}>
            {labels.signIn}
          </Link>
        </section>
      </article>
    );
  }
}

export default ForgotPassword;
