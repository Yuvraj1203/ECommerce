"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [user,setUser] = useState(null);

  useEffect(()=>{
    let userData  = localStorage.getItem("user");
    if(userData) {
      userData = JSON.parse(userData);
      setUser(userData);
    }
  },[setUser])
  return (
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;