const baseUrl = window.location.hostname.includes('localhost') ? '/build/' : '/asiyana/';

const paths = {
  baseUrl,
  signInPath: baseUrl,
  signUpPath: `/signUp`,
  forgotPasswordPath: `/forgotPassword`,
};

export default paths;
