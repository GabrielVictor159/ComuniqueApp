import React, { useContext, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { UserContext } from "../../../App";
import Atividades from "../../../componentes/Atividades";
import ImagePerfil from "../../../componentes/ImagePerfil";
import PaginaUsuarioStyle from "../../../estilos/Views_Estilos/PaginaUsuarioStyle";
const properties = {
  with: 350,
  height: 105,
  borderRadius: 35,
  iconType: "text",
  barWidth: "40%",
  barHeight: "15%",
  textColor: "white",
  text2Top: 10,
  fontSize: 20,
  fontSize2: 12,
  imageWidth: 140,
  imageHeight: 140,
  imageLeft: "50%",
  imageTop: -40,
};

export default function UsuarioView(props) {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setInterval(() => {

    }, 1000)
  }, [])

  return (
    <>

      <View
        style={style.PaginaUsuarioStyle.container}
      >
        <View style={style.PaginaUsuarioStyle.menuSuperior}>
          <Image style={style.PaginaUsuarioStyle.imageBanner} source={user.fotoBackground} />
          <View style={style.PaginaUsuarioStyle.imageMenuContainer}>

            <ImagePerfil
              shadow="true"
              width={80}
              height={80}
              shadowTop={10}
              shadowColor="#5C5C5C"
              shadowOpacity={0.2}
              text={user.nomeUsuario}
              fontSize={15}
              fontColor='white'
              imageUrl={user.fotoPerfil}
            />
          </View>
        </View>

        <View style={style.PaginaUsuarioStyle.containerAtividades}>
          <Atividades
            navigate="Jogos"
            width={properties.with}
            height={properties.height}
            borderRadius={properties.borderRadius}
            iconType={properties.iconType}
            barWidth={properties.barWidth}
            barHeight={properties.barHeight}
            color="#0F4C75"
            image={require("../../../assets/Woman_meditates_under_a_rainbow.png")}
            text="Jogos"
            text2="Jogos para colocar o conhecimento em prática"
            text2Top={properties.text2Top}
            textColor={properties.textColor}
            fontSize={properties.fontSize}
            fontSize2={properties.fontSize2}
            imageWidth={properties.imageWidth}
            imageHeight={properties.imageHeight}
            imageLeft={properties.imageLeft}
            imageTop={properties.imageTop}
          />
          <Atividades
            navigate="Cronograma"
            width={properties.with}
            height={properties.height}
            borderRadius={properties.borderRadius}
            iconType={properties.iconType}
            barWidth={properties.barWidth}
            barHeight={properties.barHeight}
            color="#3282B8"
            text2="Um calendario completo com todos os afazeres "
            text2Top={properties.text2Top}
            image={require("../../../assets/Man_with_laptop_uploading_files_to_cloud.png")}
            text="Cronograma"
            textColor={properties.textColor}
            fontSize={properties.fontSize}
            fontSize2={properties.fontSize2}
            imageWidth={properties.imageWidth}
            imageHeight={properties.imageHeight}
            imageLeft={properties.imageLeft}
            imageTop={properties.imageTop}
          />
          <Atividades
            navigate='Noticias'
            width={properties.with}
            height={properties.height}
            borderRadius={properties.borderRadius}
            iconType={properties.iconType}
            barWidth={properties.barWidth}
            barHeight={properties.barHeight}
            image={require("../../../assets/Man_erases_the_inscription_from_the_board.png")}
            text="Noticias"
            color="#69B1C9"
            text2="Notícias educacionais diárias e atualizadas"
            text2Top={properties.text2Top}
            textColor={properties.textColor}
            fontSize={properties.fontSize}
            fontSize2={properties.fontSize2}
            imageWidth={properties.imageWidth}
            imageHeight={properties.imageHeight}
            imageLeft={properties.imageLeft}
            imageTop={properties.imageTop}
          />
        </View>
      </View>
    </>
  );

}

const style = StyleSheet.create({
  PaginaUsuarioStyle,
});