const initialState = {
  isLoggedIn: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'signedIn':
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
}
