import React from "react";
import { View,  Text, Image , StyleSheet } from "react-native";
import {cores} from "../estilos";
import Mensagem2Style from "../estilos/Views_Estilos/Mensagem2Style";
import NavigationMensagens from "../componentes/NavigationMensagens";
function Mensagem1({navigation}){
    return(
        <View style={styles.Mensagem2Style.body}>
                <Image style={styles.Mensagem2Style.ImageCenter} source={require("../assets/Component8.png")}/>
                <Text style={styles.Mensagem2Style.Title}>Tudo muito simples</Text>
                <View style={styles.Mensagem2Style.TextContainer}>
                <Text style={styles.Mensagem2Style.Mensagem}>Nesse app comunicação será feita através de imagens e figuras, para que tudo seja bem mais amigável</Text>
                </View>
                <NavigationMensagens screenNumber={2}  navigationButton1='Login' button1Text='PULAR' buttonColor1={cores.buttonGradientColor1} 
                buttonColor2={cores.buttonGradientColor2} navigationButton2='Login' button2Text='PRÓXIMO' 
                />
        </View>
    );
}
const styles = StyleSheet.create({
  Mensagem2Style,
});

export default Mensagem1;