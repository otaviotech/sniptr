import axios from 'axios';

const FirebaseIdentityClient = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
});

FirebaseIdentityClient.defaults.params = {};
FirebaseIdentityClient.defaults.params.key = 'AIzaSyAQC6xttHmbW3FBcdedAFJLHRCkX9qNJb0';

FirebaseIdentityClient.interceptors.request.use((request) => {
  request.url = request.url.concat(`?API_KEY=${FirebaseIdentityClient.defaults.params.key}`);
  return request;
}, Promise.reject);

export default FirebaseIdentityClient;
