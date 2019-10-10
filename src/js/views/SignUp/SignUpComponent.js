import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

import paths from 'configs/paths';

import { labels, placeholder } from 'configs/translations';
import AuthenticationHeader from '../Unauthorised/AuthenticationHeader';

const SignUpComponent = () => {
  const [message] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [isPhoneInValid, setPhoneValid] = useState(false);
  const [email, setEmail] = useState();
  const [isPasswordMismatch, setisPasswordMismatch] = useState(false);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [apartmentKey, setApartmentKey] = useState();
  const [blockName, setBlockName] = useState();
  const [flatNumber, setFlatNumber] = useState();

  const messageClass = '';
  //   const messageClass = props.signUp.message === '' ? '' : 'notification';

  const register = (e) => {
    e.preventDefault();
    setisPasswordMismatch(password === confirmPassword);
    setPhoneValid(isPhoneInValid.length !== 10);
  };

  return (
    <article className="authentication-container">
      <AuthenticationHeader />
      <section className="authentication-form-container">
        <form className="authentication-form form" onSubmit={register}>
          <h1 className="title">{labels.signUp}</h1>
          <div className="error">{message}</div>
          <Paper elevation={1} className={messageClass}>
            {/* <Typography component="p">{props.signUp.message}</Typography> */}
          </Paper>
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
          <Button type="submit" color="primary" variant="contained" className="topSpacer">
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

export default SignUpComponent;
