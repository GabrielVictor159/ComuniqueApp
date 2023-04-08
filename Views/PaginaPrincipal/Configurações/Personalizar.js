import React, { useContext, useEffect, useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../../App";
import PersonalizarIcons from "../../../assets/PersonalizarIcons";
import ImagePerfil from "../../../componentes/ImagePerfil";
import InputImagePerfil from "../../../componentes/InputImagePerfil";
import InputImagesPerfil from "../../../componentes/InputImagesPerfil";
import InputsOverlay from "../../../componentes/InputsOverlay";
import PersonalizarOption from "../../../componentes/PersonalizarOption";
import SucessoOverlay from "../../../componentes/SucessoOverlay";
import addImageToBackground from "../../../configs/addImageToBackground";
import createFormData from "../../../configs/createFormData";
import keys from "../../../configs/keys";
export default function Personalizar(props) {
  const { user, setUser } = useContext(UserContext);
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
  const [imagePerfil, setImagePerfil] = useState(user.fotoPerfil)
  const [backgroundImage, setBackgroundImage] = useState(null);

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

  async function alterarImagensPerfil() {

    if (imagePerfil !== user.fotoPerfil && imagePerfil !== "userIcon.png") {
      try {
        let formData = await createFormData(imagePerfil.assets[0].uri, imagePerfil.assets[0].type, 'image');
        console.log(formData)
        let resposta = await fetch(`${keys.linkBackEnd}Images/usuarioImage/${user.email}/${user.senha}`, {
          method: 'PUT',
          body: formData
        });

        if (resposta.status === 200) {
          let senhaAntiga = user.senha;

          let data = await resposta.json();
          data.senha = senhaAntiga;
          setUser(data);
        }
        else {
          alert("Houve um erro!")
        }
      }
      catch (e) {
        console.log(e.getMessage())
      }
    }
  }
  const alterarNomeFunction = async () => {
    if (alterarNomeInput.length < 5) {
      alert("Por favor o nome deve ter pelo menos 5 caracteres!")
      return false
    }
    let dto = { ...user };
    dto.nomeUsuario = alterarNomeInput;
    let resposta = await fetch(`${keys.linkBackEnd}Usuarios/${user.email}/${user.senha}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Tipo de conteúdo do corpo da requisição
      },
      body: JSON.stringify(dto)
    })
    if (resposta.status === 401) {
      alert("Você não tem autorização para alterar os dados desse usuario!");
      return false
    }
    if (resposta.status === 500) {
      alert("Houve algum erro!")
      return false
    }
    if (resposta.ok) {
      let senhaAntiga = user.senha;
      let data = await resposta.json();
      data.senha = senhaAntiga;
      setUser(data);
      return true
    }
  }
  const alterarSenhaFunction = async () => {
    if (alterarSenhaInputAntigo != user.senha) {
      alert("A senha antiga esta errada!")
      return false
    }
    if (alterarSenhaInputNovo != alterarSenhaInputConfirma) {
      alert("As novas senhas não são iguais por favor verifique os dados!")
      return false
    }
    if (alterarSenhaInputNovo.length < 8) {
      alert("Por favor a senha deve ter pelo menos 8 caracteres!")
      return false
    }
    let dto = { ...user };
    dto.senha = alterarSenhaInputNovo;
    let resposta = await fetch(`${keys.linkBackEnd}Usuarios/${user.email}/${user.senha}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Tipo de conteúdo do corpo da requisição
      },
      body: JSON.stringify(dto)
    })
    if (resposta.status === 401) {
      alert("Você não tem autorização para alterar os dados desse usuario!");
      return false
    }
    if (resposta.status === 500) {
      alert("Houve algum erro!")
      return false
    }
    if (resposta.ok) {
      let data = await resposta.json();
      data.senha = alterarSenhaInputNovo;
      setUser(data);
      return true
    }
  }
  const alterarEmailFunction = async () => {
    if (alterarEmailInputAntigo != user.senha) {
      alert("A senha antiga esta errada!")
      return false
    }
    let dto = { ...user };
    dto.email = alterarEmailInputNovo;
    let resposta = await fetch(`${keys.linkBackEnd}Usuarios/${user.email}/${user.senha}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Tipo de conteúdo do corpo da requisição
      },
      body: JSON.stringify(dto)
    })
    if (resposta.status === 401) {
      alert("Você não tem autorização para alterar os dados desse usuario!");
      return false
    }
    if (resposta.status === 500) {
      alert("Houve algum erro!")
      return false
    }
    if (resposta.ok) {
      let senhaAntiga = user.senha;
      let data = await resposta.json();
      data.senha = senhaAntiga;
      setUser(data);
      return true
    }
  }
  const sair = async () => {
    fetch(`${keys.linkBackEnd}Usuarios/online/${user.email}/${user.senha}/false`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Tipo de conteúdo do corpo da requisição
      },
    })
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
            height: 150,
            backgroundColor: "white",
            top: 0,
            position: "absolute",
            alignItems: "center",
          }
        ]}
      >
        <View
          style={{
            width: "100%",
            height: "105%",
            position: "absolute",
            backgroundColor: '#69B1C9',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            elevation: 20
          }}
        />
        <View style={{ top: "80%", elevation: 20 }}>
          <ImagePerfil
            shadow="true"
            width={120}
            height={120}
            imageUrl={user.fotoPerfil}
          />
        </View>
      </View>
      <View style={{ position: "absolute", top: 180, left: "85%" }}>
        <TouchableOpacity
          onPress={() =>
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
          action={sair}
        />
      </View>
      <InputsOverlay
        isVisible={alterarEmail}
        onBackdropPress={toggleOverlay}
        overlayStyle={[styles.overlayStyles, { height: isKeyboardVisible === false ? '50%' : 500, top: isKeyboardVisible === false ? '50%' : 50 }]}
        titulo={'Alterar Email'}
        tituloStyle={styles.overlayTitulo}
        iconInput1={require("../../../assets/padlock.png")}
        InputStyle1={styles.overlayInput}
        KeyboardType1={'default'}
        Placeholder1={'Digite sua senha'}
        onChangeText1={setAlterarEmailInputAntigo}
        SecureText1={true}
        iconInput2={require("../../../assets/mail.png")}
        InputStyle2={styles.overlayInput}
        KeyboardType2={'email-address'}
        Placeholder2={'Digite seu Novo email'}
        onChangeText2={setAlterarEmailInputNovo}
        buttonWidth={"60%"}
        buttonHeight={70}
        buttonColor={"#0D5692"}
        buttonText={'Alterar'}
        buttonAction={alterarEmailFunction}
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
        overlayStyle={[styles.overlayStyles, { height: isKeyboardVisible === false ? '50%' : 500, top: isKeyboardVisible === false ? '50%' : 50 }]}
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
        buttonAction={alterarSenhaFunction}
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
        overlayStyle={[styles.overlayStyles, { height: isKeyboardVisible === false ? '50%' : 500, top: isKeyboardVisible === false ? '50%' : 50 }]}
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
        buttonAction={alterarNomeFunction}
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
        styleTituloImage1={{ fontSize: 20 }}
        tituloImage1={'Adicione a imagem de perfil'}
        pickerImagePerfil={pickerImagePerfil}
        setPickerImagePerfil={setPickerImagePerfil}
        pickerBanner={pickerBanner}
        setPickerBanner={setPickerBanner}

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
        type={"perfil"}
      />

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



