import firebase from 'firebase'
// import "firebase/storage"

const config={
    apiKey: "AIzaSyAfnP9Ye98KPaElM2blDxuMb-JKKurkQG4",
    authDomain: "vishnushnmugam.firebaseapp.com",
    databaseURL: "https://vishnushnmugam-default-rtdb.firebaseio.com",
    projectId: "vishnushnmugam",
    storageBucket: "vishnushnmugam.appspot.com",
    messagingSenderId: "716812538354",
    appId: "1:716812538354:web:8700b3ca41205457b1db6b"
} 

firebase.initializeApp(config)
// const storage = firebase.storage();
export default firebase;