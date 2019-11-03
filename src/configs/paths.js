const baseUrl = window.location.hostname.includes('localhost') ? '/' : '/asiyana/';

const paths = {
  baseUrl,
  signInPath: baseUrl,
  signUpPath: `${baseUrl}signUp`,
  forgotPasswordPath: `${baseUrl}forgotPassword`,
  services: `${baseUrl}services`,
};

export default paths;
