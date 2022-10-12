import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import swipeConfig from "../configs/swipeConfig";
import RadialGradient from 'react-native-radial-gradient';
import BackgroundColor2 from '../assets/BackgroundColor2';
import { cores, geral } from "../estilos";
import ImagePerfil from "../componentes/ImagePerfil";
import Lupa from "../assets/Lupa";
import Comunicacoes from "../componentes/Comunicacoes";
export default class Comunicacao extends React.Component{
    constructor(props){
        super(props);
        this.state={
            busca:''
        }
    }
    render(){
        return(
            
            <GestureRecognizer
            onSwipeRight={(state)=>this.props.navigation.navigate('PaginaUsuario')}
            onSwipeLeft={(state)=>this.props.navigation.navigate('School')}
                config={swipeConfig}
            style={{width:'100%', height:'100%', flex:1, justifyContent:'center', flexDirection:'column', overflow:'visible'}}
            >
                <View style={{position:'absolute', width:'100%', height:'100%'}}>
                <BackgroundColor2  />   
                </View>
            
            <View style={[styles.menuSuperior, geral.shadow]}>
            <Text style={styles.menuText}>Mensagens</Text>
            <TextInput style={[styles.menuInput, geral.shadow]}
            placeholder={'procurar contatos'}
            onChangeText={
                busca => {this.setState({busca})}
            }
            />
            <View style={styles.lupaContainer}>
                    <Lupa width={30} height={30}/>
            </View> 
            <View style={styles.imagePerfilContainer}>
            <ImagePerfil shadow='true' width={50} height={50} shadowTop={10} shadowColor='#5C5C5C' shadowOpacity={0.2}  fontSize={15} 
                imageUrl={require('../assets/PerfilImage.jpg')}
                />
                </View>   
            </View>
            <View style={styles.mensagensContainer}>
            <Comunicacoes width='90%' height={100} backgroundColor='white' imageUrl={require('../assets/PerfilImage.jpg')} 
            nomeUsuario='Acredito' mensagem='Ola!' online={true} horario='16:30'/>
            </View>
            </GestureRecognizer>
       
        );
    }
}

const styles= StyleSheet.create({
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
    mensagensContainer:{
        width:'100%',
        top:220,
        height:800,
        flexDirection:'column',
        alignItems:'center'
    }
})

