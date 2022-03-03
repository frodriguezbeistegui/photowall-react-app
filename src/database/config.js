import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAZMkfs-ADao9XdFghZD8SHcr-GeCUAU8w",
  authDomain: "photowall-42c85.firebaseapp.com",
  databaseURL: "https://photowall-42c85-default-rtdb.firebaseio.com",
  projectId: "photowall-42c85",
  storageBucket: "photowall-42c85.appspot.com",
  messagingSenderId: "943008321159",
  appId: "1:943008321159:web:7613e63a1e96233061f222"
};


// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database()

export {database}