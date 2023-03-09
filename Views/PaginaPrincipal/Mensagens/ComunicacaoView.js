import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserContext } from "../../../App";
import Comunicacoes from "../../../componentes/Comunicacoes";
import ImagePerfil from "../../../componentes/ImagePerfil";
import keys from "../../../configs/keys";
import { geral } from "../../../estilos";
import ComunicacaoStyle from "../../../estilos/Views_Estilos/ComunicacaoStyle";
export default function ComunicacaoView(props) {
  const navigation = useNavigation();
  let [busca, setBusca] = useState('');
  const { user, setUser } = useContext(UserContext);
  const [chatsViews, setChatsViews] = useState();
  useEffect(() => {
    try {
      setChatsViews(mapReturn(props.chats))
    }
    catch { }
  }, [props.chats, props.mensagens, props.chatEscolhido, busca])


  function mapReturn(callback) {

    if (callback.length !== 0) {

      return callback.filter(post => {
        if (busca === '') {
          return post;
        }
        else if (post.usuario1.nomeUsuario.toLowerCase().includes(busca.toLowerCase()) || post.usuario2.nomeUsuario.toLowerCase().includes(busca.toLowerCase())) {
          return post;
        }
      }).map((value, index) => {
        const filteredMessages = props.mensagens.filter(message => message.chat.idChat === value.idChat);
        const dataUltimaMensagem = new Date(filteredMessages[filteredMessages.length - 1].dataMensagem)
        return (

          <View style={{ width: "100%", alignItems: "center" }} key={index}>
            <TouchableOpacity style={{ width: 400, alignItems: 'center' }}
              onPress={() => {
                navigation.navigate('Chat'),
                  props.setChatEscolhido(value)
              }}
            >

              <Comunicacoes
                width="90%"
                height={100}
                backgroundColor="white"
                tipoUsuario={value.usuario1.idUsuario === user.idUsuario ? value.usuario2.tipoUsuario : value.usuario1.tipoUsuario}
                imageUrl={`${keys.linkBackEnd}images/${value.usuario1.idUsuario === user.idUsuario ? value.usuario2.fotoPerfil : value.usuario1.fotoPerfil}`}
                nomeUsuario={value.usuario1.idUsuario === user.idUsuario ? value.usuario2.nomeUsuario : value.usuario1.nomeUsuario}
                mensagem={filteredMessages[filteredMessages.length - 1].mensagem}
                online={value.usuario1.idUsuario === user.idUsuario ? value.usuario2.usuarioOnline : value.usuario1.usuarioOnline}
                horario={`${dataUltimaMensagem.getHours()}:${dataUltimaMensagem.getMinutes()}`}
              />
              <Text>{"\n"}</Text>
            </TouchableOpacity>

          </View>


        );
      });

    }
  };


  return (
    <>
      <View style={{
        position: "absolute", width: "100%", height: "100%", justifyContent: "center",
        flexDirection: "column",
        overflow: "visible", backgroundColor: '#E3E3E3'
      }}>

      </View>

      <View style={styles.ComunicacaoStyle.mensagensContainer}>
        <ScrollView
          contentContainerStyle={styles.ComunicacaoStyle.mensagensScrool}
        >


          {chatsViews}
        </ScrollView>

      </View>
      <View style={[styles.ComunicacaoStyle.menuSuperior, geral.shadow]}>
        <View style={{ position: 'absolute', top: '62%', left: '75%' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ContatosDaUnidade')
            }}
          >
            <Image style={{ width: 40, height: 40 }} source={require('../../../assets/AdicionarContatos.png')} />

          </TouchableOpacity>
        </View>
        <Text style={styles.ComunicacaoStyle.menuText}>Mensagens</Text>
        <TextInput
          style={[styles.ComunicacaoStyle.menuInput, geral.shadow]}
          placeholder={"procurar contatos"}
          onChangeText={(busca) => {
            setBusca(busca)
          }}
        />
        <View style={styles.ComunicacaoStyle.lupaContainer}>

        </View>
        <View style={styles.ComunicacaoStyle.imagePerfilContainer}>
          <ImagePerfil
            shadow="true"
            width={50}
            height={50}
            shadowTop={10}
            shadowColor="#5C5C5C"
            shadowOpacity={0.2}
            fontSize={15}
            imageUrl={`${keys.linkBackEnd}images/${user.fotoPerfil}`}
          />
        </View>
      </View>
    </>
  );



}


const styles = StyleSheet.create({
  ComunicacaoStyle,
});