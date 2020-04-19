import FirebaseClient, { mapResponseWithFirebaseIds } from './firebaseClient';

const getAll = () => FirebaseClient
  .get('/programmingLanguages.json')
  .then(mapResponseWithFirebaseIds);

export default {
  getAll,
};
