import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyB71GB8m3Y5qeN-SgccC5wmqoUkPIoYh7w",
  authDomain: "thaibus-17099.firebaseapp.com",
  databaseURL: "https://thaibus-17099.firebaseio.com",
  projectId: "thaibus-17099",
  storageBucket: "thaibus-17099.appspot.com",
  messagingSenderId: "529353672514"
};
firebase.initializeApp(config);
let fire = firebase.database();
export default fire;
