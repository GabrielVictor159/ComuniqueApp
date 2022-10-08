import React from "react";
import { View,  Image } from "react-native";
import Atividades from "../componentes/Atividades";
import ImagePerfil from "../componentes/ImagePerfil";


export default class PaginaUsuario extends React.Component{

constructor(props){
    
    super(props);
    this.setState={

    }
}

    render(){
        return (
            <View style={{width:'100%', height:'100%', flexDirection:'column', backgroundColor:'#277BC0', alignItems:'center'}}>
                
                <View style={{width:'100%', height:'25%', flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'white'
            ,  borderBottomRightRadius:50, borderBottomLeftRadius:50,
            
            
            }}>
                <View style={{alignItems:'center', top:10}}>
                <ImagePerfil shadow='true' width={80} height={80} shadowTop={10} shadowColor='#5C5C5C' shadowOpacity={0.2} text='Felipe' fontSize={15} 
                imageUrl={require('../assets/PerfilImage.jpg')}
                />
                
                </View>
               
                <Image  source={require('../assets/settingsIcon.png')} style={{position:'absolute', left:'90%', top:40}}/>
                <Image source={require('../assets/IconReturn_PaginaUsuario.png')} style={{position:'absolute', left:'5%', top:40}}/>
                
            </View>
            <View style={{height:'50%', justifyContent:'space-between', top:'7%'}}>
                <View>
                <Atividades width={350} height={100} borderRadius={35} color='#7BDAAC' completo='80%' image={require('../assets/Woman_meditates_under_a_rainbow.png')} text='Jogos' fontSize={20}/>
                </View>
                <View >
                <Atividades width={350} height={100} borderRadius={35} color='#D23535' completo='30%' image={require('../assets/Man_with_laptop_uploading_files_to_cloud.png')}  fontSize={20}/>
                </View>
                <View >
                <Atividades width={350} height={100} borderRadius={35} color='#EFE378' completo='60%' image={require('../assets/Man_erases_the_inscription_from_the_board.png')}  text='Estudo Diario' fontSize={20}/>
                </View>
                </View>
            </View>
        );
    }
}