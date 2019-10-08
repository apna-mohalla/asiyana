import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { labels, paths, placeholder } from '../constants';
import AuthenticationHeader from './AuthenticationHeader';

import { postSignUpData, resetSignUpData } from '../actions/signUp';

function mapStateToProps(state) {
  return {
    signUp: state.signUp,
  };
}

function dispatchActionToProps(dispatch) {
  return {
    postSignUpData: bindActionCreators(postSignUpData, dispatch),
    resetSignUpData: bindActionCreators(resetSignUpData, dispatch),
  };
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      apartmentKey: '',
      blockName: '',
      confirmPassword: '',
      email: '',
      flatNumber: '',
      isPasswordMismatch: false,
      isPhoneInValid: false,
      message: '',
      name: '',
      password: '',
      phone: '',
    };
    this.register = this.register.bind(this);
  }

  componentDidMount() {
    this.props.resetSignUpData();
  }

  register(e) {
    e.stopPropagation();
    const { password, confirmPassword, phone } = this.state;
    if (phone.length < 10) {
      this.setState({ isPhoneInValid: true, message: labels.someFieldsAreIncorrect });
    }
    if (password !== confirmPassword) {
      this.setState({ isPasswordMismatch: true, message: labels.someFieldsAreIncorrect });
    }
    if (password === confirmPassword && phone.length >= 10) {
      this.setState({ isPhoneInValid: false, isPasswordMismatch: false, message: '' });
      this.props.postSignUpData(this.state);
    }
  }

  render() {
    const messageClass = this.props.signUp.message === '' ? '' : 'notification';
    return (
      <article className="authentication-container">
        <AuthenticationHeader />
        <section className="authentication-form-container">
          <form className="authentication-form form" onSubmit={(e) => this.register(e)}>
            <h1 className="title">{labels.signUp}</h1>
            <div className="error">{this.state.message}</div>
            <Paper elevation={1} className={messageClass}>
              <Typography component="p">{this.props.signUp.message}</Typography>
            </Paper>
            <TextField
              className="input-field"
              fullWidth
              id="name"
              label={placeholder.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
              type="text"
              value={this.state.name}
            />
            <TextField
              className="input-field"
              error={this.state.isPhoneInValid}
              fullWidth
              id="phone"
              label={placeholder.phone}
              onChange={(e) => this.setState({ phone: e.target.value, isPhoneInValid: false })}
              pattern="[(0-9){10}]"
              required
              type="number"
              value={this.state.phone}
            />
            <TextField
              className="input-field"
              fullWidth
              id="email"
              label={placeholder.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              required
              type="email"
              value={this.state.email}
            />
            <TextField
              className="input-field"
              error={this.state.isPasswordMismatch}
              fullWidth
              id="password"
              label={placeholder.password}
              onChange={(e) => this.setState({ password: e.target.value, isPasswordMismatch: false })}
              required
              type="password"
              value={this.state.password}
            />
            <TextField
              className="input-field"
              error={this.state.isPasswordMismatch}
              fullWidth
              id="confirmPassword"
              label={placeholder.confirmPassword}
              onChange={(e) => this.setState({ confirmPassword: e.target.value, isPasswordMismatch: false })}
              required
              type="password"
              value={this.state.confirmPassword}
            />
            <TextField
              className="input-field"
              fullWidth
              id="apartmentKey"
              label={placeholder.apartmentKey}
              onChange={(e) => this.setState({ apartmentKey: e.target.value })}
              required
              type="text"
              value={this.state.apartmentKey}
            />
            <TextField
              className="input-field"
              fullWidth
              id="blockName"
              label={placeholder.blockName}
              onChange={(e) => this.setState({ blockName: e.target.value })}
              required
              type="text"
              value={this.state.blockName}
            />
            <TextField
              className="input-field"
              fullWidth
              id="flatNumber"
              label={placeholder.flatNumber}
              onChange={(e) => this.setState({ flatNumber: e.target.value })}
              required
              type="text"
              value={this.state.flatNumber}
            />
            <Button type="submit" color="primary" variant="contained" className="topSpacer">
              {labels.signUp}
            </Button>
          </form>
          <label className="small-font" htmlFor="dummy-label">
            {labels.mohallaDweller}
          </label>
          <Link to={paths.signInPath}>{labels.signIn}</Link>
        </section>
      </article>
    );
  }
}

Register.propTypes = {
  signUp: PropTypes.object,
  postSignUpData: PropTypes.object,
  resetSignUpData: PropTypes.object,
};

export default connect(
  mapStateToProps,
  dispatchActionToProps,
)(Register);
