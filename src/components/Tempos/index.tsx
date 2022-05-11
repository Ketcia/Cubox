import React from "react";
import { View, Text } from "react-native";
import { TimesProps } from "../../interfaces/Times.interface";
import styles from "./styles"

export default function Times({data, type}: TimesProps) {
  return (
   <View style={type=="branco" 
   ? styles.branco
   : type == "verde" 
   ? styles.verde
   : type == "vermelho" 
   ? styles.vermelho
   : type == "amarelo"
  }>
      <Text>{data.time}</Text>
   </View>
  );
}