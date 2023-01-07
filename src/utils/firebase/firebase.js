import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfaZ_C4GQWPqI56gH9ihEntXE-fXUg9FY",
  authDomain: "ecom-db-3782e.firebaseapp.com",
  projectId: "ecom-db-3782e",
  storageBucket: "ecom-db-3782e.appspot.com",
  messagingSenderId: "643552078196",
  appId: "1:643552078196:web:31183bc70580dc5e542421",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

const additionalInfo = {}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
 const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  console.log('we are inside')

  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password);
}


export const signinAuthUserWithEmailAndPassword = async (email, password) => {
  console.log('we are inside')

  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () =>  signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth,callback)