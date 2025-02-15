import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7KsuBTcO6gC6oa02lA48Njh77LNZFWqQ",
  authDomain: "seed-dashboard-fbe9a.firebaseapp.com",
  projectId: "seed-dashboard-fbe9a",
  storageBucket: "seed-dashboard-fbe9a.firebasestorage.app",
  messagingSenderId: "714770519609",
  appId: "1:714770519609:web:fbf0da6f7210c759fa5fe8",
  measurementId: "G-T9MNMZXSC2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);



export { app, auth ,analytics};





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC7KsuBTcO6gC6oa02lA48Njh77LNZFWqQ",
//   authDomain: "seed-dashboard-fbe9a.firebaseapp.com",
//   projectId: "seed-dashboard-fbe9a",
//   storageBucket: "seed-dashboard-fbe9a.firebasestorage.app",
//   messagingSenderId: "714770519609",
//   appId: "1:714770519609:web:fbf0da6f7210c759fa5fe8",
//   measurementId: "G-T9MNMZXSC2"
// };

// Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);