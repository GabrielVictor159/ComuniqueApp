
import React ,{useContext, useEffect, useState} from "react";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Lupa from "../../../assets/Lupa";
import ImagePerfil from "../../../componentes/ImagePerfil";
import UsuariosUnidadeController from "../../../Controller/UsuariosUnidadeController";
import { useNavigation } from "@react-navigation/native";
import keys from "../../../configs/keys";
import {UserContext} from "../../../App";
export default function ContatosDaUnidade (props){
    const navigation = useNavigation()
   const contatosDaUnidade = new UsuariosUnidadeController();
   const [contatos, setContatos] = useState([]);
   const {user,setUser} = useContext(UserContext);
   let [busca, setBusca] = useState('');
   const itemsPerPage = 10;
const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        props.swipe(false);
        props.navDisplay("none");
        
        return () => {
    
          props.swipe(true);
          props.navDisplay("flex");
        };
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${keys.linkBackEnd}Usuarios/getAllUsuariosInstitutoPaginado/${user.email}/${user.senha}?pagina=${currentPage}&tamanho=${itemsPerPage}`);
            if (response.ok) {
              const items = await response.json();
              setContatos((contatos) => [...contatos, ...items]);
            } else {
              console.log('Erro ao carregar dados');
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, [currentPage]);
      
      


      const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const isEndReached =
          layoutMeasurement.height + contentOffset.y >= contentSize.height;
        if (isEndReached) {
          setCurrentPage((prev) => prev + 1);
        }
      };
      function adicionarChat(callback){

        const chat = {
            usuario1:user,
            usuario2:callback
        }
        props.setChatEscolhido(chat);
        return(
            navigation.navigate('Chat')
        );
      }

     function mapContatosDaUnidade(){
        const vetor=[]
        let i=0;
        if(contatos.length!==0){
       return contatos.filter(post => {
        if(busca === ''){
          return post;
        }
        else if(post.nomeUsuario.toLowerCase().includes(busca.toLowerCase())){
          return post;
        }
    }).map( (value,index) =>{
      let a =0;
      props.chats.map((value2,index2)=>{
        if(value2.usuario1 === value.idUsuario || value.usuario2 ===value.idUsuario){
          a++;
        }
      })
      if(a===0){
        return(
            <View style={{width:'100%', alignItems:'center'}}  key={index}>

            
            <View style={{width:'90%', height:100, backgroundColor:'white', elevation:12, flexDirection:'row', alignItems:'center', borderRadius:20}}>
                <View style={{height:'100%', width:'30%',  flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <ImagePerfil
                width={60}
                height={60}
                imageUrl={`${keys.linkBackEnd}images/${value.fotoPerfil}`}
             />
                </View>
            
            <Text style={{fontSize:20}}>{value.nomeUsuario}</Text>
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
          else{
            return(
              <></>
            );
          }
    })
    }
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

            <ScrollView onScroll={handleScroll}>
                {mapContatosDaUnidade()}
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