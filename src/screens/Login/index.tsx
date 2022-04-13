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
<<<<<<< HEAD
    <View>
      <KeyboardAvoidingView>
        <Text>Login</Text>
        <View>
          <MaterialIcons name="email" size={24} color="black" />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Entypo name="key" size={24} color="black" />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <Button title="Login" type="azul" onPress={handleSignIn} />
        <Button title="Cadastre-se" type="azul" onPress={handleSignIn} />
      </KeyboardAvoidingView>
=======
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
          <View style={styles.formRow}>
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
>>>>>>> f0f1c1c65b76f452fb3c4cfc8f56f94ebab36b94
    </View>
  );
}