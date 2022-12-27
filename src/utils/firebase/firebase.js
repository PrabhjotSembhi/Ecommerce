import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfaZ_C4GQWPqI56gH9ihEntXE-fXUg9FY",
  authDomain: "ecom-db-3782e.firebaseapp.com",
  projectId: "ecom-db-3782e",
  storageBucket: "ecom-db-3782e.appspot.com",
  messagingSenderId: "643552078196",
  appId: "1:643552078196:web:31183bc70580dc5e542421"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)