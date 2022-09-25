
import cores from "./cores";
import fontes from "./fontes";
import { StyleSheet } from "react-native";
const geral = {
    container:{
        flex:1,
        backgroundColor: cores.background,
    },
    
    sectionTitle:{
        color: cores.text,
        fontWeight: 'bold',
        fontSize: fontes.regular,
        alignSelf: 'center',
       
    },
    mensagemContainerStyle:{
        width:'100%',
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonGradientStyle:{
        borderRadius:20,
         width:100,
          height:40,
           justifyContent:'center',
            alignItems:'center',
    },
};

export default geral;