import React from "react";
import { Animated, View,  Image, StyleSheet } from "react-native";
import Atividades from "../componentes/Atividades";
import ImagePerfil from "../componentes/ImagePerfil";
import PaginaUsuarioStyle from "../estilos/Views_Estilos/PaginaUsuarioStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { cores } from "../estilos";
import GestureRecognizer from 'react-native-swipe-gestures';
import swipeConfig from "../configs/swipeConfig";
const properties ={
    with:350,
    height:105,
    borderRadius:35,
    iconType:'barComplete',
    barWidth:'40%',
    barHeight:'15%',
    textColor:'black',
    fontSize:20,
    imageWidth:140,
    imageHeight:140,
    imageLeft:'50%',
    imageTop:-40,
}
export default class PaginaUsuario extends React.Component{

constructor(props){

    super(props);
    this.state={
       
    }
}  
    render(){
      
            return(
            
                <GestureRecognizer
                onSwipeLeft={(state)=>this.props.navigation.navigate('Comunicacao')}
                config={swipeConfig}
                style={style.PaginaUsuarioStyle.container}
                >
          
                
                <View style={style.PaginaUsuarioStyle.menuSuperior}>
                <View style={style.PaginaUsuarioStyle.imageMenuContainer}>
                <ImagePerfil shadow='true' width={80} height={80} shadowTop={10} shadowColor='#5C5C5C' shadowOpacity={0.2} text='Felipe' fontSize={15} 
                imageUrl={require('../assets/PerfilImage.jpg')}
                />
                
                </View>
               
               
                
            </View>
            
            
                
            <View style={style.PaginaUsuarioStyle.containerAtividades}>
            <Atividades navigate='Jogos' width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
                 barWidth={properties.barWidth}  barHeight={properties.barHeight} color='#7BDAAC'
                    completo='80%' image={require('../assets/Woman_meditates_under_a_rainbow.png')} text='Jogos'   textColor={properties.textColor}
                    fontSize={properties.fontSize} imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
                 <Atividades width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
                 barWidth={properties.barWidth} barHeight={properties.barHeight}  color='#E25959'
                    completo='30%' image={require('../assets/Man_with_laptop_uploading_files_to_cloud.png')} text='Cronograma'   textColor={properties.textColor}
                    fontSize={properties.fontSize}  imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
                    <Atividades width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
                 barWidth={properties.barWidth} barHeight={properties.barHeight} 
                    completo='60%' image={require('../assets/Man_erases_the_inscription_from_the_board.png')} text='Estudo Diario' color='#EFE378'  textColor={properties.textColor}
                    fontSize={properties.fontSize}   imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
                </View>

                </GestureRecognizer>
           
        );
    }
}

const style = StyleSheet.create({
    PaginaUsuarioStyle



})