// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:  import.meta.env.VITE_apiKey,
//   authDomain:  import.meta.env.VITE_authDomain,
//   projectId:  import.meta.env.VITE_projectId,
//   storageBucket:  import.meta.env.VITE_storageBucket,
//   messagingSenderId:  import.meta.env.VITE_messagingSenderId,
//   appId:  import.meta.env.VITE_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO3v8Q9xWPtouJwc2Gs2pi0EuR3D3nEw0",
  authDomain: "taskify-dff1e.firebaseapp.com",
  projectId: "taskify-dff1e",
  storageBucket: "taskify-dff1e.appspot.com",
  messagingSenderId: "72048956912",
  appId: "1:72048956912:web:34488ae80672d91caa7935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;