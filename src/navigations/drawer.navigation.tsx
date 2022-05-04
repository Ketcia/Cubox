import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {CronometroScreen} from "../screens"

const Drawer = createDrawerNavigator();

 export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Cronometro" component={CronometroScreen}/>
    </Drawer.Navigator>
  );
}