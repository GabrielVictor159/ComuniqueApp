import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import Button1 from "../../componentes/Button1";
import { Link } from "@react-navigation/native";
import LogarStyle from "../../estilos/Views_Estilos/LogarStyle";
import { cores } from "../../estilos";
import { Overlay } from "@rneui/themed";
import { useState } from "react";
import { useEffect } from "react";
import SucessoOverlay from "../../componentes/SucessoOverlay";

// Pagina para logarmos os usuarios
export default function Logar(props) {
  //    atributos que serão armazenados do input

  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  const [EsqueceuSenha, setEsqueceuSenha] = useState(false);
  const [EsqueceuSenhaSucesso, setEsqueceuSenhaSucesso] = useState(false);
  const toggleOverlay = () => {
    setEsqueceuSenha(false);
    setEsqueceuSenhaSucesso(false);
  };

  return (
    <>
      <View style={styles.LogarStyle.body}>
        <TouchableOpacity
          style={styles.LogarStyle.buttonBack}
          onPress={() => props.navigation.goBack()}
        >
          <Image source={require("../../assets/IconBack.png")} />
        </TouchableOpacity>
        <Image
          style={styles.LogarStyle.ImageBack}
          source={require("../../assets/Autism-bro.png")}
        />
        <View style={styles.LogarStyle.ViewMiddle}>
          <View style={styles.LogarStyle.InputContainer1}>
            <Image
              style={styles.LogarStyle.InputIcons}
              source={require("../../assets/user.png")}
            />
            <TextInput
              style={styles.LogarStyle.Input}
              keyboardType={"email-address"}
              placeholder={"E-mail"}
              onChangeText={(Usuario) => {
                setUsuario(Usuario);
              }}
            />
          </View>
          <View style={styles.LogarStyle.InputContainer2}>
            <Image
              style={styles.LogarStyle.InputIcons}
              source={require("../../assets/padlock.png")}
            />
            <TextInput
              style={styles.LogarStyle.Input}
              placeholder={"Senha"}
              secureTextEntry={true}
              onChangeText={(Senha) => {
                setSenha(Senha);
              }}
            />
          </View>
          <View style={styles.LogarStyle.ViewBottons}>
            <Button1
              width={220}
              height={55}
              borderRadius={20}
              fontSize={20}
              tipoNavegacao="reset"
              navegacao="PaginaInicial"
              texto="Logar"
              color1={cores.buttonGradientColor1}
              color2={cores.buttonGradientColor2}
            />
            <TouchableOpacity
              onPress={() => {
                setEsqueceuSenha(true);
              }}
            >
              <Text style={styles.LogarStyle.Link1}>{"Esqueceu a senha?"}</Text>
            </TouchableOpacity>

            <Link style={styles.LogarStyle.Link2} to={{ screen: "Cadastrar" }}>
              Cadastrar-se
            </Link>
          </View>
        </View>

        <Overlay
          fullScreen={false}
          onBackdropPress={toggleOverlay}
          isVisible={EsqueceuSenha}
          overlayStyle={[
            styles.overlayStyle,
            {
              alignItems: "center",
            },
          ]}
        >
          <Text>{"\n\n"}</Text>
          <View style={{ height: "35%", width: "90%" }}>
            <Text style={{ fontSize: 19 }}>{"Redefinir senha "}</Text>
            <Text>
              {
                "Insira o e-mail associado à sua conta e enviaremos uma nova senha provisória para seu E-mail "
              }
            </Text>
          </View>
          <View style={{ height: 50 }}>
            <Image
              style={{ top: "35%" }}
              source={require("../../assets/user.png")}
            />
            <TextInput
              style={styles.LogarStyle.Input}
              keyboardType={"email-address"}
              placeholder={"E-mail"}
              onChangeText={(Usuario) => {
                setUsuario(Usuario);
              }}
            />
          </View>
          <Text>{"\n\n"}</Text>
          <TouchableOpacity style={{ width: "60%", height: 70, elevation: 10,
                backgroundColor: "#0D5692",
                borderRadius: 25, }}
          onPress={()=>{
            setEsqueceuSenha(false)
            setEsqueceuSenhaSucesso(true)
          }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                {"Redefinir"}
              </Text>
            </View>
          </TouchableOpacity>
        </Overlay>
        <SucessoOverlay
          overlayStyle={styles.overlaySucessoStyle}
          isVisible={EsqueceuSenhaSucesso}
          onBackdropPress={toggleOverlay}
          titulo={"Verifique seu E-mail"}
          texto={"enviamos uma nova senha provisória para seu E-mail "}
          buttonWidth={"60%"}
          buttonHeight={70}
          buttonColor={"#0D5692"}
          buttonText={'voltar'}
          buttonAction={toggleOverlay}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  LogarStyle,
  overlayStyle: {
    width: "100%",
    height: "50%",
    position: "absolute",
    top: "50%",
  },
  overlaySucessoStyle: {
    width: "100%",
    height: "60%",
    position: "absolute",
    top: "40%",
  },
});
