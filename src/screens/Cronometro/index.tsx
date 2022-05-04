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
<<<<<<< HEAD
            <View style={styles.view}>
                <Text>
                    COMANDOS ALEATORIOS
                </Text>
            </View>
            <View style={styles.view}> 
                <Text>00:00.00</Text>
            </View>
            <Button title="Start" type="verde"/>
      </View>
    </SafeAreaView>
    
=======
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
>>>>>>> b98c351580587d31776b2a2e0562d398f49ccb7c
  );
}