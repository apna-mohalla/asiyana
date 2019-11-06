import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import paths from 'configs/paths';
import { labels, placeholder } from 'configs/translations';
import AuthenticationHeader from '../Unauthorised/AuthenticationHeader';

const SignUpComponent = (props) => {
  const { signUp } = props;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneInValid, setPhoneValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isPasswordMismatch, setisPasswordMismatch] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [apartmentKey, setApartmentKey] = useState('');
  const [blockName, setBlockName] = useState('');
  const [flatNumber, setFlatNumber] = useState('');

  const resetForm = () => {
    setName('');
    setPhone('');
    setPhoneValid(false);
    setEmail('');
    setisPasswordMismatch(false);
    setPassword('');
    setConfirmPassword('');
    setApartmentKey('');
    setBlockName('');
    setFlatNumber('');
  };

  const register = (e) => {
    e.preventDefault();
    if (password.toString() !== confirmPassword.toString()) {
      setisPasswordMismatch(true);
      return;
    }
    if (phone.length < 10) {
      setPhoneValid(true);
      return;
    }
    signUp(email, password, name, phone, blockName, flatNumber);
    resetForm();
  };

  return (
    <article className="authentication-container">
      <AuthenticationHeader />
      <section className="authentication-form-container">
        <form className="authentication-form form" onSubmit={register}>
          <h1 className="title">{labels.signUp}</h1>
          <TextField
            className="input-field"
            fullWidth
            id="name"
            label={placeholder.name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            value={name}
          />
          <TextField
            className="input-field"
            error={isPhoneInValid}
            fullWidth
            id="phone"
            label={placeholder.phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[(0-9){10}]"
            required
            type="number"
            value={phone}
          />
          <TextField
            className="input-field"
            fullWidth
            id="email"
            label={placeholder.email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            value={email}
          />
          <TextField
            className="input-field"
            error={isPasswordMismatch}
            fullWidth
            id="password"
            label={placeholder.password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
          <TextField
            className="input-field"
            error={isPasswordMismatch}
            fullWidth
            id="confirmPassword"
            label={placeholder.confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            type="password"
            value={confirmPassword}
          />
          <TextField
            className="input-field"
            fullWidth
            id="apartmentKey"
            label={placeholder.apartmentKey}
            onChange={(e) => setApartmentKey(e.target.value)}
            required
            type="text"
            value={apartmentKey}
          />
          <TextField
            className="input-field"
            fullWidth
            id="blockName"
            label={placeholder.blockName}
            onChange={(e) => setBlockName(e.target.value)}
            required
            type="text"
            value={blockName}
          />
          <TextField
            className="input-field"
            fullWidth
            id="flatNumber"
            label={placeholder.flatNumber}
            onChange={(e) => setFlatNumber(e.target.value)}
            required
            type="text"
            value={flatNumber}
          />
          <Button
            type="reset"
            color="secondary"
            variant="contained"
            className="top-spacer right-spacer"
            onClick={resetForm}
          >
            {labels.reset}
          </Button>
          <Button type="submit" color="primary" variant="contained" className="top-spacer">
            {labels.signUp}
          </Button>
        </form>
        <label className="small-font" htmlFor="randomLabel">
          {labels.mohallaDweller}
        </label>
        <Link to={paths.signInPath}>{labels.signIn}</Link>
      </section>
    </article>
  );
};

SignUpComponent.propTypes = {
  signUp: PropTypes.func,
};

export default SignUpComponent;
