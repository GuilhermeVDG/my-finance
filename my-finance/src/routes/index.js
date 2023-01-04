import React, { useContext } from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { AuthContext } from "../contexts/auth";

export default function Routes () {
  const { isAuthenticated } = useContext(AuthContext);
  
  return(
    isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  );
}