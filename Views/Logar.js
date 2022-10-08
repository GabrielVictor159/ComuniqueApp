import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput} from "react-native";
import Button1 from "../componentes/Button1";
import { Link } from "@react-navigation/native";
import LogarStyle from "../estilos/Views_Estilos/LogarStyle";
import { cores } from "../estilos";

// Pagina para logarmos os usuarios
export default class Logar extends React.Component{
    constructor(props){
        super(props);
        this.state={
        //    atributos que serão armazenados do input 
            Usuario:'',
            Senha:''
        }
    }
    render(){
        return(
    <View style={styles.LogarStyle.body}
    
    >
        <TouchableOpacity
        style={styles.LogarStyle.buttonBack}
        onPress={() => this.props.navigation.goBack()}
        >
        <Image source={require("../assets/IconBack.png")}
        />
        </TouchableOpacity>
        <Image style={styles.LogarStyle.ImageBack}
        source={require("../assets/Autism-bro.png")}
        />
        <View style={styles.LogarStyle.ViewMiddle}>
        <View style={styles.LogarStyle.InputContainer1}>
            
            <Image style={styles.LogarStyle.InputIcons} source={require("../assets/user.png")}/>
            <TextInput 
            style={styles.LogarStyle.Input}
            keyboardType={"email-address"}
            placeholder={'E-mail'}
            onChangeText={
                Usuario => {this.setState({Usuario})}
            }
            />
        </View>
        <View style={styles.LogarStyle.InputContainer2}>
            
            <Image style={styles.LogarStyle.InputIcons} source={require("../assets/padlock.png")}/>
            <TextInput 
            style={styles.LogarStyle.Input}
            placeholder={'Senha'}
            secureTextEntry={true}
            onChangeText={
                Senha => {this.setState({Senha})}
            }
            />
        </View>
        <View style={styles.LogarStyle.ViewBottons}>
        <Button1 width={220} height={55} borderRadius={20} fontSize={20} tipoNavegacao='reset' navegacao='PaginaInicial'  texto='Logar' color1={cores.buttonGradientColor1} color2={cores.buttonGradientColor2}/>
              <Link
              style={styles.LogarStyle.Link1}
              to={{screen:'RecuperarSenha'}}
              >
              Esqueceu a senha?
              </Link>
              <Link
              style={styles.LogarStyle.Link2}
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
  LogarStyle
});