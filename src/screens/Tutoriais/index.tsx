import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";


export default function Tutoriais({ navigation }: LoginTypes) {

  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
        <View style={styles.fundo}>
            <View style={styles.view}>
                <Text style={styles.title}>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed metus gravida, fringilla eros et, porta dui. Duis blandit id diam in consectetur. Nunc in tristique arcu, a accumsan nulla. Aliquam commodo tempus massa nec malesuada. Vivamus pellentesque leo lacus, ac consectetur lacus finibus et.
                </Text>
                <Image source={require("../../assets/fotoficticia.png")}/>
            </View>
            <View style={styles.view}>
                <Text style={styles.title}>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed metus gravida, fringilla eros et, porta dui. Duis blandit id diam in consectetur. Nunc in tristique arcu, a accumsan nulla. Aliquam commodo tempus massa nec malesuada. Vivamus pellentesque leo lacus, ac consectetur lacus finibus et. 
                </Text>
                <Image source={require("../../assets/fotoficticia.png")} />
            </View>
            <View style={styles.view}>
                <Text style={styles.title}>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed metus gravida, fringilla eros et, porta dui. Duis blandit id diam in consectetur. Nunc in tristique arcu, a accumsan nulla. Aliquam commodo tempus massa nec malesuada. Vivamus pellentesque leo lacus, ac consectetur lacus finibus et. 
                </Text>
                <Image source={require("../../assets/fotoficticia.png")} />
            </View>
            <View style={styles.view}>
                <Text style={styles.title}>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed metus gravida, fringilla eros et, porta dui. Duis blandit id diam in consectetur. Nunc in tristique arcu, a accumsan nulla. Aliquam commodo tempus massa nec malesuada. Vivamus pellentesque leo lacus, ac consectetur lacus finibus et. 
                </Text>
                <Image source={require("../../assets/fotoficticia.png")} />
            </View>
      </View>
    </SafeAreaView>
    </ScrollView>
    
  );
}