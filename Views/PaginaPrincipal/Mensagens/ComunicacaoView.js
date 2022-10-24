import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import swipeConfig from "../../../configs/swipeConfig";
import RadialGradient from "react-native-radial-gradient";
import BackgroundColor2 from "../../../assets/BackgroundColor2";
import { cores, geral } from "../../../estilos";
import ImagePerfil from "../../../componentes/ImagePerfil";
import Lupa from "../../../assets/Lupa";
import Comunicacoes from "../../../componentes/Comunicacoes";
import ComunicacaoStyle from "../../../estilos/Views_Estilos/ComunicacaoStyle";
import UsuarioController from '../../../Controller/UsuarioController';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export default function ComunicacaoView (props) {
  const navigation = useNavigation();
 const [atualizacoes, setAtualizacoes] = useState(0);  
 const [chats, setChats]= useState();
 const timer = atualizacoes===0?300:4000;
   useEffect(()=>{
   
   
  const interval = setInterval(()=>{
   setChats(mapReturn(props.chats))
  }, timer);
  setAtualizacoes(atualizacoes+1);
  return ()=>clearInterval(interval);
   },[]);
  function mapReturn(callback) {
    
    return callback.map((value) => {
      return (
        <View style={{ width: "100%", alignItems: "center" }} key={value.id}>
          <TouchableOpacity style={{width:400, alignItems:'center'}}
          onPress={()=>{
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
            mensagem={value.mensagens[value.mensagens.length-1].text}
            online={value.online}
            horario={value.mensagens[value.mensagens.length-1].data.substring(11,16)}
          />
          <Text>{"\n"}</Text>
          </TouchableOpacity>
          
        </View>
      );
    });
  };

    return (
      <>
        <View style={{ position: "absolute", width: "100%", height: "100%",justifyContent: "center",
          flexDirection: "column",
          overflow: "visible", backgroundColor:'#E3E3E3'}}>
          
        </View>

        <View style={styles.ComunicacaoStyle.mensagensContainer}>
          <ScrollView
            contentContainerStyle={styles.ComunicacaoStyle.mensagensScrool}
          >

             
             {chats} 
          </ScrollView>
        </View>
        <View style={[styles.ComunicacaoStyle.menuSuperior, geral.shadow]}>
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
              imageUrl={require("../../../assets/PerfilImage.jpg")}
            />
          </View>
        </View>
        </>
    );
  }


const styles = StyleSheet.create({
  ComunicacaoStyle,
});
