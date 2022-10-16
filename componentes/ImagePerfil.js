import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';
import Shadow from "./Shadow";
const ImagePerfil = (props)=>{
    const radius = props.width + props.height /2;
    const style = StyleSheet.create({
        container:{
            width:props.width, height:props.height, resizeMode: 'cover',
        borderRadius: radius,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

        }
    }) 
    
   
    return(
        <>
        <Shadow shadow={props.shadow} width={props.width} height={props.height} borderRadius={radius} shadowColor={props.shadowColor} shadowTop={props.shadowTop} shadowLeft={props.shadowLeft} shadowOpacity={props.shadowOpacity} blur={props.blur}/>
        <View style={style.container}>
                    
                    <Image source={props.imageUrl} style={{width:'100%', height:'100%',   resizeMode: 'cover'}}/>
                    
                    </View>
                    <Text style={{top:+15, fontSize:props.fontSize}}>
                        {props.text!=null?
                        props.text
                        :''
                        }
                    </Text>
  
          </>          
    );
}

export default ImagePerfil;


    