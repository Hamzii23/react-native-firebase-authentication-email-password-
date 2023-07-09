// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6d20zJUBt_esuqk_sjYnzL9G8R4NGqiw',
  authDomain: 'fir-auth-app-485c8.firebaseapp.com',
  projectId: 'fir-auth-app-485c8',
  storageBucket: 'fir-auth-app-485c8.appspot.com',
  messagingSenderId: '23075354689',
  appId: '1:23075354689:web:e011461aadb76190b2eec0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const FIREBASE_DB = getFirestore(FIREBASE_APP);
