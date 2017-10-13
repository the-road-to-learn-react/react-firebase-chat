import * as firebase from 'firebase';

const config = {
  apiKey: 'apiKey',
  authDomain: 'projectId.firebaseapp.com',
  databaseURL: 'https://databaseName.firebaseio.com',
  storageBucket: 'bucket.appspot.com'
};

firebase.initializeApp(config);

const database = firebase.database();

export {
  database,
};