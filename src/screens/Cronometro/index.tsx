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
        <View style={styles.header}>
            <Text>CRONOMETRO</Text>
        </View>
        <View style={styles.fundo}>
            <View style={styles.movimento}>
                <Text style={styles.fonte}>
                    C O M A N D O S A L E A T O R I O S
                </Text>
            </View>
            <View style={styles.cronometro}>
                <Text style={styles.fonte}>00:00.00</Text>
            </View>
            <Button title="Start" type="verde" onPress={handleSignIn} />
        </View>
        

    </View>
  );
}