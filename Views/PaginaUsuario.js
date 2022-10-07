import React from "react";
import { View,  Image } from "react-native";
import ImagePerfil from "../componentes/ImagePerfil";


export default class PaginaUsuario extends React.Component{

constructor(props){
    
    super(props);
    this.setState={

    }
}

    render(){
        return (
            <View style={{width:'100%', height:'100%', flexDirection:'column', backgroundColor:'#277BC0'}}>
                
                <View style={{width:'100%', height:240, flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'white'
            ,  borderBottomRightRadius:50, borderBottomLeftRadius:50,
            
            
            }}>
                <View style={{alignItems:'center', top:10}}>
                <ImagePerfil shadow='true' width={80} height={80} shadowTop={10} shadowColor='#5C5C5C' shadowOpacity={0.2} text='Felipe' fontSize={15} 
                imageUrl={require('../assets/PerfilImage.jpg')}
                />
                
                </View>
                </View>
                <Image  source={require('../assets/settingsIcon.png')} style={{position:'absolute', left:'90%', top:'5%'}}/>
                <Image source={require('../assets/IconReturn_PaginaUsuario.png')} style={{position:'absolute', left:'5%', top:'5%'}}/>
                
            </View>
        );
    }
}