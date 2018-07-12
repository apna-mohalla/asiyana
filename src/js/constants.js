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
  home: 'Home',
  signIn: 'Sign In',
  signUp: 'Sign Up',
  signOut: 'Sign Out',
  forgotPassword: 'Forgot Password',
  bannerText: 'Apna Mohalla',
  newToMohalla: 'New to mohalla',
  mohallaDweller: 'Already a mohalla dweller',
  retrievePassword: 'Retrieve Password',
  backToLogin: 'Back to login page',
  loginFailure: 'Either username or password is wrong',
};

export const placeholder = {
  email: 'EMAIL ADDRESS',
  password: 'PASSWORD',
  name: 'NAME',
  telephone: 'PHONE NUMBER',
};

export const apiPath = {
  authenticate: `${apiUrl}authenticate`,
};
