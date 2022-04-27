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
    marginTop:10
  },
  header:{
    width: "100%",
    backgroundColor: colors.cinza,
    padding: 5,
  },
  movimento:{
    height:"30%",
    alignItems: "center",
    justifyContent: "center"
  },
  cronometro:{
    height:"30%",
    alignItems: "center",
    justifyContent: "center"
  },
  fonte:{
    color: "#FFF",
    fontSize:30,
    textAlign:"center",
    margin: 15
    
  }

})

export default styles;