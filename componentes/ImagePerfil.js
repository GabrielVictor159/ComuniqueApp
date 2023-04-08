import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import keys from "../configs/keys";
import Shadow from "./Shadow";
const ImagePerfil = (props) => {
  const radius = props.width + props.height / 2;
  const style = StyleSheet.create({
    container: {
      width: props.width,
      height: props.height,
      resizeMode: "cover",
      borderRadius: 100,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <>
      <Shadow
        shadow={props.shadow}
        width={props.width}
        height={props.height}
        borderRadius={radius}
        shadowColor={props.shadowColor}
        shadowTop={props.shadowTop}
        shadowLeft={props.shadowLeft}
        shadowOpacity={props.shadowOpacity}
        blur={props.blur}
      />
      <View style={style.container}>
        <Image
          source={{ uri: `${keys.linkBackEnd}images/${props.imageUrl}` }}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </View>
      <Text style={{ top: +15, fontSize: props.fontSize, color: props.fontColor }}>
        {props.text != null ? props.text : ""}
      </Text>
    </>
  );
};

export default ImagePerfil;
