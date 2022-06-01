import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList
} from "react-native";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";
import Times from "../../components/Tempos"
import data from "../../services/data_antigo";



export default function Recordes({ navigation }: LoginTypes) {
  const renderItem = ({ item }: any) => <Times data={item} type="branco"/>;
  return (
        <SafeAreaView style={styles.container}>
        <View style={styles.fundo}>
            <View style={styles.view}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
                style={styles.list}
              />
            </View>
      </View>
    </SafeAreaView>
  );
}