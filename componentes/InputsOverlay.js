import { Overlay } from "@rneui/themed";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View, TextInput } from "react-native";

function InputsOverlay (props){
   
return(
    <Overlay isVisible={props.isVisible} onBackdropPress={props.onBackdropPress} fullScreen={false}
    overlayStyle={[
    props.overlayStyle    
    ,{alignItems:'center'}]}
    >   
        <Text>{'\n'}</Text>
        <Text style={props.tituloStyle}>{props.titulo}</Text>
        <Text>{'\n'}</Text>
        {props.Placeholder1 !==undefined?
        <>
        <View style={{ justifyContent:'center' }}>
            <Image
              style={{ top: "50%", left:'10%' }}
              source={props.iconInput1}
            />
            <TextInput
              style={props.InputStyle1}
              keyboardType={props.KeyboardType1}
              secureTextEntry={props.SecureText1}
              placeholder={props.Placeholder1}
              onChangeText={(value) => {
                props.onChangeText1(value)
              }}
            />
          </View>
        
          </>
          : <></>}
          {props.Placeholder2 !==undefined?
        <>
        <View style={{ justifyContent:'center' }}>
            <Image
              style={{ top: "50%", left:'10%' }}
              source={props.iconInput1}
            />
            <TextInput
              style={props.InputStyle2}
              keyboardType={props.KeyboardType2}
              secureTextEntry={props.SecureText2}
              placeholder={props.Placeholder2}
              onChangeText={(value) => {
                props.onChangeText2(value)
              }}
            />
          </View>
          
          </>
          : <></>}
          {props.Placeholder3 !==undefined?
        <>
        <View style={{ justifyContent:'center' }}>
            <Image
              style={{ top: "50%", left:'10%' }}
              source={props.iconInput1}
            />
            <TextInput
              style={props.InputStyle3}
              keyboardType={props.KeyboardType3}
              secureTextEntry={props.SecureText3}
              placeholder={props.Placeholder3}
              onChangeText={(value) => {
                props.onChangeText3(value)
              }}
            />
          </View>
          
          </>
          : <></>}
          <Text>{'\n'}</Text>
        <TouchableOpacity style={{ width: props.buttonWidth, height: props.buttonHeight, elevation: 10,
                backgroundColor: props.buttonColor,
                borderRadius: 25,}}
        onPress={()=>{
           const x = props.buttonAction(props.actionParam1, props.actionParam2, props.actionParam3, props.actionParam4)
         
           props.overlaySucesso(x)
           
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

export default InputsOverlay