import { Overlay } from "@rneui/themed";
import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import ImagePerfil from "./ImagePerfil";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import keys from "../configs/keys";
import { UserContext } from "../App";
export default function InputImagesPerfil(props) {
  const { user, setUser } = useContext(UserContext);
  return (

    <Overlay isVisible={props.isVisible} onBackdropPress={props.onBackdropPress} fullScreen={false}
      overlayStyle={[
        props.overlayStyle
        , { alignItems: 'center' }]}>
      <Text>{'\n'}</Text>
      <Text style={props.styleTituloImage1}>{props.tituloImage1}</Text>

      <Text>{'\n'}</Text>
      <TouchableOpacity
        onPress={() => {
          props.setPickerImagePerfil(true);

        }
        }
      >
        <View style={{ width: 80, height: 80, elevation: 10, borderWidth: 1, borderRadius: 40, backgroundColor: 'white', overflow: 'hidden' }}>
          {
            props.imagePerfil === user.fotoPerfil ?
              <Image style={{ width: '100%', height: '100%' }} source={{ uri: `${keys.linkBackEnd}images/${props.imagePerfil}` }} />
              : props.imagePerfil === 'useIcon.png'
                ? <Image style={{ width: '100%', height: '100%' }} source={{ uri: `${keys.linkBackEnd}images/${props.imagePerfil}` }} />
                : <Image style={{ width: '100%', height: '100%', borderRadius: 40 }} source={{ uri: `${props.imagePerfil.assets[0].uri}` }} />
          }
        </View>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      <TouchableOpacity style={{
        width: props.buttonWidth, height: props.buttonHeight, elevation: 10,
        backgroundColor: props.buttonColor,
        borderRadius: 25,
      }}
        onPress={() => {
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

