import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AuthenticationHeader from './AuthenticationHeader';
import Dashboard from './Dashboard';
import { labels, placeholder, paths } from '../constants';
import { authenticateUser } from '../actions/signIn';

function mapStateToProps(state) {
  return {
    signIn: state.signIn,
  };
}

function dispatchActionToProps(dispatch) {
  return {
    authenticateUser: bindActionCreators(authenticateUser, dispatch),
  };
}

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      password: '',
    };
    this.signInButtonClicked = this.signInButtonClicked.bind(this);
  }

  signInButtonClicked(e) {
    e.stopPropagation();
    this.props.authenticateUser(this.state);
  }

  render() {
    const { isLoggedIn, message } = this.props.signIn;
    if (isLoggedIn) {
      return (
        <Dashboard />
      );
    }
    return (
      <article className="authentication-container">
        <AuthenticationHeader />
        <section className="authentication-form-container">
          <form className="authentication-form form" onSubmit={e => this.signInButtonClicked(e)}>
            <h1 className="title">{labels.signIn}</h1>
            <div className="error">{message}</div>
            <TextField
              type="email"
              id="email"
              required
              fullWidth
              label={placeholder.email}
              className="input-field"
              value={this.state.userid}
              onChange={e => this.setState({ userid: e.target.value })}
            />
            <TextField
              type="password"
              id="password"
              required
              fullWidth
              label={placeholder.password}
              className="input-field"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Button type="submit" color="primary" variant="contained" className="topSpacer">{labels.signIn}</Button>
          </form>
          <Link to={paths.forgotPasswordPath}>{labels.forgotPassword}</Link>
          <label className="small-font">{labels.newToMohalla}</label>
          <Link to={paths.signUpPath}>
            {labels.signUp}
          </Link>
        </section>
      </article>
    );
  }
}

SignIn.propTypes = {
  authenticateUser: PropTypes.object,
  signIn: PropTypes.object,
};

export default connect(mapStateToProps, dispatchActionToProps)(SignIn);
