import {StyleSheet} from "react-native"
import colors from "../../styles/colors"


const styles = StyleSheet.create({
    branco:{
        backgroundColor: colors.branco,
        borderRadius:5,
        margin:10,
        padding:15
    },
    verde:{
        backgroundColor: colors.verde,
        borderRadius:5,
        padding:8,
        margin:10,
    },
    vermelho:{
        backgroundColor: colors.vermelho,
        borderRadius:5,
        padding:8,
        margin:10
    },
    text: {
        color: colors.brancoEscuro,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 18
      }
})

export default styles