import React from "react";
import { View, Text } from "react-native";
import { TimesProps } from "../../interfaces/Times.interface";
import styles from "./styles"

export default function Times({data}: TimesProps) {
  return (
   <View style={data.type=="branco" 
   ? styles.branco
   : data.type == 'verde' 
   ? styles.verde
   : data.type == 'vermelho' 
   ? styles.vermelho
   : data.type == 'amarelo' 
  }>
      <Text>{data.time}</Text>
   </View>
  );
}