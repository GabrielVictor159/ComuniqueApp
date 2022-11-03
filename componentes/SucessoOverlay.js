import { Overlay } from "@rneui/themed";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";


const SucessoOverlay =(props)=>{
return(
    <Overlay isVisible={props.isVisible} onBackdropPress={props.onBackdropPress} fullScreen={false}
    overlayStyle={[
    props.overlayStyle    
    ,{alignItems:'center'}]}
    >   
        <Text>{'\n'}</Text>
        <Image style={{width:100, height:100}}
        source={require("../assets/Sucessful.png")}
        />
        <Text>{'\n'}</Text>
        <Text style={{fontSize:20}}>{props.titulo + "\n"}</Text>
        <View style={{ width:'80%'}}>
        <Text style={{textAlign:'center', color:'#6E6E6E'}}>{props.texto}</Text>
        </View>
        <Text>{'\n\n\n'}</Text>
        <TouchableOpacity style={{ width: props.buttonWidth, height: props.buttonHeight, elevation: 10,
                backgroundColor: props.buttonColor,
                borderRadius: 25,}}
        onPress={()=>{
            {props.buttonAction()}
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

export default SucessoOverlay