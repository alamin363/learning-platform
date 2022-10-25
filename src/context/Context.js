import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../component/Firebase/Firebase.config';
const auth = getAuth(app)
 export const authContext = createContext();
const Context = ({children}) => {
 
  const loginWithEmailPass = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email , password);
  }

  const sineinWithEmailPass = (email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)
  }

  const contextInfo = {loginWithEmailPass, sineinWithEmailPass}
  return (
      <authContext.Provider value={contextInfo}>
        {children}
      </authContext.Provider>
  );
};

export default Context;