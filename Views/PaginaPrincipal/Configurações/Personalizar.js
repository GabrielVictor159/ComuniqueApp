import React from "react";
import { View, Text, Image } from "react-native";
import ImagePerfil from "../../../componentes/ImagePerfil";
import PersonalizarOption from "../../../componentes/PersonalizarOption";
import { TouchableOpacity } from "react-native";
import PersonalizarIcons from "../../../assets/PersonalizarIcons";
import InputsOverlay from "../../../componentes/InputsOverlay";
import { useState } from "react";
import { StyleSheet } from "react-native";
import SucessoOverlay from "../../../componentes/SucessoOverlay";
export default function Personalizar(props) {
  const [alterarSenha, setAlterarSenha] = useState(false);
  const [alterarEmail, setAlterarEmail] = useState(false);
  const [alterarNome, setAlterarNome] = useState(false);
  const [alterarEmailInputAntigo, setAlterarEmailInputAntigo] = useState('');
  const [alterarEmailInputNovo, setAlterarEmailInputNovo] = useState('');
  const [alterarEmailSucesso, setAlterarEmailSucesso] = useState(false)
  const toggleOverlay = () => {
   setAlterarSenha(false);
   setAlterarEmail(false)
   setAlterarNome(false)
   setAlterarEmailSucesso(false)
  };

  
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        overflow: "visible",
      }}
    >
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#E3E3E3",
        }}
      ></View>
      <View
        style={[
          
          {
            width: "100%",
            height: 250,
            backgroundColor: "white",
            top: 0,
            position: "absolute",
            alignItems: "center",
          }
        ]}
      >
        <Image
          style={{
            width: "100%",
            height: "105%",
            position: "absolute",
            opacity: 0.7,
          }}
          source={props.usuario.usuario.perfil.imageBanner}
        />
        <View style={{ top: "80%" }}>
          <ImagePerfil
            shadow="true"
            width={120}
            height={120}
            imageUrl={props.usuario.usuario.perfil.imagePerfil}
          />
        </View>
      </View>
      <View style={{ position: "absolute", top: 280, left: "85%" }}>
        <TouchableOpacity>
          <PersonalizarIcons icon="Pencil" width={29} height={29} />
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", alignItems: "center", top: "20%" }}>
        <PersonalizarOption
          borderRadius={15}
          width="85%"
          height={50}
          color1="#FCFCFC"
          color2="#FCFCFC"
          fontSize={20}
          texto="Alterar Nome"
          icon="Pencil"
        />
        <Text>{"\n"}</Text>
        <PersonalizarOption
          borderRadius={15}
          width="85%"
          height={50}
          color1="#FCFCFC"
          color2="#FCFCFC"
          fontSize={20}
          texto="Alterar Senha "
          icon="Padlock"
        />
        <Text>{"\n"}</Text>
        <PersonalizarOption
          borderRadius={15}
          width="85%"
          height={50}
          color1="#FCFCFC"
          color2="#FCFCFC"
          fontSize={20}
          texto="Alterar E-mail  "
          icon="Email"
          action={setAlterarEmail}
        />
        <Text>{"\n"}</Text>
        <PersonalizarOption
          borderRadius={15}
          width="85%"
          height={50}
          color1="#FCFCFC"
          color2="#FCFCFC"
          fontSize={20}
          texto="Sair"
          icon="Logout"
          textColor="#BE0B16"
        />
      </View>
      <InputsOverlay 
      isVisible={alterarEmail}
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overlayStyles}
      titulo={'Alterar Email'}
      tituloStyle={styles.overlayTitulo}
      iconInput1={require("../../../assets/user.png")}
      InputStyle1={styles.overlayInput}
      KeyboardType1={'email-address'}
      Placeholder1={'Digite seu email antigo'}
      onChangeText1={setAlterarEmailInputAntigo}
      iconInput2={require("../../../assets/user.png")}
      InputStyle2={styles.overlayInput}
      KeyboardType2={'email-address'}
      Placeholder2={'Digite seu Novo email'}
      onChangeText2={setAlterarEmailInputNovo}
      buttonWidth={"60%"}
      buttonHeight={70}
      buttonColor={"#0D5692"}
      buttonText={'Alterar'}
      buttonAction={props.usuario.AlterarEmail}
      actionParam1={alterarEmailInputAntigo}
      actionParam2={alterarEmailInputNovo}
      overlaySucesso={setAlterarEmailSucesso}
      />
      <SucessoOverlay
          overlayStyle={styles.overlaySucessoStyle}
          isVisible={alterarEmailSucesso}
          onBackdropPress={toggleOverlay}
          titulo={"Seu E-mail foi alterado!"}
          texto={"Agora utilize esse novo email para acessar! "}
          buttonWidth={"60%"}
          buttonHeight={70}
          buttonColor={"#0D5692"}
          buttonText={'voltar'}
          buttonAction={toggleOverlay}
        />
        <InputsOverlay 
      isVisible={alterarSenha}
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overlayStyles}
      titulo={'Alterar Senha'}
      tituloStyle={styles.overlayTitulo}
      iconInput1={require("../../../assets/padlock.png")}
      InputStyle1={styles.overlayInput}
      KeyboardType1={'default'}
      Placeholder1={'Digite seu email antigo'}
      onChangeText1={setAlterarEmailInputAntigo}
      iconInput2={require("../../../assets/padlock.png")}
      InputStyle2={styles.overlayInput}
      KeyboardType2={'email-address'}
      Placeholder2={'Digite seu Novo email'}
      onChangeText2={setAlterarEmailInputNovo}
      buttonWidth={"60%"}
      buttonHeight={70}
      buttonColor={"#0D5692"}
      buttonText={'Alterar'}
      buttonAction={props.usuario.AlterarEmail}
      actionParam1={alterarEmailInputAntigo}
      actionParam2={alterarEmailInputNovo}
      overlaySucesso={setAlterarEmailSucesso}
      />
      <SucessoOverlay
          overlayStyle={styles.overlaySucessoStyle}
          isVisible={alterarEmailSucesso}
          onBackdropPress={toggleOverlay}
          titulo={"Seu E-mail foi alterado!"}
          texto={"Agora utilize esse novo email para acessar! "}
          buttonWidth={"60%"}
          buttonHeight={70}
          buttonColor={"#0D5692"}
          buttonText={'voltar'}
          buttonAction={toggleOverlay}
        />
    </View>
    
  );
}


const styles = StyleSheet.create({
  overlayStyles:{
    width: "100%",
    height: "50%",
    position: "absolute",
    top: "50%",
  },
  overlayTitulo:{
    fontSize:18
  },
  overlayInput:{
    width:300,
    height:40,
    textAlign:'center',
    borderWidth:1,
    borderRadius:30,

  },
  overlaySucessoStyle: {
    width: "100%",
    height: "60%",
    position: "absolute",
    top: "40%",
  },
})
