
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLak2TivbX6db55nut1v9XYxJwwIiomas",
  authDomain: "food-app-react-with-firebase.firebaseapp.com",
  projectId: "food-app-react-with-firebase",
  storageBucket: "food-app-react-with-firebase.appspot.com",
  messagingSenderId: "338114646104",
  appId: "1:338114646104:web:a3e0f5cb245a65576a7a2d",
  measurementId: "G-LYYETXDS31"

};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);