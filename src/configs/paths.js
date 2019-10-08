const baseUrl = window.location.hostname.includes('localhost') ? '/' : 'https://apna-mohalla.github.io/asiyana/';

const paths = {
  baseUrl,
  signInPath: baseUrl,
  signUpPath: `${baseUrl}signUp`,
  forgotPasswordPath: `${baseUrl}forgotPassword`,
};

export default paths;
