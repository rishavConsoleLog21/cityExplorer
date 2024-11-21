// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3fOXh7qJmxjqKtNGYB9XGmv0oybth-yg',
  authDomain: 'react-native-projects-9aa6c.firebaseapp.com',
  projectId: 'react-native-projects-9aa6c',
  storageBucket: 'react-native-projects-9aa6c.firebasestorage.app',
  messagingSenderId: '655927600971',
  appId: '1:655927600971:web:7313fbf2d39e5b116daace',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
