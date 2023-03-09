import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useNavigation } from "@react-navigation/native";
import { Overlay } from "@rneui/themed";
import React, { useContext, useState } from "react";
import {
  Image, StyleSheet, Text, TextInput, TouchableOpacity, View
} from "react-native";
import { UserContext } from "../../App";
import Button1 from "../../componentes/Button1";
import SucessoOverlay from "../../componentes/SucessoOverlay";
import keys from "../../configs/keys";
import { cores } from "../../estilos";
import LogarStyle from "../../estilos/Views_Estilos/LogarStyle";

export default function Logar(props) {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  const [EsqueceuSenha, setEsqueceuSenha] = useState(false);
  const [EsqueceuSenhaSucesso, setEsqueceuSenhaSucesso] = useState(false);
  const toggleOverlay = () => {
    setEsqueceuSenha(false);
    setEsqueceuSenhaSucesso(false);
  };

  const LogarTest = async () => {

    let resposta = await fetch(`${keys.linkBackEnd}Usuarios/${Usuario}/${Senha}`)
    if (resposta.status === 200) {
      let data = await resposta.json();
      data.senha = Senha;
      setUser(data)
      AsyncStorage.clear()
        .then(() => console.log('Todos os itens foram removidos com sucesso'))
        .catch(error => console.log(error))
      navigation.navigate("PaginaInicial")

    }
    else if (resposta.status === 401) {
      alert('Email ou senha invalidos!')
    }
    else {
      alert(`Houve algum erro!`)
    }
  }
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
              tipoNavegacao="action"
              navegacao="PaginaInicial"
              texto="Logar"
              action={LogarTest}
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
          <TouchableOpacity style={{
            width: "60%", height: 70, elevation: 10,
            backgroundColor: "#0D5692",
            borderRadius: 25,
          }}
            onPress={() => {
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
