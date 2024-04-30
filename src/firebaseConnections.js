import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//    apiKey: "AIzaSyBky1TcEDKtbW141e-MnBsVWY0MC-o2i2o",
//    authDomain: "cashing-2b7a1.firebaseapp.com",
//    projectId: "cashing-2b7a1",
//    storageBucket: "cashing-2b7a1.appspot.com",
//    messagingSenderId: "393646298882",
//    appId: "1:393646298882:web:f41dbde393954cd19b541b",
//    measurementId: "G-PLS242LHPQ"
//  };

 const firebaseConfig = {
   apiKey: "AIzaSyBs6m8pXOcUHiYYxIgH1yIki1p4rZXcTDo",
   authDomain: "react-f5610.firebaseapp.com",
   projectId: "react-f5610",
   storageBucket: "react-f5610.appspot.com",
   messagingSenderId: "417367622433",
   appId: "1:417367622433:web:394a61b2707b21b95bb460",
   measurementId: "G-WTWYZ7XLKV"
 };

 const firebaseApp = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
 export { db };