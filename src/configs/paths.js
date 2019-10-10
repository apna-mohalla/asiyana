const baseUrl = window.location.hostname.includes('localhost') ? '/' : '/asiyana/';

const paths = {
  baseUrl,
  signInPath: baseUrl,
  signUpPath: `/signUp`,
  forgotPasswordPath: `/forgotPassword`,
};

export default paths;
