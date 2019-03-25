import firebase from 'firebase/app';
import 'firebase/firebase-firestore'

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: '',
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
};

firebase.initializeApp(config);

export const db = firebase.firestore();