import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";






// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAv73I5nBjF7YflLYZHT1X7sEZkZIpIHDM",
    authDomain: "sportbook-d.firebaseapp.com",
    projectId: "sportbook-d",
    storageBucket: "sportbook-d.appspot.com",
    messagingSenderId: "769760287368",
    appId: "1:769760287368:web:3a45012b179ac56cdc1d3d",
    measurementId: "G-3J8PBELKYD"
  };

  const swipeApp = initializeApp(firebaseConfig);
 

  const db = getFirestore(swipeApp);
  

  

  export {db};