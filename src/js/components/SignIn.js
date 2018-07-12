import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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
      emailAddress: '',
      password: '',
    };
    this.signInButtonClicked = this.signInButtonClicked.bind(this);
  }

  signInButtonClicked() {
    /* eslint react/destructuring-assignment: 0 */
    this.props.authenticateUser(this.state);
  }

  render() {
    const { signIn } = this.props;
    if (signIn.authenticate) {
      return (
        <Dashboard />
      );
    }
    return (
      <article className="authentication-container">
        <AuthenticationHeader />
        <section className="authentication-form-container">
          <div className="authentication-form form">
            <h1 className="title">
              {labels.signIn}
            </h1>
            <input type="email" placeholder={placeholder.email} required onChange={e => this.setState({ emailAddress: e.target.value })} />
            <input type="password" placeholder={placeholder.password} required onChange={e => this.setState({ password: e.target.value })} />
            <input type="button" value={labels.signIn} className="button primary" onClick={this.signInButtonClicked} />
          </div>
          <Link to={paths.forgotPasswordPath}>
            {labels.forgotPassword}
          </Link>
          <label className="small-font">
            {labels.newToMohalla}
          </label>
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
