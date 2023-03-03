import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  Image, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View
} from "react-native";
import { UserContext } from "../../App";
import Button1 from "../../componentes/Button1";
import keys from "../../configs/keys";
import { cores } from "../../estilos";
import CadastrarStyle from "../../estilos/Views_Estilos/CadastrarStyle";
export default function Cadastrar(props) {
  const navigation = useNavigation();
  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [instituicaoName, setInstituicaoName] = useState("");
  const [senhaInstituicao, setSenhaInstituicao] = useState("");
  const [statusReq, setStatusReq] = useState("");
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardActive(true));
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardActive(false));

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


  const cadastrar = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais por favor verifique as senhas para que não haja nenhum problema!")
      return
    }
    if (nome.length < 5) {
      alert("Por favor o nome deve ter pelo menos 5 caracteres!")
      return
    }
    if (senha.length < 8) {
      alert("Por favor a senha deve ter pelo menos 8 caracteres!")
      return
    }
    if (nome.length === 0 || email.length === 0 || instituicaoName.length === 0 || senhaInstituicao.length === 0 || senha.length === 0 || confirmarSenha.length === 0 || categoria.length === 0) {
      alert("Por favor preencha todos os dados!")
      return
    }

    let resposta = await fetch(`${keys.linkBackEnd}Usuarios/${instituicaoName}/${senhaInstituicao}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nomeUsuario: nome,
        tipoUsuario: categoria,
        email: email,
        senha: senha,
        fotoPerfil: "none",
        fotoBackground: "none",
        usuarioOnline: true
      })
    })
    if (resposta.status == 404) {
      alert("Houve algum erro!")
    }
    if (resposta.status === 401) {
      alert("Por favor verifique o nome e a senha da instituição!")
    }
    if (resposta.status === 200) {
      setUser(await resposta.json())
      alert("Usuario Cadastrado")
      navigation.goBack()
    }

  }
  const styles = StyleSheet.create({
    ...CadastrarStyle(isKeyboardActive),
  });

  return (
    <View style={styles.body}>
      <Text style={styles.textTitulo}>Registre-se</Text>
      <Image
        style={styles.imageBackground}
        source={require("../../assets/Login-rafiki1.png")}
      />

      <View style={styles.viewMiddle}>
        <View style={styles.viewInputs}>
          <View style={styles.selectCategoria}>
            <Pressable
              style={
                categoria === "ALUNO"
                  ? styles.selectActive
                  : styles.selectInative
              }
              onPress={() => setCategoria("ALUNO")}
            >
              <Text>Aluno</Text>
            </Pressable>
            <Pressable
              style={
                categoria === "PROFESSOR"
                  ? styles.selectActive
                  : styles.selectInative
              }
              onPress={() => setCategoria("PROFESSOR")}
            >
              <Text>Professor</Text>
            </Pressable>
          </View>
          <Text>{"\n"}</Text>
          <TextInput
            style={styles.input}
            placeholder={"Nome"}
            keyboardType={"default"}
            onChangeText={(nome) => {
              setNome(nome)
            }}
          />
          <Text>{"\n"}</Text>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            keyboardType={"email-address"}
            onChangeText={(email) => {
              setEmail(email)
            }}
          />
          <Text>{"\n"}</Text>
          <TextInput
            style={styles.input}
            placeholder={"Nome da Instituição"}
            keyboardType={"default"}
            onChangeText={(instituicaoName) => {
              setInstituicaoName(instituicaoName)
            }}
          />
          <Text>{"\n"}</Text>
          <TextInput
            style={styles.input}
            placeholder={"Senha da Instituição"}
            keyboardType={"default"}
            secureTextEntry={true}
            onChangeText={(senhaInstituicao) => {
              setSenhaInstituicao(senhaInstituicao)
            }}
          />
          <Text>{"\n"}</Text>
          <TextInput
            style={styles.input}
            placeholder={"Senha"}
            keyboardType={"default"}
            secureTextEntry={true}
            onChangeText={(senha) => {
              setSenha(senha)
            }}
          />
          <Text>{"\n"}</Text>
          <TextInput
            style={styles.input}
            placeholder={"Confirmar Senha"}
            keyboardType={"default"}
            secureTextEntry={true}
            onChangeText={(confirmarSenha) => {
              setConfirmarSenha(confirmarSenha)
            }}
          />
        </View>
        <Text>{"\n"}</Text>

        <View style={styles.viewButtons}>

          <Button1
            width={220}
            height={"60%"}
            borderRadius={20}
            fontSize={20}
            tipoNavegacao="action"
            action={cadastrar}
            navegacao="Logar"
            texto="Cadastrar"
            color1={cores.buttonGradientColor1}
            color2={cores.buttonGradientColor2}
          />
          <Text>{"\n"}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.linkText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );


}



