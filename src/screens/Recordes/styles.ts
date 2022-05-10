import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.preto
  },
  fundo:{
    flex:1,
    backgroundColor: colors.cinzaEscuro,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",

  },
  view:{
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.azul,
    
    
  },
  list: {
        borderRadius:5,
        width:"90%",
        backgroundColor:colors.amarelo
  }
})

export default styles;