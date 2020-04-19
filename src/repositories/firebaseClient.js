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
  if (!response.data) {
    return [];
  }

  return mapFirebaseIds(response.data);
}

export function mapResponseWithFirebaseId(id) {
  return (response) => {
    if (!response.data){
      return response.data;
    }

    return {
      ...response.data,
      id,
    };
  };
}

const FirebaseClient = axios.create({
  baseURL: 'https://quickstart-1552009802740.firebaseio.com',
});

export default FirebaseClient;
