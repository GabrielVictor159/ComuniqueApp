
import React ,{useEffect, useState} from "react";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Lupa from "../../../assets/Lupa";
import ImagePerfil from "../../../componentes/ImagePerfil";
import UsuariosUnidadeController from "../../../Controller/UsuariosUnidadeController";
import { useNavigation } from "@react-navigation/native";
export default function ContatosDaUnidade (props){
    const navigation = useNavigation()
   const contatosDaUnidade = new UsuariosUnidadeController();
   const [contatos, setContatos] = useState()
   let [busca, setBusca] = useState('');
    useEffect(() => {
        props.swipe(false);
        props.navDisplay("none");
        
        return () => {
    
          props.swipe(true);
          props.navDisplay("flex");
        };
      }, []);

      function adicionarChat(callback){
        const chat = props.chats
        chat.push({
            id:props.chats.length,
            destinatario:callback.nome,
            online:callback.online,
            imageUrl:callback.imagePerfil,
            tipoUsuario:callback.tipoUsuario,
            mensagens:[
                
                    {
                        id:0,
                          text:'Iniciei um chat com voce',
                          data:new Date().toLocaleString(),
                          origem:'Gabriel'
                      },
                
                     
                
            ]
        });
        props.setChatEscolhido(props.chats.length-1);
        props.setChats(chat);
        return(
            navigation.navigate('Chat')
        );
      }

     function mapContatosDaUnidade(callback){
        const vetor=[]
        let i=0;
       return callback.filter(post => {
        if(busca === ''){
          return post;
        }
        else if(post.nome.toLowerCase().includes(busca.toLowerCase())){
          return post;
        }
    }).map(function (value, index){
            for(let z=0; z<props.chats.length; z++){
                if(value.nome===props.chats[z].destinatario){
                    vetor[index]=1
                }
                
            }
            if(vetor[index]!=1){
                return(
                    <View style={{width:'100%', alignItems:'center'}}  key={index}>

                    
                    <View style={{width:'90%', height:100, backgroundColor:'white', elevation:12, flexDirection:'row', alignItems:'center', borderRadius:20}}>
                        <View style={{height:'100%', width:'30%',  flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <ImagePerfil
                        width={60}
                        height={60}
                        imageUrl={value.imagePerfil}
                     />
                        </View>
                    
                    <Text style={{fontSize:20}}>{value.nome}</Text>
                    <View style={{width:'25%', height:'35%', backgroundColor:'#277BC0', borderRadius:30, left:'70%', position:'absolute', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity 
                        onPress={()=>{
                        adicionarChat(value);
                    }}>
                        <Text style={{color:'white'}}>{'Conversar'}</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <Text>{'\n'}</Text>
                </View>
                );
            }
           

        } );
        
    }    
      
    return(
       
        <View style={styles.body}>
            <View style={styles.menu}>
            <Text style={styles.titulo}>{'Contatos da Unidade'}</Text>
            <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            placeholder={'Pesquisar Contatos'}
            onChangeText={(busca) => {
                setBusca(busca)
              }}
            />
            <View style={styles.lupaContainer}>
            <Lupa width={30} height={30}/>
            </View>
           
            </View>
            
            </View>
            <View style={styles.contatos}>

            <ScrollView>
                {mapContatosDaUnidade(contatosDaUnidade.UsuariosUnidade)}
            </ScrollView>
            </View>
            <View style={{position:'absolute', top:'5%', left:'85%'}}>
        <TouchableOpacity 
        onPress={()=>{
           navigation.goBack();
        }}
        >
           <Image style={{width:30, height:30}} source={require('../../../assets/X.png')}/>
        </TouchableOpacity>
        </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    body:{
        width:'100%',
        height:'100%',
        backgroundColor:'#E7E7E7',
        alignItems:'center'
    },
    menu:{
        backgroundColor:'#277BC0',
        width:'100%',
        height:150,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    titulo:{
        color:'white',
        fontSize:20,
        top:'-10%'
    },
    inputContainer:{
        width:'99%',
        height:'35%',
    },
    input:{
        width:'100%',
        height:'100%',
        backgroundColor:'#D9D9D9',
        borderRadius:15,
        elevation:10,
        
        paddingHorizontal:60
    },
    lupaContainer:{
        position:'absolute',
        top:'20%',
        left:'3%'
    },
    contatos:{
        width:'100%', 
        height:'80%',
        top:20
        
    }
})