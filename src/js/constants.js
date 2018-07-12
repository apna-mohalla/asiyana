const baseUrl = window.location.hostname === 'apna-mohalla.github.io' ? '/asiyana/' : '/';
const apiUrl = 'http://localhost:5000/';

export const paths = {
  baseUrl,
  homePath: baseUrl,
  signInPath: `${baseUrl}signIn`,
  signUpPath: `${baseUrl}signUp`,
  forgotPasswordPath: `${baseUrl}forgotPassword`,
};

export const labels = {
  backToLogin: 'Back to login page',
  bannerText: 'Apna Mohalla',
  forgotPassword: 'Forgot Password',
  home: 'Home',
  loginFailure: 'Either username or password is wrong',
  mohallaDweller: 'Already a mohalla dweller',
  newToMohalla: 'New to mohalla',
  retrievePassword: 'Retrieve Password',
  signIn: 'Sign In',
  signOut: 'Sign Out',
  signUp: 'Sign Up',
  someFieldsAreIncorrect: 'Some fields are incorrect. Please correct and try again',
};

export const placeholder = {
  apartmentKey: 'APARTMENT KEY',
  blockName: 'BLOCK NAME',
  confirmPassword: 'CONFIRM PASSWORD',
  email: 'EMAIL ADDRESS',
  flatNumber: 'FLAT NUMBER',
  name: 'NAME',
  password: 'PASSWORD',
  phone: 'PHONE NUMBER',
  telephone: 'PHONE NUMBER',
};

export const apiPath = {
  authenticate: `${apiUrl}authenticate`,
  signUp: `${apiUrl}signUp`,
};
