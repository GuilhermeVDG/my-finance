import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_JaOcU2j-W6BFZQzyEXL79h-Fv5Eqy_4",
  authDomain: "my-finance-b5e1a.firebaseapp.com",
  databaseURL: "https://my-finance-b5e1a-default-rtdb.firebaseio.com",
  projectId: "my-finance-b5e1a",
  storageBucket: "my-finance-b5e1a.appspot.com",
  messagingSenderId: "1043546517430",
  appId: "1:1043546517430:web:e0ae5b9ccbf41668181b17",
  measurementId: "G-995MK8K33D"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;