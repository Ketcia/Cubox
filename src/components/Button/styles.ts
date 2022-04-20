import {StyleSheet} from "react-native"
import colors from "../../styles/colors"


const styles = StyleSheet.create({
    buttonCinza:{
        backgroundColor: colors.cinza,
        borderRadius:5,
        margin:10,
    },
    buttonVerde:{
        backgroundColor: colors.verde,
        borderRadius:5,
        padding:8,
        margin:10,
    },
    buttonVermelho:{
        backgroundColor: colors.vermelho,
        borderRadius:5,
        padding:8,
        margin:10
    },
    buttonAzul:{
        backgroundColor: colors.azul,
        borderRadius:5,
        margin:10,
 
    },
    buttonAmarelo:{
        backgroundColor: colors.amarelo,
        borderRadius:5,
        padding:8,
        margin:10
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 18
      }
})

export default styles