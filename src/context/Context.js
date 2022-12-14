import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import app from "../component/Firebase/Firebase.config";
const auth = getAuth(app);
export const authContext = createContext();
const Context = ({ children }) => {
  
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const SigninWithGoogle =() =>{
    setLoader(true)
   return signInWithPopup(auth, googleProvider)
  }
  const loginWithEmailPass = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

const loginWithGithub = () =>{
  setLoader(true)
  return signInWithPopup(auth, gitHubProvider)
}
  const sineinWithEmailPass = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sineOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
     setLoader(false);
     setUser(currentUser);
    
    });
    return () => {
      unsubscrib();
    };
  }, []);

  const addUserNameAndImg = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // get user login ----- not use
  // const users = auth.currentUser;
  // if (user !== null) {
  //   const displayName = user.displayName;
  // const email = user.email;
  // const photoURL = user.photoURL;
  // const emailVerified = user.emailVerified;
  // const uid = user.uid;
  // }
  const veryficationEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };


  const contextInfo = {
    loginWithEmailPass,
    sineinWithEmailPass,
    sineOut,
    user,
    loader,
    addUserNameAndImg,
    veryficationEmail,
    SigninWithGoogle,
    loginWithGithub,
  };
  return (
    <authContext.Provider value={contextInfo}>{children}</authContext.Provider>
  );
};

export default Context;
