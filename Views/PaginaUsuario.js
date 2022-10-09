import React from "react";
import { Animated, View,  Image, StyleSheet } from "react-native";
import Atividades from "../componentes/Atividades";
import ImagePerfil from "../componentes/ImagePerfil";
import PaginaUsuarioStyle from "../estilos/Views_Estilos/PaginaUsuarioStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { cores } from "../estilos";
import GestureRecognizer from 'react-native-swipe-gestures';
import swipeConfig from "../configs/swipeConfig";

export default class PaginaUsuario extends React.Component{

constructor(props){

    super(props);
    this.state={
        
    }
}

 

    
    render(){
      
            return(
            
                <GestureRecognizer
                onSwipeLeft={(state)=>this.props.navigation.navigate('Mensagens')}
                config={swipeConfig}
                style={style.PaginaUsuarioStyle.container}
                >
          
                
                <View style={style.PaginaUsuarioStyle.menuSuperior}>
                <View style={style.PaginaUsuarioStyle.imageMenuContainer}>
                <ImagePerfil shadow='true' width={80} height={80} shadowTop={10} shadowColor='#5C5C5C' shadowOpacity={0.2} text='Felipe' fontSize={15} 
                imageUrl={require('../assets/PerfilImage.jpg')}
                />
                
                </View>
               
                <Image  source={require('../assets/settingsIcon.png')} style={style.PaginaUsuarioStyle.imageSettings}/>
                
            </View>
            <View style={style.PaginaUsuarioStyle.imageReturn}>
            <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.goBack();
                }}
              
                >
                <Image source={require('../assets/IconReturn_PaginaUsuario.png')} />
                </TouchableOpacity>
            </View>
            
                
            <View style={style.PaginaUsuarioStyle.containerAtividades}>
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

                </GestureRecognizer>
           
        );
    }
}

const style = StyleSheet.create({
    PaginaUsuarioStyle



})