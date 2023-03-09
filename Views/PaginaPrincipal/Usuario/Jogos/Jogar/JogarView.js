import React from "react";
import { View } from "react-native";
import { cores } from "../../../../../estilos";
import Atividades from "../../../../../componentes/Atividades";
const properties = {
  color: '#0F4C75',
  with: 350,
  height: 160,
  borderRadius: 35,
  iconType: "playButton",
  gradient: true,
  textColor: "white",
  fontSize: 20,
  imageWidth: 180,
  imageHeight: 180,
  imageLeft: 0,
  imageTop: -40,
  iconWidth: 50,
  iconHeight: 50,
};
export default function JogarView(props) {
  return (
    <View
      style={{
        width: "100%",
        height: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        top: "10%",
      }}
    >
      <Atividades

        width={properties.with}
        height={properties.height}
        borderRadius={properties.borderRadius}
        iconType={properties.iconType}
        iconWidth={properties.iconWidth}
        iconHeight={properties.iconHeight}
        color={properties.color}
        image={require("../../../../../assets/Chess-pana2.png")}
        text="Facil"
        textColor={properties.textColor}
        fontSize={properties.fontSize}
        imageWidth={properties.imageWidth}
        imageHeight={properties.imageHeight}
        imageLeft={properties.imageLeft}
        imageTop={properties.imageTop}
        navigate={'ChessEasy'}
      />
      <Atividades
        width={properties.with}
        height={properties.height}
        borderRadius={properties.borderRadius}
        iconType={properties.iconType}
        iconWidth={properties.iconWidth}
        iconHeight={properties.iconHeight}
        color={properties.color}
        image={require("../../../../../assets/Chess-amico1.png")}
        text="Médio"
        textColor={properties.textColor}
        fontSize={properties.fontSize}
        imageWidth={properties.imageWidth}
        imageHeight={properties.imageHeight}
        imageLeft={properties.imageLeft}
        imageTop={properties.imageTop}
        navigate={'ChessMedium'}
      />
      <Atividades
        width={properties.with}
        height={properties.height}
        borderRadius={properties.borderRadius}
        iconType={properties.iconType}
        color={properties.color}
        iconWidth={properties.iconWidth}
        iconHeight={properties.iconHeight}
        image={require("../../../../../assets/Chess-bro1.png")}
        text="Dificil"
        textColor={properties.textColor}
        fontSize={properties.fontSize}
        imageWidth={properties.imageWidth}
        imageHeight={properties.imageHeight}
        imageLeft={properties.imageLeft}
        imageTop={properties.imageTop}
        navigate={'ChessHard'}
      />
    </View>
  );

}
