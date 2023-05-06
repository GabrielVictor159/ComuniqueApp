import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../../App";
import ImagePerfil from "../../../componentes/ImagePerfil";
import keys from "../../../configs/keys";
import { cores } from "../../../estilos";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Video } from 'expo-av';

export default function Chat(props) {
  const navigation = useNavigation();
  const [listMessage, setListMessage] = useState();
  const [conversa, setConversa] = useState([]);
  const [mensagemInput, setMensagemInput] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const { user, setUser } = useContext(UserContext);
  const scrollViewRef = useRef(null);
  const handleContentSizeChange = (contentWidth, contentHeight) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  };
  useEffect(() => {
    props.swipe(false);
    props.navDisplay("none");
    return () => {
      props.swipe(true);
      props.navDisplay("flex");
    };
  }, []);
  useEffect(() => {
    if (props.chatEscolhido.idChat != undefined) {
      try {
        fetch(`${keys.linkBackEnd}Mensagens/confirmarLidaChat/${user.email}/${user.senha}/${props.chatEscolhido.idChat}`, {
          method: 'PUT',

        })
          .then(response => {
            if (response.ok) {
              let novoVetor = [];
              props.mensagensNaoLidas.map(value => {
                if (value.chat.idChat != props.chatEscolhido.idChat) {
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
    if (props.mensagens.length != 0) {
      try {
        let novoVetor = []
        props.mensagens.map(value => {
          if (value.chat.idChat === props.chatEscolhido.idChat) {
            novoVetor.push(value)
          }
        })
        setConversa(novoVetor)
      }
      catch { }
    }
  }, [props.mensagens])

  useEffect(() => {
    try {
      setListMessage(mapChat())
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
    let z = false;
    if (mensagemInput != '') {
      if (props.chatEscolhido.idChat === undefined) {
        try {
          const response = await fetch(`${keys.linkBackEnd}Chat/${user.email}/${user.senha}/${props.chatEscolhido.usuario1.idUsuario === user.idUsuario ? props.chatEscolhido.usuario2.idUsuario : props.chatEscolhido.usuario1.idUsuario}`, {
            method: 'POST'
          })

          if (response.ok) {
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
              z = true;
              const novaMensagem = await response2.json();
              const novoChat = data;
              props.setChatEscolhido(novoChat)
              props.setMensagens([...props.mensagens, novaMensagem]);
            }
          }
        }
        catch { }
      }

      else {
        z = true
      }
      if (z === true) {
        try {

          if (selectedImage != '') {
            setSelectedImage('');
            let imageRequest = await fetch(selectedImage);
            let imageBlob = await imageRequest.blob();
            let fileName = getFileName(selectedImage);
            let formData = new FormData();
            formData.append('image', {
              uri: selectedImage,
              type: imageBlob.type,
              name: fileName,
            });
            let encodedMessage = encodeURIComponent(mensagemInput);
            const response3 = await fetch(`${keys.linkBackEnd}Images/mensagens/${user.email}/${user.senha}/${props.chatEscolhido.idChat}/${encodedMessage}`, {
              method: 'POST',
              body: formData
            })
            if (response3.ok) {
              const novaMensagem = await response3.json();
              props.setMensagens([...props.mensagens, novaMensagem]);
            }
            else {
              alert("Houve um erro!")
            }
          }
          else {
            const response2 = await fetch(`${keys.linkBackEnd}Mensagens/${user.email}/${user.senha}/${props.chatEscolhido.idChat}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(a)
            })

            if (response2.ok) {
              const novaMensagem = await response2.json();
              props.setMensagens([...props.mensagens, novaMensagem]);
            }
          }
        }
        catch (error) {
          console.error(error);
        }
      }


    }
  }
  function getFileName(fileUri) {
    const startIndex = fileUri.lastIndexOf('/') + 1;
    const endIndex = fileUri.length;
    const fileName = fileUri.substring(startIndex, endIndex);
    return fileName;
  }

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão de acesso à galeria negada!');
      return;
    }

    const result = await DocumentPicker.getDocumentAsync({});

    if (result.type === 'success') {
      const uri = result.uri;
      const sizeInBytes = result.size;
      const sizeInMb = sizeInBytes / (1024 * 1024);

      if (sizeInMb > 60) {
        alert('O arquivo selecionado é muito grande! Por favor selecione um arquivo menor que 10 MB.');
        return;
      }

      setSelectedImage(uri)
      console.log('selectedFile atualizado:', uri);
    }
  };

  function getFileExtension(filePath) {
    return filePath.split('.').pop();
  }

  function mapChat() {
    if (conversa.length !== 0) {
      try {
        return conversa.map((value) => {

          return (

            value.usuarioEnviou !== user.idUsuario ?
              <View key={value.idMensagens}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', left: 20 }}  >
                  <ImagePerfil
                    width={70}
                    height={70}
                    imageUrl={props.chatEscolhido.usuario1.idUsuario === user.idUsuario ? props.chatEscolhido.usuario2.fotoPerfil : props.chatEscolhido.usuario1.fotoPerfil}
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
                    <View >
                      {value.entregue === true ?
                        <>
                          <Image style={{ tintColor: 'black', width: 25, height: 20, position: 'absolute', transform: [{ translateX: 60 }, { translateY: 2 }] }} source={require("../../../assets/verifiqued.png")} />
                          <Image style={{ tintColor: value.lida ? cores.backgroundColor : 'white', width: 25, height: 20, position: 'absolute', transform: [{ translateX: 60 }] }} source={require("../../../assets/verifiqued.png")} />
                          <Image style={{ tintColor: 'black', width: 25, height: 20, position: 'absolute', transform: [{ translateX: 70 }, { translateY: 2 }] }} source={require("../../../assets/verifiqued.png")} />
                          <Image style={{ tintColor: value.lida ? cores.backgroundColor : 'white', width: 25, height: 20, position: 'absolute', transform: [{ translateX: 70 }] }} source={require("../../../assets/verifiqued.png")} />
                        </>
                        : <></>
                      }
                    </View>
                  </View>


                </View>
                <Text>{'\n'}</Text>
              </View>
          );
        });

      }
      catch {

      }
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

            imageUrl={props.chatEscolhido.usuario1.idUsuario === user.idUsuario ? props.chatEscolhido.usuario2.fotoPerfil : props.chatEscolhido.usuario1.fotoPerfil}
          />
          <View style={[styles.indicadorOnline, { backgroundColor: props.chatEscolhido.usuario1.idUsuario === user.idUsuario ? props.chatEscolhido.usuario2.usuarioOnline === true ? 'green' : '' : props.chatEscolhido.usuario1.usuarioOnline === true ? 'green' : '' }]} />
        </View>
        <Text style={styles.nomePerfil}>{props.chatEscolhido.usuario1.idUsuario === user.idUsuario ? props.chatEscolhido.usuario2.nomeUsuario : props.chatEscolhido.usuario1.nomeUsuario}</Text>
      </View>
      <View style={styles.mensagensContainer}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={handleContentSizeChange}
        >
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
      {selectedImage != '' ?
        <View style={{ width: '100%', top: -160, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '7%' }}>
          <TouchableOpacity onPress={() => { setSelectedImage('') }} style={{ left: '75%' }}>
            <Image source={require("../../../assets/X.png")} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
          <View style={{ width: '80%', height: 180, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {selectedImage && (getFileExtension(selectedImage) === 'mp4' || getFileExtension(selectedImage) === 'mkv'
              ? <Video
                source={{ uri: selectedImage }}
                style={{ width: '95%', height: '95%' }}
                resizeMode="contain"
                useNativeControls
              />
              : getFileExtension(selectedImage) === 'jpg' || getFileExtension(selectedImage) === 'png' || getFileExtension(selectedImage) === 'jpeg'
                ? <Image source={{ uri: selectedImage }} style={{ width: '95%', height: '95%' }} />
                : <View style={{ width: '90%', height: 60, backgroundColor: '#03A7C4', borderRadius: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 20 }}>
                  <Image source={require("../../../assets/icons8-file-64.png")} style={{ width: 40, height: 40 }} />
                  <Text style={{ width: '70%' }}>{getFileName(selectedImage)}</Text>
                </View>)}

          </View>
        </View> : <></>}
      <View style={styles.mensagemInputContainer}>
        <TextInput style={styles.mensagemInput}
          placeholder="Mensagem"
          onChangeText={setMensagemInput}
        />
        <TouchableOpacity style={{ position: 'absolute', left: '67%' }} onPress={pickImage} >
          <Image source={require("../../../assets/icons8-gallery-100.png")} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
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