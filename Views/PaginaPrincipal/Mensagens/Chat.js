import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, TextInput,TouchableOpacity } from "react-native";
import ImagePerfil from "../../../componentes/ImagePerfil";
import { useNavigation } from "@react-navigation/native";

export default function Chat(props) {
  const navigation = useNavigation();
  const [listMessage, setListMessage] = useState();
  const [conversa, setConversa] = useState(props.chat);
  const [atualizacoes, setAtualizacoes] = useState(0);
  const [mensagemInput, setMensagemInput] = useState('');
  const chats = props.chats;
  const timer = atualizacoes === 0 ? 300 : 2000;


  useEffect(() => {
    props.swipe(false);
    props.navDisplay("none");
    setInterval(() => {
      try{
      setListMessage(mapChat(conversa))
      }
      catch{}
      setAtualizacoes(+1)
    }, timer);
    return () => {

      props.swipe(true);
      props.navDisplay("flex");
    };
  }, []);



  function SendMessage() {
    if (mensagemInput != '') {

      chats[props.chat.id].mensagens.push({
        id: chats[props.chat.id].mensagens.length,
        text: mensagemInput,
        data: new Date().toLocaleString(),
        origem: 'Gabriel',
      })
      props.setChats(chats)

      setConversa(props.chat)

    }

  }



  function mapChat(callback) {
    try{
    return callback.mensagens.map((value) => {

      return (

        value.origem === callback.destinatario ?
          <View key={value.id}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', left: 20 }}  >
              <ImagePerfil
                width={70}
                height={70}
                imageUrl={callback.imageUrl}
              />



              <View >
                <Text style={{ backgroundColor: 'white', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', padding: 10, borderRadius: 50, paddingHorizontal: 20, maxWidth: 300, top: 15, left: 15 }}>{value.text}</Text>
              </View>
            </View>
            <Text>{'\n'}</Text>
          </View>
          :
          <View key={value.id}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}  >



              <View >
                <Text style={{ backgroundColor: '#34B82933', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', padding: 10, borderRadius: 50, paddingHorizontal: 20, maxWidth: 300, top: 15, left: -20 }}>{value.text}</Text>
              </View>


            </View>
            <Text>{'\n'}</Text>
          </View>
      );
    });
    
  }
  catch{

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

            imageUrl={props.chat.imageUrl}
          />
          <View style={[styles.indicadorOnline, { backgroundColor: props.chat.online === true ? 'green' : '' }]} />
        </View>
        <Text style={styles.nomePerfil}>{props.chat.destinatario}</Text>
      </View>
      <View style={styles.mensagensContainer}>
        <ScrollView>
          {listMessage}
        </ScrollView>

      </View>
        <View style={{width:60, height:60, backgroundColor:'white', position:'absolute', top:'92%', left:'83%',borderRadius: 20, alignItems:'center', justifyContent:'center', elevation:15}}>
        <TouchableOpacity style={{width:'100%', height:'100%', alignItems:'center', justifyContent:'center',  borderRadius: 20}}
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
      onPress={()=>{
        navigation.goBack();
      }}
      >
        <Image style={{width:'80%', height:'80%'}} source={require('../../../assets/buttonReturn_Blue.png')}/>
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
    top:20,
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
    position:'absolute',
    left:'0%',
    top:'0%',
    overflow: 'visible'
  },
  buttonReturn:{
    width:30,
    height:30,
    
    alignItems:'center',
    justifyContent:'center'
  },
  buttonReturnContainer:{
    position:'absolute',
    left:'2%',
    top:'5%'
  }
})