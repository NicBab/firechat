import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDAq25o4OSM-cBVNPqlv7KFh0C4sgxMc0",

    authDomain: "firechat-3bb95.firebaseapp.com",
  
    projectId: "firechat-3bb95",
  
    storageBucket: "firechat-3bb95.appspot.com",
  
    messagingSenderId: "989397582706",
  
    appId: "1:989397582706:web:4845876e89c56c180613eb",
  
    measurementId: "G-2GWVMQBBTV"
  
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }


