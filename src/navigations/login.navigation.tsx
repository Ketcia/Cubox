import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, CadastrarScreen, CronometroScreen } from "../screens";
import { LoginStackParamList } from "../types/screen.type";

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginNavigation() {
  return (
    <Stack.Navigator screenOptions ={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
      <Stack.Screen name="Cronometro" component={CronometroScreen} />
    </Stack.Navigator>
  );
}