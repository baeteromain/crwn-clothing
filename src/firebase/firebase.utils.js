import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDK04GSMyeLopRkpsV_9Tr0j8rVJrO2CBM',
  authDomain: 'crwn-db-92225.firebaseapp.com',
  databaseURL: 'https://crwn-db-92225.firebaseio.com',
  projectId: 'crwn-db-92225',
  storageBucket: 'crwn-db-92225.appspot.com',
  messagingSenderId: '137916750139',
  appId: '1:137916750139:web:bdd4e1f38d5b08f4baff1e',
  measurementId: 'G-00DJWG68JE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
