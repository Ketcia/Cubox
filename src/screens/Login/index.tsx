import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";


export default function Login({ navigation }: LoginTypes) {
  async function handleSignIn() {
    console.log("Login");
  }
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <View style={styles.container}>

        <KeyboardAvoidingView>
          <Text style={styles.title}>Login</Text>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={[styles.formRow,styles.shadowProp]}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Button title="Login" type="cinza" onPress={handleSignIn} />
          <Button title="Cadastre-se" type="cinza" onPress={handleCadastrar} />
        </KeyboardAvoidingView>

    </View>
  );
}