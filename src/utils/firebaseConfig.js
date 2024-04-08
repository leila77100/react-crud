import firebase from 'firebase'; 


const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

    // paramètres utiles au CRUD=> variable disponible dans les paramètre généraux de firebase lors de la créationn de l'appli dessus 

    databaseURL: "https://react-video-auth-XXXXXXXXXXX-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-video-auth-XXXXXXXXXXX",
    storageBucket: "react-video-auth-XXXXXXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "XXXXXXXXXXXXXXXXXXXXXX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;
