import React from "react";
import { View, Text } from "react-native";

const CronogramaAtividade = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "column", alignItems:'center', left:-10}}>
        <Text style={{ fontSize: 15 }}>{props.dia}</Text>
        <Text style={{ color: "#626262", fontSize: 15 }}>{props.mes}</Text>
        <Text style={{ color: "#626262", fontSize: 15}}>{props.ano}</Text>
      </View>
      <View
        style={{
          width: 15,
          height: 15,
          borderRadius: 20,
          backgroundColor: props.color,
          top: 10,
        }}
      />
      <View
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: props.backgroundColor,
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 15,
          left: 15,
          shadowColor: "#000",

          shadowOpacity: 1,
          shadowRadius: 1,

          elevation: 7,
        }}
      >
        <Text style={{ left: "5%" }}>{props.texto}</Text>
        <View
          style={{
            width: "30%",
            height: "30%",
            backgroundColor: props.color,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            position: "absolute",
            top: "10%",
            left: "5%",
          }}
        >
          <Text style={{ color: "white" }}>{props.prazo}</Text>
        </View>
      </View>
    </View>
  );
};

export default CronogramaAtividade;
