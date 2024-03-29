import { StyleSheet } from "react-native";
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
    

  },
  view:{
    width: "100%",
    height:"20%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    width:"80%"
  }

})

export default styles;