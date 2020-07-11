// import FirebaseClient, { mapResponseWithFirebaseIds } from './firebaseClient';
import firebaseClient from '../clients/firebase';

// const getAll = () => FirebaseClient
//   .get('/programmingLanguages.json')
//   .then(mapResponseWithFirebaseIds);

const getAll = () => firebaseClient.database().ref('programmingLanguages');

export default {
  getAll,
};
