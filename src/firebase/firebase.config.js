// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBJnm7vdOxW9qio3DpF5swxoEReg0t_y9w",
//     authDomain: "code-source-pathshala.firebaseapp.com",
//     projectId: "code-source-pathshala",
//     storageBucket: "code-source-pathshala.appspot.com",
//     messagingSenderId: "589989905633",
//     appId: "1:589989905633:web:226939ba9308fafded23a0"
// };

// ----------env start----------//
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};
// ----------env end----------//

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;