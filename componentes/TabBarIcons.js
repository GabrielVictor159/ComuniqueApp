import React from "react";
import { Image, Text, View } from "react-native";
import { cores } from "../estilos";

const TabBarIcons = (props) => {
  if (props.name === "Home") {
    if (props.focused === true) {
      return (
        <View
          style={{
            width: props.sizeActive,
            height: props.sizeActive,
            borderRadius: props.sizeActive,
            backgroundColor: props.backgroundColorActive,
            justifyContent: "center",
            alignItems: "center",
            top: props.topActive,
          }}
        >
          <Image
            style={{ width: "60%", height: "60%" }}
            source={require("../assets/TabBarIconHomeActive.png")}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            width: props.sizeInactive,
            height: props.sizeInactive,
            borderRadius: props.sizeInactive,
            backgroundColor: props.backgroundColorInactive,
            justifyContent: "center",
            alignItems: "center",
            top: props.topInactive,
          }}
        >
          <Image
            style={{ width: "60%", height: "60%" }}
            source={require("../assets/TabBarIconHomeInactive.png")}
          />
        </View>
      );
    }
  } else if (props.name === "Personalizar") {
    if (props.focused === true) {
      return (
        <View
          style={{
            width: props.sizeActive,
            height: props.sizeActive,
            borderRadius: props.sizeActive,
            backgroundColor: props.backgroundColorActive,
            justifyContent: "center",
            alignItems: "center",
            top: props.topActive,
          }}
        >
          <Image
            style={{ width: "58%", height: "60%" }}
            source={require("../assets/TabBarIconSettingsActive.png")}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            width: props.sizeInactive,
            height: props.sizeInactive,
            borderRadius: props.sizeInactive,
            backgroundColor: props.backgroundColorInactive,
            justifyContent: "center",
            alignItems: "center",
            top: props.topInactive,
          }}
        >
          <Image
            style={{ width: "58%", height: "60%" }}
            source={require("../assets/TabBarIconSettingsInactive.png")}
          />
        </View>
      );
    }
  } else if (props.name === "Chat") {
    if (props.focused === true) {
      return (
        <View
          style={{
            width: props.sizeActive,
            height: props.sizeActive,
            borderRadius: props.sizeActive,
            backgroundColor: props.backgroundColorActive,
            justifyContent: "center",
            alignItems: "center",
            top: props.topActive,
          }}
        >
          <Image
            style={{ width: "60%", height: "60%" }}
            source={require("../assets/TabBarIconChatActive.png")}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            width: props.sizeInactive,
            height: props.sizeInactive,
            borderRadius: props.sizeInactive,
            backgroundColor: props.backgroundColorInactive,
            justifyContent: "center",
            alignItems: "center",
            top: props.topInactive,
          }}
        >
          {props.mensagensNaoLidas != undefined && props.mensagensNaoLidas > 0 ?
            <View style={{ width: 20, height: 20, backgroundColor: cores.buttonGradientColor1, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', transform: [{ translateX: 18 }, { translateY: -20 }] }}>
              <Text>{props.mensagensNaoLidas}</Text>

            </View>
            : <></>
          }
          <Image
            style={{ width: "65%", height: "60%" }}
            source={require("../assets/TabBarIconChatInactive.png")}
          />
        </View>
      );
    }
  }
};

export default TabBarIcons;
