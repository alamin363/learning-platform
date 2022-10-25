import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../component/Firebase/Firebase.config';
const auth = getAuth(app)
 export const authContext = createContext();
const Context = ({children}) => {
 
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  const loginWithEmailPass = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email , password);
  }

  const sineinWithEmailPass = (email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)
  }

  const sineOut = () =>{
   return signOut(auth)
  }
 
  useEffect(()=>{
    const unsubscrib = onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        setLoader(false)
       return  setUser()
      }
      setUser("user is Signed out")
    }) 
    return () =>{
      unsubscrib()
    }
  },[])

  // get user login
  const users = auth.currentUser;

  
  const contextInfo = {loginWithEmailPass, sineinWithEmailPass, sineOut, user, loader}
  return (
      <authContext.Provider value={contextInfo}>
        {children}
      </authContext.Provider>
  );
};

export default Context;