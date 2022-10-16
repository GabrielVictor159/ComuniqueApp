import React from "react";
import { View } from "react-native";
import { cores } from "../estilos";
import Atividades from "../componentes/Atividades";
const properties ={
    with:350,
    height:160,
    borderRadius:35,
    iconType:'playButton',
    gradient:true,
    textColor:'white',
    fontSize:20,
    imageWidth:180,
    imageHeight:180,
    imageLeft:0,
    imageTop:-40,
    iconWidth:50,
    iconHeight:50,
}
export default class Jogar extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View style={{width:'100%', height:'80%', justifyContent:'space-between', alignItems:'center', top:'10%'}}>
                
            <Atividades width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
            gradient={true} color1={cores.jogosGradientColor1} color2={cores.jogosGradientColor2}
            iconWidth={properties.iconWidth} iconHeight={properties.iconHeight}   image={require('../assets/Chess-pana2.png')} text='Facil'  textColor={properties.textColor}
               fontSize={properties.fontSize} imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
            <Atividades width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
            gradient={true} color1={cores.jogosGradientColor1} color2={cores.jogosGradientColor2}
            iconWidth={properties.iconWidth} iconHeight={properties.iconHeight}   image={require('../assets/Chess-amico1.png')} text='Médio'  textColor={properties.textColor}
               fontSize={properties.fontSize}  imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
               <Atividades width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
            gradient={true} color1={cores.jogosGradientColor1} color2={cores.jogosGradientColor2}
             iconWidth={properties.iconWidth} iconHeight={properties.iconHeight}   image={require('../assets/Chess-bro1.png')} text='Dificil'   textColor={properties.textColor}
               fontSize={properties.fontSize}   imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
          
       </View>
        );
    }
}