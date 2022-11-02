import React from "react";
import { useNavigation } from "@react-navigation/native";
import CronogramaCalendarStyle from "../../../../estilos/Views_Estilos/CronogramaCalendarStyle";
import {View, Image, TextInput, TouchableOpacity, StyleSheet, Text} from "react-native"
export default function PopMenu(props){
    const navigation = useNavigation()
    return(
        <View
        style={[
          styles.CronogramaCalendarStyle.frameContainer,
          { width: props.popWidth },
        ]}
      >
        <View
          style={{ width: "80%", flexDirection: "row", alignItems: "center" }}
        >
          <Image
            style={{ width: 40, height: 42 }}
            source={require("../../../../assets/Lupa.png")}
          />
          <TextInput
            style={{ color: "white", fontSize: 15, left: 10 }}
            placeholder={"Pesquisar"}
            placeholderTextColor={"white"}
            onChangeText={(value) => props.setBusca(value)}
          />
        </View>
        <View style={{ width: "80%" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate('AdicionarCronograma')
            }}
          >
            <Image
              style={{ width: 40, height: 42 }}
              source={require("../../../../assets/AdicionarItem.png")}
            />
            <Text style={{ color: "white", fontSize: 15, left: 10 }}>
              {"Criar"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate('ExcluirCronograma')
            }}
          >
            <Image
              style={{ width: 40, height: 42 }}
              source={require("../../../../assets/Lixeira.png")}
            />
            <Text style={{ color: "white", fontSize: 15, left: 10 }}>
              {"Excluir"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    CronogramaCalendarStyle,
  });