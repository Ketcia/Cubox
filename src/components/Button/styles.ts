import {StyleSheet} from "react-native"
import DropShadow from "react-native-drop-shadow"
import colors from "../../styles/colors"


const styles = StyleSheet.create({
    buttonCinza:{
        backgroundColor: colors.cinza,
        borderRadius:5,
        padding:8,
        margin:10,

        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
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
        padding:8,
        margin:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
            

        
    },
    buttonAmarelo:{
        backgroundColor: colors.amarelo,
        borderRadius:5,
        padding:8,
        margin:10
    },
    text:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        padding:10,
        fontSize:18
    }
})

export default styles