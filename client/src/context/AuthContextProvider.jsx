"use client"
import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [user,setUser] = useState(null);
  return (
    <AuthContext.Provider value={[user,setUser]}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export {AuthContextProvider,useAuth}