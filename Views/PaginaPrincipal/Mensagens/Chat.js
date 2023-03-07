import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../../App";
import ImagePerfil from "../../../componentes/ImagePerfil";
import keys from "../../../configs/keys";

export default function Chat(props) {
  const navigation = useNavigation();
  const [listMessage, setListMessage] = useState();
  const [conversa, setConversa] = useState(props.chat);
  const [mensagemInput, setMensagemInput] = useState('');
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    props.swipe(false);
    props.navDisplay("none");
    return () => {
      props.swipe(true);
      props.navDisplay("flex");
    };
  }, []);
  useEffect(() => {
    if(props.chatEscolhido.idChat!=undefined){
    try {
      fetch(`${keys.linkBackEnd}Mensagens/confirmarLidaChat/${user.email}/${user.senha}/${props.chatEscolhido.idChat}`, {
        method: 'PUT',

      })
        .then(response => {
          if (response.ok) {
            let novoVetor = [];
            props.mensagensNaoLidas.map(value => {
              if (value.chat.idChat != chatEscolhido.idChat) {
                novoVetor.push(value)
              }
            })
            props.setMensagensNaoLidas(novoVetor)
          }
        })
    }
    catch { }
  }

  }, [props.mensagens])

  useEffect(() => {
    try {
      let novoVetor = []
      props.mensagens.map(value => {
        if (value.chat.idChat === chatEscolhido.idChat) {
          novoVetor.push(value)
        }
      })
      setConversa(novoVetor)
    }
    catch { }
  }, [props.mensagens])

  useEffect(() => {
    try {
      setListMessage(mapChat(conversa))
    }
    catch { }
  }, [conversa])

  async function SendMessage() {
    let a = {
      usuarioEnviou: user.idUsuario,
      mensagem: mensagemInput,
      lida: false,
      entregue: false,
      isFile: false
    }
    if (mensagemInput != '') {
      if(props.chatEscolhido.idChat===undefined){
        try{
          const response = await fetch(`${keys.linkBackEnd}Chat/${user.email}/${user.senha}/${props.chatEscolhido.usuario1.idUsuario===user.idUsuario?props.chatEscolhido.usuario2.idUsuario:props.chatEscolhido.usuario1.idUsuario}`,{
            method:'POST'
          })
          if(response.ok){
            const data = await response.json()
            props.setChatEscolhido(data)
            const response2 = await fetch(`${keys.linkBackEnd}Mensagens/${user.email}/${user.senha}/${data.idChat}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(a)
            })
    
            if (response2.ok) {
              const novaMensagem = await response.json();
              props.setMensagens([...props.mensagens, novaMensagem]);
            }
          }
        }
        catch{}
      }
      else{
      try {
        const response = await fetch(`${keys.linkBackEnd}Mensagens/${user.email}/${user.senha}/${props.chatEscolhido.idChat}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(a)
        })

        if (response.ok) {
          const novaMensagem = await response.json();
          props.setMensagens([...props.mensagens, novaMensagem]);
        }
      }
      catch { }
    }

    }

  }



  function mapChat(callback) {
    try {
      return callback.mensagens.map((value) => {

        return (

          value.usuarioEnviou !== user.idUsuario?
            <View key={value.idMensagens}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', left: 20 }}  >
                <ImagePerfil
                  width={70}
                  height={70}
                  imageUrl={value.chat.usuario1.idUsuario===user.idUsuario?`${keys.linkBackEnd}images/${value.chat.usuario2.fotoPerfil}`:`${keys.linkBackEnd}images/${value.chat.usuario1.fotoPerfil}`}
                />



                <View >
                  <Text style={{ backgroundColor: 'white', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', padding: 10, borderRadius: 50, paddingHorizontal: 20, maxWidth: 300, top: 15, left: 15 }}>{value.mensagem}</Text>
                </View>
              </View>
              <Text>{'\n'}</Text>
            </View>
            :
            <View key={value.idMensagens}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}  >



                <View >
                  <Text style={{ backgroundColor: '#34B82933', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', padding: 10, borderRadius: 50, paddingHorizontal: 20, maxWidth: 300, top: 15, left: -20 }}>{value.mensagem}</Text>
                </View>


              </View>
              <Text>{'\n'}</Text>
            </View>
        );
      });

    }
    catch {

    }
  };



  return (
    <View style={styles.body}>
      <View style={styles.menu}>
        <View style={styles.imagePerfilContainer}>
          <ImagePerfil
            shadow="true"
            width={70}
            height={70}
            shadowTop={'35%'}
            shadowColor="#5C5C5C"
            shadowOpacity={0.2}

            imageUrl={`${keys.linkBackEnd}images/${props.chatEscolhido.usuario1.idUsuario===user.idUsuario?props.chatEscolhido.usuario2.fotoPerfil:props.chatEscolhido.usuario1.fotoPerfil}`}
          />
          <View style={[styles.indicadorOnline, { backgroundColor: props.chatEscolhido.usuario1.idUsuario===user.idUsuario? props.chatEscolhido.usuario2.usuarioOnline===true ? 'green' : '': props.chatEscolhido.usuario1.usuarioOnline===true ? 'green' : ''}]} />
        </View>
        <Text style={styles.nomePerfil}>{props.chatEscolhido.usuario1.idUsuario===user.idUsuario?props.chatEscolhido.usuario2.nomeUsuario:props.chatEscolhido.usuario1.nomeUsuario}</Text>
      </View>
      <View style={styles.mensagensContainer}>
        <ScrollView>
          {listMessage}
        </ScrollView>

      </View>
      <View style={{ width: 60, height: 60, backgroundColor: 'white', position: 'absolute', top: '92%', left: '83%', borderRadius: 20, alignItems: 'center', justifyContent: 'center', elevation: 15 }}>
        <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}
          onPress={() => {
            SendMessage();
          }}
        >
          <Image style={{ width: '60%', height: '50%' }} source={require('../../../assets/SendMessage.png')} />
        </TouchableOpacity>
      </View>


      <View style={styles.mensagemInputContainer}>
        <TextInput style={styles.mensagemInput}
          placeholder="Mensagem"
          onChangeText={setMensagemInput}
        />




      </View>
      <View style={styles.buttonReturnContainer}>
        <TouchableOpacity style={styles.buttonReturn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={{ width: '80%', height: '80%' }} source={require('../../../assets/buttonReturn_Blue.png')} />
        </TouchableOpacity>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E3E3E3'
  },
  menu: {
    width: '100%',
    height: 130,
    backgroundColor: 'white',
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row'
  },
  imagePerfilContainer: {
    left: '40%',
    justifyContent: 'flex-end'

  },
  indicadorOnline: {
    position: 'absolute',
    top: '70%',
    width: 20,
    height: 20,

    borderRadius: 20
  },
  nomePerfil: {
    position: 'absolute',
    left: '35%',
    top: '40%',
    fontSize: 20
  },
  mensagensContainer: {
    top: 20,
    width: '100%',
    height: '72%',


  },
  mensagemInputContainer: {
    position: 'absolute',
    top: '91%',
    width: '100%',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',

  },
  mensagemInput: {
    left: 20,
    width: '75%',
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20
  },
  buttonSend: {
    width: 100,
    height: 100,
    left: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    left: '0%',
    top: '0%',
    overflow: 'visible'
  },
  buttonReturn: {
    width: 30,
    height: 30,

    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonReturnContainer: {
    position: 'absolute',
    left: '2%',
    top: '5%'
  }
})