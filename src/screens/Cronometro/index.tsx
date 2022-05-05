import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";


export default function Cronometro({ navigation }: LoginTypes) {

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.fundo}>

            <View style={styles.view}>
                <Text style={styles.title}>
                    123456789ABCDEFGHIJK
                </Text>
            </View>
            <View style={styles.view}> 
                <Text style={styles.title}>00:00.00</Text>
            </View>
            <Button title="Start" type="verde"/>
      </View>
    </SafeAreaView>
  );
}