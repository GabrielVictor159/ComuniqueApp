import React from "react";
import { View,  Text, Image , StyleSheet } from "react-native";
import {cores} from "../estilos";
import Mensagem1Style from "../estilos/Views_Estilos/Mensagem1Style";
import NavigationMensagens from "../componentes/NavigationMensagens";
function Mensagem1({navigation}){
    return(
        <View style={styles.Mensagem1Style.body}>
                <Image style={styles.Mensagem1Style.ImageCenter} source={require("../assets/selfcare.png")}/>
                <Text style={styles.Mensagem1Style.Title}>Comunique</Text>
                <View style={styles.Mensagem1Style.TextContainer}>
                <Text style={styles.Mensagem1Style.Mensagem}>Um app de comunicação para ajudar alunos com autismo a se comunicarem com amigos e professores</Text>
                </View>
                <NavigationMensagens screenNumber={1}  navigationButton1='Login' button1Text='PULAR' buttonColor1={cores.buttonGradientColor1} 
                buttonColor2={cores.buttonGradientColor2} navigationButton2='Mensagem2' button2Text='PRÓXIMO' 
                />
        </View>
    );
}
const styles = StyleSheet.create({
  Mensagem1Style,
});

export default Mensagem1;