import axios from 'axios';

const FirebaseClient = axios.create({
  baseURL: 'https://quickstart-1552009802740.firebaseio.com',
});

export default FirebaseClient;
