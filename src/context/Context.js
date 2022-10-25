import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
 export const authContext = createContext()
const Context = ({children}) => {
  const name = {name: "alamin"}
  
  const contextInfo = {name}
  return (
      <authContext.Provider value={contextInfo}>
        {children}
      </authContext.Provider>
  );
};

export default Context;