import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAQC6xttHmbW3FBcdedAFJLHRCkX9qNJb0',
  // authDomain: 'quickstart-1552009802740.firebaseapp.com',
  databaseURL: 'https://quickstart-1552009802740.firebaseio.com',
  projectId: 'quickstart-1552009802740',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
