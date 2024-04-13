
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfAHSFcp9GBuOeM10BUAvpQBZfNwLTQkU",
  authDomain: "bookexchange-dbde9.firebaseapp.com",
  projectId: "bookexchange-dbde9",
  storageBucket: "bookexchange-dbde9.appspot.com",
  messagingSenderId: "137057276154",
  appId: "1:137057276154:web:94d6a52805d27a22503943"
  
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth , app} ;