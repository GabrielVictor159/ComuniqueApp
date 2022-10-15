import React from "react";
import { View } from "react-native";
import { cores } from "../estilos";
import Atividades from "../componentes/Atividades";
const properties ={
    with:350,
    height:160,
    borderRadius:35,
    iconType:'barComplete',
    barWidth:'40%',
    barHeight:'10%',
    gradient:true,
    textColor:'white',
    fontSize:20,
    imageWidth:180,
    imageHeight:180,
    imageLeft:0,
    imageTop:-40,
}
export default class AprenderJogos extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View style={{width:'100%', height:'80%', justifyContent:'space-between', alignItems:'center', top:'10%'}}>
                
                 <Atividades width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
                 barWidth={properties.barWidth}  barHeight={properties.barHeight} gradient={true} color1={cores.jogosGradientColor1} color2={cores.jogosGradientColor2}
                    completo='80%' image={require('../assets/Learning-rafiki1.png')} text='Xadrez'  text2='Aprendizagem 1' textColor={properties.textColor}
                    fontSize={properties.fontSize} imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
                 <Atividades width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
                 barWidth={properties.barWidth} barHeight={properties.barHeight} gradient={true} color1={cores.jogosGradientColor1} color2={cores.jogosGradientColor2}
                    completo='80%' image={require('../assets/Learning-bro1.png')} text='Xadrez'  text2='Aprendizagem 1' textColor={properties.textColor}
                    fontSize={properties.fontSize}  imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
                    <Atividades width={properties.with} height={properties.height} borderRadius={properties.borderRadius}  iconType={properties.iconType} 
                 barWidth={properties.barWidth} barHeight={properties.barHeight} gradient={true} color1={cores.jogosGradientColor1} color2={cores.jogosGradientColor2}
                    completo='80%' image={require('../assets/Learning-pana1.png')} text='Xadrez'  text2='Aprendizagem 1' textColor={properties.textColor}
                    fontSize={properties.fontSize}   imageWidth={properties.imageWidth} imageHeight={properties.imageHeight} imageLeft={properties.imageLeft} imageTop={properties.imageTop}/>
               
            </View>
        );
    }
}