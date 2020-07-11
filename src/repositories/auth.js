import firebaseClient from '../clients/firebase';

export const signUp = ({ email, password }) => firebaseClient.auth().createUserWithEmailAndPassword(email, password);
export const signIn = ({ email, password }) => firebaseClient.auth().signInWithEmailAndPassword(email, password);
export const signOut = () => firebaseClient.auth().signOut();
export const fetchAuthState = () => new Promise((resolve) =>firebaseClient.auth().onAuthStateChanged(resolve));

const AuthRepository = {
  signUp,
  signIn,
  signOut,
  fetchAuthState,
};

export default AuthRepository;
