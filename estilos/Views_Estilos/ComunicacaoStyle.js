import cores from '../cores';
import geral from '../geral';
const ComunicacaoStyle ={
    container:{
        width:'100%', 
        height:'100%', 
        flex:1, 
        justifyContent:'center', 
        flexDirection:'row', 
        overflow:'visible'
    },
    background:{
        position:'absolute', 
        width:'100%', 
        height:'100%'
    },
    menuSuperior:{
        width:'100%', 
        height:170, 
        position:'absolute',
        top:0,
        left:0, 
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30, 
        backgroundColor:cores.backgroundColor,
    
    },
    menuText:{
        top:'30%',
        left:'7%',
        color:'white',
        fontSize:20
    },
    menuInput:{
        left:'7%',
        top:'45%',
        width:'65%',
        height:'23%',
        backgroundColor:'white',
        borderRadius:15,
        textAlign:'center'
    },
    lupaContainer:{
        position:'absolute',
        left:'9%',
        top:'65%'
    },
    imagePerfilContainer:{
        position:'absolute',
        left:'85%',
        top:'30%'
    },
    mensagensScrool:{
        width:'100%',
        
        alignItems:'center',
        
    },
    mensagensContainer:{
        height:'80%', 
        top:120
    }
}

export default ComunicacaoStyle;