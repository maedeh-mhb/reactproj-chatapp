import "firebase/auth" ;
import firebase from 'firebase/app'; 


export const auth = firebase.initializeApp({
     apiKey: "AIzaSyDQTnNQ3hHGF5tXp1SWOYFopiiOxSjiPks",
     authDomain: "chatapp-b6a7e.firebaseapp.com",
     projectId: "chatapp-b6a7e",
     storageBucket: "chatapp-b6a7e.appspot.com",
     messagingSenderId: "190873470591",
     appId: "1:190873470591:web:dc64afcbf623c59c8ae14a"
     
}).auth();