import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return(
      <AppDrawer.Navigator drawerStyle={{
        backgroundColor: '#171717'
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: 'bold',
        },
        activeTintColor: '#fff',
        inactiveBackgroundColor: '#000000',
        activeBackgroundColor: '#008037',
        inactiveTintColor: '#ddd',
        itemStyle: {
          marginVertical: 6
        }
      }}>
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Novo Registro" component={New}/>
        <AppDrawer.Screen name="Perfil" component={Profile}/>
      </AppDrawer.Navigator>
  );
}

