import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";




export default function Personalizar(props) {
  const [alterarSenha, setAlterarSenha] = useState(false);
  const [alterarEmail, setAlterarEmail] = useState(false);
  const [alterarNome, setAlterarNome] = useState(false);
  const [alterarEmailInputAntigo, setAlterarEmailInputAntigo] = useState('');
  const [alterarEmailInputNovo, setAlterarEmailInputNovo] = useState('');
  const [alterarEmailSucesso, setAlterarEmailSucesso] = useState(false);
  const [alterarSenhaInputAntigo, setAlterarSenhaInputAntigo] = useState('');
  const [alterarSenhaInputNovo, setAlterarSenhaInputNovo] = useState('');
  const [alterarSenhaInputConfirma, setAlterarSenhaInputConfirma] = useState('');
  const [alterarSenhaSucesso, setAlterarSenhaSucesso] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [alterarNomeInput, setAlterarNomeInput] = useState('');
  const [alterarNomeSucesso, setAlterarNomeSucesso] = useState('')
  const [alterarImages, setAlterarImage] = useState(false)
  const [pickerImagePerfil, setPickerImagePerfil] = useState(false)
  const [pickerBanner, setPickerBanner] = useState(false)
  const [imageBanner, setImageBanner] = useState(require('../../../assets/BannerSubmit.png'))
  const [imagePerfil, setImagePerfil] = useState(require('../../../assets/BannerSubmit.png'))

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const toggleOverlay = () => {
    setAlterarSenha(false);
    setAlterarEmail(false)
    setAlterarNome(false)
    setAlterarEmailSucesso(false)
    setAlterarSenhaSucesso(false)
    setAlterarNomeSucesso(false)
    setAlterarImage(false)
  };

  function alterarImagensPerfil(banner, perfil) {
    let bannerPadrao = require('../../../assets/BannerSubmit.png')
    let perfilPadrao = require('../../../assets/BannerSubmit.png')
    if (banner !== bannerPadrao) {
      if (perfil !== perfilPadrao) {
        props.usuario.usuario.perfil.imageBanner = banner
        props.usuario.usuario.perfil.imagePerfil = perfil
        return false
      }
      else {
        props.usuario.usuario.perfil.imageBanner = banner
        return false
      }
    }
    else {
      if (perfil !== perfilPadrao) {
        props.usuario.usuario.perfil.imagePerfil = perfil
        return false
      }
      else {
        return false
      }
    }
  }
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
      {/* <View
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
        <TouchableOpacity 
        onPress={()=>
        setAlterarImage(true)
        }
        >
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
          action={setAlterarNome}
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
          action={setAlterarSenha}
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
          reset='Logar'
          navigation={props.navigationReset}
        />
      </View>
      <InputsOverlay 
      isVisible={alterarEmail}
      onBackdropPress={toggleOverlay}
      overlayStyle={[styles.overlayStyles,{height: isKeyboardVisible===false ? '50%' :500, top:isKeyboardVisible===false ? '50%' : 50}]}
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
      overlayStyle={[styles.overlayStyles,{height: isKeyboardVisible===false ? '50%' :500, top:isKeyboardVisible===false ? '50%' : 50}]}
      titulo={'Alterar Senha'}
      tituloStyle={styles.overlayTitulo}
      iconInput1={require("../../../assets/padlock.png")}
      InputStyle1={styles.overlayInput}
      KeyboardType1={'default'}
      Placeholder1={'Digite sua senha antiga'}
      SecureText1={true}
      onChangeText1={setAlterarSenhaInputAntigo}
      iconInput2={require("../../../assets/padlock.png")}
      InputStyle2={styles.overlayInput}
      KeyboardType2={'default'}
      Placeholder2={'Digite sua nova senha'}
      SecureText2={true}
      onChangeText2={setAlterarSenhaInputNovo}
      iconInput3={require("../../../assets/padlock.png")}
      InputStyle3={styles.overlayInput}
      KeyboardType3={'default'}
      Placeholder3={'confirme sua nova senha'}
      SecureText3={true}
      onChangeText3={setAlterarSenhaInputConfirma}
      buttonWidth={"60%"}
      buttonHeight={70}
      buttonColor={"#0D5692"}
      buttonText={'Alterar'}
      buttonAction={props.usuario.AlterarSenha}
      actionParam1={alterarSenhaInputAntigo}
      actionParam2={alterarSenhaInputNovo}
      actionParam3={alterarSenhaInputConfirma}
      overlaySucesso={setAlterarSenhaSucesso}
      />
      <SucessoOverlay
          overlayStyle={styles.overlaySucessoStyle}
          isVisible={alterarSenhaSucesso}
          onBackdropPress={toggleOverlay}
          titulo={"Sua senha foi alterado!"}
          texto={"Agora utilize essa nova senha para acessar!"}
          buttonWidth={"60%"}
          buttonHeight={70}
          buttonColor={"#0D5692"}
          buttonText={'voltar'}
          buttonAction={toggleOverlay}
        />
        <InputsOverlay 
      isVisible={alterarNome}
      onBackdropPress={toggleOverlay}
      overlayStyle={[styles.overlayStyles,{height: isKeyboardVisible===false ? '50%' :500, top:isKeyboardVisible===false ? '50%' : 50}]}
      titulo={'Alterar nome'}
      tituloStyle={styles.overlayTitulo}
      iconInput1={require("../../../assets/user.png")}
      InputStyle1={styles.overlayInput}
      KeyboardType1={'default'}
      Placeholder1={'Digite seu novo nome'}
      onChangeText1={setAlterarNomeInput}
      buttonWidth={"60%"}
      buttonHeight={70}
      buttonColor={"#0D5692"}
      buttonText={'Alterar'}
      buttonAction={props.usuario.AlterarNome}
      actionParam1={alterarNomeInput}
      overlaySucesso={setAlterarNomeSucesso}
      />
      <SucessoOverlay
          overlayStyle={styles.overlaySucessoStyle}
          isVisible={alterarNomeSucesso}
          onBackdropPress={toggleOverlay}
          titulo={"Seu nome foi alterado!"}
          texto={"Agora utilize esse novo nome! "}
          buttonWidth={"60%"}
          buttonHeight={70}
          buttonColor={"#0D5692"}
          buttonText={'voltar'}
          buttonAction={toggleOverlay}
        />
        <InputImagesPerfil 
        isVisible={alterarImages}
        setIsVisible={setAlterarImage}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlayImagesInput}
        styleTituloImage1={{fontSize:20}}
        tituloImage1={'Adicione as imagens'}
        pickerImagePerfil={pickerImagePerfil}
        setPickerImagePerfil={setPickerImagePerfil}
        pickerBanner={pickerBanner}
        setPickerBanner={setPickerBanner}
        imageBanner={imageBanner}
        setImageBanner={setImageBanner}
        imagePerfil={imagePerfil}
        setImagePerfil={setImagePerfil}
        buttonWidth={"60%"}
          buttonHeight={70}
          buttonColor={"#0D5692"}
          buttonText={'Confirmar'}
          buttonAction={alterarImagensPerfil}  
        />
        <InputImagePerfil 
        isVisible={pickerImagePerfil}
        onBackdropPress={setPickerImagePerfil}
        overlayStyle={styles.overlayInputStyle}
        setIsVisible={setPickerImagePerfil}
        setImage={setImagePerfil}
        />
        <InputImagePerfil 
        isVisible={pickerBanner}
        onBackdropPress={setPickerBanner}
        overlayStyle={styles.overlayInputStyle}
        setIsVisible={setPickerBanner}
        setImage={setImageBanner}
        /> */}
    </View>

  );

}
const styles = StyleSheet.create({
  overlayStyles: {
    width: "100%",

    position: "absolute",

  },
  overlayInputStyle: {
    width: "100%",
    height: 500,
    position: "absolute",
  },
  overlayImagesInput: {
    width: "100%",

    position: "absolute",
  },
  overlayTitulo: {
    fontSize: 18
  },
  overlayInput: {
    width: 300,
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 30,

  },
  overlaySucessoStyle: {
    width: "100%",
    height: "60%",
    position: "absolute",
    top: "40%",
  },
})



