import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return(
      <AppDrawer.Navigator initialRouteName="Home" drawerStyle={{
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
      </AppDrawer.Navigator>
  );
}

