import React, { useEffect, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { cores } from "../../../../../estilos";
import Atividades from "../../../../../componentes/Atividades";
import { useNavigation } from "@react-navigation/native";
const properties = {
  color: '#0F4C75',
  with: 350,
  height: 160,
  borderRadius: 35,
  iconType: "text",
  barWidth: "40%",
  barHeight: "10%",
  gradient: true,
  textColor: "white",
  fontSize: 20,
  imageWidth: 180,
  imageHeight: 180,
  imageLeft: 0,
  imageTop: -40,
};
export default function AprenderJogosView(props) {



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
        navigate='TextoAprendizagem1'
        width={properties.with}
        height={properties.height}
        borderRadius={properties.borderRadius}
        iconType={properties.iconType}
        barWidth={properties.barWidth}
        barHeight={properties.barHeight}
        color={properties.color}
        textIcon="Origem e Importancia"
        image={require("../../../../../assets/Learning-rafiki1.png")}
        text="Xadrez"
        text2="Aprendizagem 1"
        textColor={properties.textColor}
        fontSize={properties.fontSize}
        imageWidth={properties.imageWidth}
        imageHeight={properties.imageHeight}
        imageLeft={properties.imageLeft}
        imageTop={properties.imageTop}
      />
      <Atividades
        navigate='TextoAprendizagem2'
        width={properties.with}
        height={properties.height}
        borderRadius={properties.borderRadius}
        iconType={properties.iconType}
        barWidth={properties.barWidth}
        barHeight={properties.barHeight}
        color={properties.color}
        image={require("../../../../../assets/Learning-bro1.png")}
        text="Xadrez"
        text2="Aprendizagem 2"
        textIcon="Tabuleiro e Peças"
        textColor={properties.textColor}
        fontSize={properties.fontSize}
        imageWidth={properties.imageWidth}
        imageHeight={properties.imageHeight}
        imageLeft={properties.imageLeft}
        imageTop={properties.imageTop}
      />
      <Atividades
        navigate='Questionario'
        width={properties.with}
        height={properties.height}
        borderRadius={properties.borderRadius}
        iconType={properties.iconType}
        barWidth={properties.barWidth}
        barHeight={properties.barHeight}
        color={properties.color}
        textIcon='Reforçe seu conhecimento'
        textIconFontSize={13}
        image={require("../../../../../assets/Learning-pana1.png")}
        text="Xadrez"
        text2="Questionario"
        textColor={properties.textColor}
        fontSize={properties.fontSize}
        imageWidth={properties.imageWidth}
        imageHeight={properties.imageHeight}
        imageLeft={properties.imageLeft}
        imageTop={properties.imageTop}
      />

    </View>
  );

}
