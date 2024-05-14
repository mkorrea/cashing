import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


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
   apiKey: "AIzaSyBxxeQLZrcLBOup_3PFXCJBuQlc7s9AxLA",
   authDomain: "projeto-cashing.firebaseapp.com",
   projectId: "projeto-cashing",
   storageBucket: "projeto-cashing.appspot.com",
   messagingSenderId: "358535484148",
   appId: "1:358535484148:web:bc978dc726905118b444a1",
   measurementId: "G-KGTQC6SLYV"
 };

 const firebaseApp = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
 const auth = getAuth(firebaseApp)
 export { db, auth };