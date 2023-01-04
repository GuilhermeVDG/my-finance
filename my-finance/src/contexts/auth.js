import React, { createContext, useState } from "react";
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext();

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(null);

  const signUp = async (name, email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async value => {
        const uid = value.user.uid;
        await firebase.database().ref('users').child(uid).set({
          amount: 0,
          name: name
        })
          .then(() => {
            const data = {
              uid: uid,
              name: name,
              email: value.user.email
            }
            setUser(data)
          });
      })
  }

  const signIn = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async value => {
        const uid = value.user.uid;
        await firebase.database().ref('users').child(uid).once('value')
          .then(snapshot => {
            const data = {
              uid: uid,
              name: snapshot.val().name,
              email: value.user.email
            };
            setUser(data);
          })
      })
      .catch(err => console.log(err));
  }
  
  return(
    <AuthContext.Provider value={{ isAuthenticated: !!user, signUp, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}