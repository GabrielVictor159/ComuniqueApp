import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, Image } from "react-native";
import { cores, geral } from "../../../estilos";
import ImagePerfil from "../../../componentes/ImagePerfil";
import Lupa from "../../../assets/Lupa";
import Comunicacoes from "../../../componentes/Comunicacoes";
import ComunicacaoStyle from "../../../estilos/Views_Estilos/ComunicacaoStyle";
import UsuarioController from '../../../Controller/UsuarioController';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function ComunicacaoView(props) {
  const navigation = useNavigation();
  let [busca, setBusca] = useState('');

  useEffect(()=>{
    setInterval(()=>{
      props.setUsuario(props.usuarioController.usuario)
     
    },3000)
  },[])

  function mapReturn(callback) {
   
     
    return callback.filter(post => {
        if(busca === ''){
          return post;
        }
        else if(post.destinatario.toLowerCase().includes(busca.toLowerCase())){
          return post;
        }
    }).map((value, index) => {
      return (
      
        <View style={{ width: "100%", alignItems: "center" }} key={index}>
          <TouchableOpacity style={{ width: 400, alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('Chat'),
                props.setChatEscolhido(value.id)
            }}
          >
           
            <Comunicacoes
              width="90%"
              height={100}
              backgroundColor="white"
              tipoUsuario={value.tipoUsuario}
              imageUrl={value.imageUrl}
              nomeUsuario={value.destinatario}
              mensagem={value.mensagens[value.mensagens.length - 1].text}
              online={value.online}
              horario={value.mensagens[value.mensagens.length - 1].data.substring(11, 16)}
            />
           <Text>{"\n"}</Text>
          </TouchableOpacity>
         
        </View>
       
        
      );
    });
  
 
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


          {mapReturn(props.usuario.chats)}
        </ScrollView>
      </View>
      <View style={[styles.ComunicacaoStyle.menuSuperior, geral.shadow]}>
      <View style={{position:'absolute', top:'62%', left:'75%'}}>
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('ContatosDaUnidade')
        }}
        >
            <Image style={{width:40, height:40}} source={require('../../../assets/AdicionarContatos.png')}/>
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
          <Lupa width={30} height={30} />
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
            imageUrl={props.usuario.perfil.imagePerfil}
          />
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  ComunicacaoStyle,
});