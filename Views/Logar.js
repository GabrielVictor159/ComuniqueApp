import React from "react";
import {View, Image, Button, TouchableOpacity,Text, StyleSheet, TextInput} from "react-native";
import Button1 from "../componentes/Button1";
import { Link } from "@react-navigation/native";
export default class Logar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Usuario:'',
            Senha:''
        }
    }
    render(){
        return(
    <View style={styles.body}>
        <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => this.props.navigation.goBack()}
        >
        <Image source={require("../assets/IconBack.png")}
        />
        </TouchableOpacity>
        <Image style={styles.imageBack}
        source={require("../assets/Autism-bro.png")}
        />
        <View style={{backgroundColor:'white', width:'100%', height:'80%' , top:10 ,borderTopRightRadius:50, borderTopLeftRadius:50, justifyContent:'center', alignItems:'center'}}>
        <View style={{top:-120, alignItems:'center'}}>
            
            <Image style={{position:'relative', left:-80, top:22}} source={require("../assets/user.png")}/>
            <TextInput 
            style={{ width:220, textAlign:'center', borderBottomWidth : 1.0, borderColor:'#0D5692'}}
            placeholder={'E-mail'}
            onChangeText={
                Usuario => {this.setState({Usuario})}
            }
            />
        </View>
        <View style={{top:-80, alignItems:'center'}}>
            
            <Image style={{position:'relative', left:-80, top:22}} source={require("../assets/padlock.png")}/>
            <TextInput 
            style={{ width:220, textAlign:'center', borderBottomWidth : 1.0, borderColor:'#0D5692'}}
            placeholder={'Senha'}
            onChangeText={
                Senha => {this.setState({Senha})}
            }
            />
        </View>
        <View style={styles.ViewBottons}>
        <Button1 width={220} height={55} borderRadius={20} navegacao='PaginaUsuario'  texto='Logar'/>
              <Link
              style={styles.Link1}
              to={{screen:'RecuperarSenha'}}
              >
              Esqueceu a senha?
              </Link>
              <Link
              style={styles.Link2}
              to={{screen:'Cadastrar'}}
              >
              Cadastrar-se
              </Link>
              </View>
        </View>
        
            
    </View>
    
        );
    }
}

const styles = StyleSheet.create({
    body:{
        width:"100%",
         height:"100%",
          display:'flex',
           flexDirection:'row',
            justifyContent:'center',
             alignItems:'flex-end',
              backgroundColor:'#277BC0'
    },
    buttonBack:{
        position:'absolute',
         left:20,
          top:50
    },
    imageBack:{
        position:'absolute',
         top:30 ,
          left:'50%'
    },
    ViewBottons:{
        top:70,
        alignItems:'center'
    },
    Link1:{
        color:'#277BC0',
        fontSize:15,
        top:10

    },
    Link2:{
        color:'#277BC0',
        fontSize:20,
        top: 100
    }
});