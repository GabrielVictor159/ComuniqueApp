import React from "react";
import { View, Text } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import swipeConfig from "../../../configs/swipeConfig";
import BackgroundColor2 from "../../../assets/BackgroundColor2";
import ImagePerfil from "../../../componentes/ImagePerfil";
import { cores, geral } from "../../../estilos";
import PersonalizarOption from "../../../componentes/PersonalizarOption";
import { TouchableOpacity } from "react-native";
import PersonalizarIcons from "../../../assets/PersonalizarIcons";
export default class Personalizar extends React.Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          overflow: "visible",
        }}
      >
        <View style={{ position: "absolute", width: "100%", height: "100%", backgroundColor:'#E3E3E3' }}>
          
        </View>
        <View
          style={[
            geral.shadow,
            {
              width: "100%",
              height: 250,
              backgroundColor: "white",
              top: 0,
              position: "absolute",
              alignItems: "center",
            },
          ]}
        >
          <View style={{ top: "80%" }}>
            <ImagePerfil
              shadow="true"
              width={120}
              height={120}
              imageUrl={require("../../../assets/PerfilImage.jpg")}
            />
          </View>
        </View>
        <View style={{ position: "absolute", top: 280, left: "85%" }}>
          <TouchableOpacity>
            <PersonalizarIcons icon="Pencil" width={29} height={29} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", alignItems: "center", top: "20%" }}>
          <PersonalizarOption
            borderRadius={15}
            width="85%"
            height={50}
            color1="#FCFCFC"
            color2="#FCFCFC"
            fontSize={20}
            texto="Alterar Nome"
            icon="Pencil"
          />
          <Text>{"\n"}</Text>
          <PersonalizarOption
            borderRadius={15}
            width="85%"
            height={50}
            color1="#FCFCFC"
            color2="#FCFCFC"
            fontSize={20}
            texto="Alterar Senha "
            icon="Padlock"
          />
          <Text>{"\n"}</Text>
          <PersonalizarOption
            borderRadius={15}
            width="85%"
            height={50}
            color1="#FCFCFC"
            color2="#FCFCFC"
            fontSize={20}
            texto="Alterar E-mail  "
            icon="Email"
          />
          <Text>{"\n"}</Text>
          <PersonalizarOption
            borderRadius={15}
            width="85%"
            height={50}
            color1="#FCFCFC"
            color2="#FCFCFC"
            fontSize={20}
            texto="Sair"
            icon="Logout"
            textColor="#BE0B16"
          />
        </View>
      </View>
    );
  }
}
