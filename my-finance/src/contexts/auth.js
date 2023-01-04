import React, { createContext, useState } from "react";
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext();

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(null);

  const signUp = async (name, email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async res => {
        const uid = res.user.uid;
        await firebase.database().ref('users').child(uid).set({
          amount: 0,
          name: name
        })
          .then(() => {
            const data = {
              uid: uid,
              name: name,
              email: res.user.email
            }
            setUser(data)
          });
      })
  }
  
  return(
    <AuthContext.Provider value={{ isAuthenticated: !!user, signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
}