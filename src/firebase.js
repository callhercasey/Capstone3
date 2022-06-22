// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh0RciCcBRxbIC4xgFI13pq81ws64prQ0",
  authDomain: "weather-app-24210.firebaseapp.com",
  projectId: "weather-app-24210",
  storageBucket: "weather-app-24210.appspot.com",
  messagingSenderId: "333874136916",
  appId: "1:333874136916:web:9ba76599d3f960e5bceac1",
  measurementId: "G-030ZMRCZHG"
}; 

// Initialize Firebase Authentication and get a reference to the service



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);


