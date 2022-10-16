import React from "react";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import swipeConfig from "../configs/swipeConfig";
import RadialGradient from 'react-native-radial-gradient';
import BackgroundColor2 from '../assets/BackgroundColor2';
import { cores, geral } from "../estilos";
import ImagePerfil from "../componentes/ImagePerfil";
import Lupa from "../assets/Lupa";
import Comunicacoes from "../componentes/Comunicacoes";
import ComunicacaoStyle from "../estilos/Views_Estilos/ComunicacaoStyle";

export default class Comunicacao extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            busca:'',
            mensagens:[
                { id:1, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Gabriel', mensagem:'acredito', online:false, horario:'14:30'},
                { id:2, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Victor', mensagem:'acredito', online:true, horario:'17:30'},
                { id:3, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Pereira', mensagem:'acredito', online:false, horario:'16:30'},
                { id:4, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Borges', mensagem:'acredito', online:true, horario:'12:30'},
                { id:5, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Borges', mensagem:'acredito', online:true, horario:'12:30'},
                { id:6, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Borges', mensagem:'acredito', online:true, horario:'12:30'},
                { id:7, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Borges', mensagem:'acredito', online:true, horario:'12:30'},
                { id:8, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Borges', mensagem:'acredito', online:true, horario:'12:30'},
                { id:9, imageUrl:'../assets/PerfilImage.jpg', nomeUsuario:'Borges', mensagem:'acredito', online:true, horario:'12:30'},
            ]
        }
    }
    mapReturn(callback){
        return callback.map(value =>{
            return(
                <View style={{width:'100%', alignItems:'center'}} key={value.id}>
            <Comunicacoes  width='90%' height={100} backgroundColor='white' tipoUsuario='Professor' imageUrl={require('../assets/PerfilImage.jpg')} 
            nomeUsuario={value.nomeUsuario} mensagem={value.mensagem} online={value.online} horario={value.horario}/>
            <Text>{'\n'}</Text>
            </View>
            
            );
        })
    }
    render(){
        return(
            
            <GestureRecognizer
            onSwipeRight={(state)=>this.props.navigation.navigate('PaginaUsuario')}
            onSwipeLeft={(state)=>this.props.navigation.navigate('Personalizar')}
                config={swipeConfig}
            style={{width:'100%', height:'100%', flex:1, justifyContent:'center', flexDirection:'column', overflow:'visible'}}
            >
                <View style={{position:'absolute', width:'100%', height:'100%'}}>
                <BackgroundColor2  />   
                </View>
            
            
            <View style={styles.ComunicacaoStyle.mensagensContainer}>
                
            <ScrollView contentContainerStyle={styles.ComunicacaoStyle.mensagensScrool}>
            {this.mapReturn(this.state.mensagens)}
            </ScrollView>
            </View>
            <View style={[styles.ComunicacaoStyle.menuSuperior, geral.shadow]}>
            <Text style={styles.ComunicacaoStyle.menuText}>Mensagens</Text>
            <TextInput style={[styles.ComunicacaoStyle.menuInput, geral.shadow]}
            placeholder={'procurar contatos'}
            onChangeText={
                busca => {this.setState({busca})}
            }
            />
            <View style={styles.ComunicacaoStyle.lupaContainer}>
                    <Lupa width={30} height={30}/>
            </View> 
            <View style={styles.ComunicacaoStyle.imagePerfilContainer}>
            <ImagePerfil shadow='true' width={50} height={50} shadowTop={10} shadowColor='#5C5C5C' shadowOpacity={0.2}  fontSize={15} 
                imageUrl={require('../assets/PerfilImage.jpg')}
                />
                </View>   
            </View>
            </GestureRecognizer>
       
        );
    }
}

const styles= StyleSheet.create({
    ComunicacaoStyle
})

