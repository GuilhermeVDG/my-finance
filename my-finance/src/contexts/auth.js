import React, { createContext, useState, useEffect } from "react";
import firebase from '../services/firebaseConnection';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(
    'id',
    'name',
    'email',
    'token'
  );
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const loadStorage = async () => {
      const storageUser = await AsyncStorage.getItem('auth');

      if(storageUser) {
        setUser(JSON.parse(storageUser));
      }

      setLoading(false);
    }
    loadStorage();
  }, []);

  const signUp = async (name, email, password) => {
    setAuthLoading(true);
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
            storeUser(data);
            setAuthLoading(false);
          })
          .catch(err => {
            console.log(err);
            alert('Falha ao cadastrar.');
            setAuthLoading(false);
          });
      })
  }

  const storeUser = async data => {
    await AsyncStorage.setItem('auth', JSON.stringify(data));
  }

  const signIn = async (email, password) => {
    setAuthLoading(true);
    
    try {
      const response = await api.post('/login', { email, password });

      const { id, token } = response.data.body;
      const { name } = response.data.body.user;

      const data = { ...response.data.body };

      storeUser(data);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser(
        id,
        name,
        email,
        token
      )

      setAuthLoading(false);
    } catch (error) {
      console.log(error);
      setAuthLoading(false);
    }
  }

  const signOut = async () => {
    await firebase.auth().signOut();
    const token = await AsyncStorage.getItem('auth');
    console.log(token);
    await AsyncStorage.clear()
      .then(() => setUser(null));
  }
  
  return(
    <AuthContext.Provider value={{ isAuthenticated: !!user, signUp, signIn, signOut, user, loading, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
}