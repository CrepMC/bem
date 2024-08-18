import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB5w70SHcDQ0OJYbdnfJKYnDnU7CQNi7rU',
  authDomain: 'jsi02ownproject.firebaseapp.com',
  projectId: 'jsi02ownproject',
  storageBucket: 'jsi02ownproject.appspot.com',
  messagingSenderId: '72669702006',
  appId: '1:72669702006:web:84ac0c3cc43f589b7bfc57',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
