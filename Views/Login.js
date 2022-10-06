import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import {cores} from "../estilos";
import LoginStyle from "../estilos/Views_Estilos/LoginStyle";
import Button1 from "../componentes/Button1";

// Pagina anterior as paginas de login e cadastro
class Login extends React.Component{
  
    render(){
        return(
    <View style={styles.LoginStyle.body}>
        <Image style={styles.LoginStyle.IconTitle}
        source={require("../assets/selfcare(2).png")}
        />
        <Text style={styles.LoginStyle.Title}>
            Comunique
        </Text>
        <View style={styles.LoginStyle.ViewMiddle}>
        <Image style={styles.LoginStyle.ImageCenter}
        source={require("../assets/Autism-rafiki.png")}
        />
        <View style={styles.LoginStyle.ButtonsContainer}>
          <View >
          <Button1 width={220} height={55} borderRadius={20} fontSize={20} tipoNavegacao='navigate'   navegacao='Logar'  texto='Logar' color1={cores.buttonGradientColor1} color2={cores.buttonGradientColor2}/>
          </View>
          <View style={styles.LoginStyle.Button2}>
          <Button1 width={220} height={55} borderRadius={20} fontSize={20} tipoNavegacao='navigate'  navegacao='Cadastrar'  texto='Cadastrar' color1={cores.buttonGradientColor3} color2={cores.buttonGradientColor4}/>
          </View>
        </View>
        </View>
    </View>
    );
    }
}

const styles = StyleSheet.create({
  LoginStyle
  
});
export default Login;