import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import ImagePerfil from "../../../componentes/ImagePerfil";
import { useNavigation } from "@react-navigation/native";
export default function Chat(props){
    const [conversa, setConversa]= useState(props.chat);
    const [atualizacoes, setAtualizacoes] = useState(0);  
 const timer = atualizacoes===0?1000:4000;
    useEffect(() => {
        props.swipe(false);
        props.navDisplay("none");
        const interval = setInterval(()=>{
            setConversa(props.chat)
          }, timer);
        return function () {
          props.swipe(true);
          props.navDisplay("flex");
        };
      }, []);

      function mapChat(callback) {
    
        return callback.mensagens.map((value) => {
          return (
            value.origem===callback.destinatario?
            <View key={value.id}> 
            <View style={{flexDirection:'row', justifyContent:'flex-start', left:20}}  >
            <ImagePerfil
              width={70}
              height={70}
              imageUrl={callback.imageUrl}
            />
       

            
           <View >
           <Text style={{backgroundColor:'white', textAlign:'center', alignItems:'center' ,justifyContent:'center', display:'flex', padding:10, borderRadius:50, paddingHorizontal:20, maxWidth:300, top:15, left:15}}>{value.text}</Text>
           </View>
           </View>
           <Text>{'\n'}</Text>
           </View>
            :
            <View key={value.id}>
            <View style={{flexDirection:'row', justifyContent:'flex-end'}}  >
       

            
           <View >
           <Text style={{backgroundColor:'#34B82933', textAlign:'center', alignItems:'center' ,justifyContent:'center', display:'flex', padding:10, borderRadius:50, paddingHorizontal:20, maxWidth:300, top:15, left:-20}}>{value.text}</Text>
           </View>
           
            
           </View>
           <Text>{'\n'}</Text>
           </View>
          );
        });
      };
    return(
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
           <View style={[styles.indicadorOnline,{backgroundColor:props.chat.online===true?'green':''}]}/>
          </View>
            <Text style={styles.nomePerfil}>{props.chat.destinatario}</Text>
            </View>
            <View style={styles.mensagensContainer}>
                <ScrollView>
                    {mapChat(conversa)}
                </ScrollView>
           
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    body:{
        width:'100%',
        height:'100%',
        backgroundColor:'#E3E3E3'
    },
    menu:{
        width:'100%',
        height:130,
        backgroundColor:'white',
        elevation:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        flexDirection:'row'
    },
    imagePerfilContainer:{
        left:'40%',
        justifyContent:'flex-end'

    },
    indicadorOnline:{
        position:'absolute',
        top:'70%',
        width:20,
        height:20,
        
        borderRadius:20
    },
    nomePerfil:{
        position:'absolute',
        left:'35%',
        top:'40%',
        fontSize:20
    },
    mensagensContainer:{
        width:'100%',
        height:800
    }
})