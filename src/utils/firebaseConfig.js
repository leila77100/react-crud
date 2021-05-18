import firebase from 'firebase'; 


const firebaseConfig = {
    apiKey: "AIzaSyAZkqj-cesxrAy9uPXZYvFk5OY6U1FwCN8",
    authDomain: "react-video-auth-639f2.firebaseapp.com",

    // paramètres utiles au CRUD=> variable disponible dans les paramètre généraux de firebase lors de la créationn de l'appli dessus 

    databaseURL: "https://react-video-auth-639f2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-video-auth-639f2",
    storageBucket: "react-video-auth-639f2.appspot.com",
    messagingSenderId: "636448339185",
    appId: "1:636448339185:web:d62dd6954405af22846550",
    measurementId: "G-NRVMVV6NYC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;