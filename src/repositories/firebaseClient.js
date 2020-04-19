import axios from 'axios';

export function mapFirebaseIds (collection) {
  return Object
    .keys(collection)
    .map((key)=> ({
      ...collection[key],
      id: key,
    }));
}

export function mapResponseWithFirebaseIds (response) {
  return mapFirebaseIds(response.data);
}

const FirebaseClient = axios.create({
  baseURL: 'https://quickstart-1552009802740.firebaseio.com',
});

export default FirebaseClient;
