import * as actionTypes from './actionTypes';

const initialState = {
  signinError: undefined,
  signupError: undefined,
  user: undefined,
  isLoggedIn: false,
};

const reduceFunctions = {
  [actionTypes.SIGNIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      user: action.firebaseData.user,
      isLoggedIn: true,
    };
  },

  [actionTypes.SET_AUTH_STATE]: (state, action) => {
    return {
      ...state,
      user: action.user,
      isLoggedIn: !!action.user,
    };
  },

  [actionTypes.SIGNIN_ERROR]: (state, signinError) => {
    return {
      ...state,
      signinError,
      user: undefined,
      isLoggedIn: false,
    };
  },

  [actionTypes.SIGN_OUT]: () => {
    return { ...initialState };
  },

  [actionTypes.SIGNUP_ERROR]: (state, signgupError) => {
    return {
      ...state,
      signgupError,
    };
  },
};

const reducer = (state = initialState, action) => {
  const reduceFn = reduceFunctions[action.type];
  return reduceFn ? reduceFn(state, action) : state;
};

export default reducer;
