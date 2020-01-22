import firebase from 'firebase/app';
import firebaseConfig from '../apiKeys.json';
import 'firebase/auth';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.firebaseConfig);
  }
};

const getUid = () => firebase.auth().currentUser.uid;

export default { getUid, firebaseApp };
