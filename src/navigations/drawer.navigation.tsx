import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {CronometroScreen, TutoriaisScreen, RecordesScreen} from "../screens"
import colors from "../styles/colors";

const Drawer = createDrawerNavigator();

 export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.cinza},
      headerTintColor: colors.white,
      drawerStyle: { backgroundColor: colors.cinza },
      drawerActiveTintColor: colors.white,
      drawerInactiveTintColor: colors.brancoEscuro,
    }}
    >
      <Drawer.Screen name="Tutoriais" component={TutoriaisScreen}/>
      <Drawer.Screen name="Cronometro" component={CronometroScreen}/>
      <Drawer.Screen name="Recordes" component={RecordesScreen}/>
      
    </Drawer.Navigator>
  );
}