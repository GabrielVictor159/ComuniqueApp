import { Overlay } from "@rneui/themed";
import React from "react";
import { Image, Text, View } from "react-native";
import ImagePerfil from "./ImagePerfil";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
export default function InputImagesPerfil(props){
 
    return(
      
        <Overlay isVisible={props.isVisible} onBackdropPress={props.onBackdropPress} fullScreen={false}
        overlayStyle={[
        props.overlayStyle    
        ,{alignItems:'center'}]}>
            <Text>{'\n'}</Text>
            <Text style={props.styleTituloImage1}>{props.tituloImage1}</Text>
            <TouchableOpacity 
            onPress={()=>
            {props.setPickerBanner(true)}
            }
            >
              <View style={{width:300, height:150, borderWidth:1, elevation:10}}>
              <Image style={{width:'100%', height:'100%'}} source={props.imageBanner}/>
              </View>
            
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <TouchableOpacity
            onPress={()=>
              {props.setPickerImagePerfil(true);
             
              }
              }
            >
              <View style={{width:80, height:80,elevation:10, borderWidth:1, borderRadius:40}}>
            <ImagePerfil
              width={'100%'}
              height={'100%'}
              imageUrl={props.imagePerfil}
            />
            </View>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
             <TouchableOpacity style={{ width: props.buttonWidth, height: props.buttonHeight, elevation: 10,
                backgroundColor: props.buttonColor,
                borderRadius: 25,}}
        onPress={()=>{
           const x = props.buttonAction(props.imageBanner, props.imagePerfil)
           
           props.setIsVisible(x)
           
        }}
        >
            <View
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                {props.buttonText}
              </Text>
            </View>
          </TouchableOpacity>
        </Overlay>
        
        
    );
}

