import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAFOCg3ZHYoTdDy2ZedmcmCH5XPCtYKo50",
  authDomain: "brooklyn-ball-co.firebaseapp.com",
  databaseURL: "https://brooklyn-ball-co.firebaseio.com",
  projectId: "brooklyn-ball-co",
  storageBucket: "brooklyn-ball-co.appspot.com",
  messagingSenderId: "321024553209"
};
const fire = firebase.initializeApp(config);
export default fire;
