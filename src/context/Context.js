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
   return signInWithPopup(auth, googleProvider)
  }
  const loginWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
const loginWithGithub = () =>{
  return signInWithPopup(auth, gitHubProvider)
}
  const sineinWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sineOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLoader(false);
        return setUser();
      }
      setUser("user is Signed out");
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
    loginWithGithub
  };
  return (
    <authContext.Provider value={contextInfo}>{children}</authContext.Provider>
  );
};

export default Context;
