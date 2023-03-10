import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    token: '',
    amount: 0
  });
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  const isAuthenticated = !!user.token;

  useEffect(() => {
    const loadStorage = async () => {
      const storageUser = await AsyncStorage.getItem('@auth');

      if(storageUser) {
        
        const parseUser = JSON.parse(storageUser);

        const { token } = parseUser;

        const { id, name, email, amount } = parseUser.user;

        api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        
        try {
          setUser({
            token,
            user: {
              id,
              name,
              email,
              amount
            }
          });  
        } catch (error) {
          console.log(error);
        }              
      }

      setLoading(false);
    }
    loadStorage();
  });

  const signUp = async (name, email, password) => {
    setAuthLoading(true);
    
    try {
      const response = await api.post('/store', {
        name,
        email,
        password
      });

      await signIn(email, password);
    } catch (error) {
      console.log(error);
      setAuthLoading(false);
    }

  }

  const storeUser = async data => {
    await AsyncStorage.setItem('@auth', JSON.stringify(data));
  }

  const signIn = async (email, password) => {
    setAuthLoading(true);

    try {  
      const response = await api.post('/login', { email, password });    

      const { token } = response.data.body;
      const { id, name, amount } = response.data.body.user;

      const data = { ...response.data.body };

      storeUser(data);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser({
        token,
        user: {
          id,
          name,
          email,
          amount
        }
      });

      setAuthLoading(false);
    } catch (error) {
      console.log(error);
      setAuthLoading(false);
    }
  }

  const signOut = async () => {
    await AsyncStorage.clear()
    .then(() => {
      setUser({
        id: '',
        name: '',
        email: '',
        token: '',
        amount: 0
      })
    })
  }
  
  return(
    <AuthContext.Provider value={{ isAuthenticated , signUp, signIn, signOut, user, loading, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
}