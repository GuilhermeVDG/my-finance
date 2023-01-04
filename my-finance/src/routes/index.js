import React, { useContext } from "react";
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { AuthContext } from "../contexts/auth";

export default function Routes () {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if(loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='#131313'/>
      </View>
    )
  }
  
  return(
    isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})
