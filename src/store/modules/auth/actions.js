/* eslint-disable import/no-named-as-default-member */
import * as actionTypes from './actionTypes';
import AuthRepository from '../../../repositories/auth';

export const signinStart = () => ({
  type: actionTypes.SIGNIN_START,
});

export const signinSuccess = (firebaseData) => ({
  type: actionTypes.SIGNIN_SUCCESS,
  firebaseData,
});

export const signinError = (error) => ({
  type: actionTypes.SIGNIN_ERROR,
  error,
});

export const signIn = (credentials) => (dispatch) => {
  dispatch(signinStart());
  return AuthRepository.signIn(credentials)
    .then((data) => dispatch(signinSuccess(data)))
    .catch(error => dispatch(signinError(error)));
};

export const signupStart = () => ({
  type: actionTypes.SIGNUP_START,
});

export const signupSuccess = (data) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  data,
});

export const signupError = (data) => ({
  type: actionTypes.SIGNUP_ERROR,
  data,
});

export const signUp = (credentials) => (dispatch) => {
  dispatch(signupStart());
  return AuthRepository.signUp(credentials)
    .then((data) => dispatch(signupSuccess(data)))
    .catch(error => dispatch(signupError(error)));
};

export const setAuthState = (user) => ({
  type: actionTypes.SET_AUTH_STATE,
  user,
});

export const refreshAuth = () => (dispatch) => {
  AuthRepository.fetchAuthState()
    .then((authState) => {
      dispatch(setAuthState(authState));
    });
};

export const signOut = () => (dispatch) => {
  AuthRepository.signOut()
    .then(() => dispatch(refreshAuth()));
};

