import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFtQATvvlQMFqdRb59OYnbZ7FbpA5-1kI",
    authDomain: "drunkart-eb4a3.firebaseapp.com",
    projectId: "drunkart-eb4a3",
    storageBucket: "drunkart-eb4a3.appspot.com",
    messagingSenderId: "863169079160",
    appId: "1:863169079160:web:26d80f281825b71d310a8d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth };