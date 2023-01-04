import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider ({ children }) {
  const [data, setUser] = useState({
    info: 'test'
  })
  
  return(
    <AuthContext.Provider value={{ data }}>
      {children}
    </AuthContext.Provider>
  );
}