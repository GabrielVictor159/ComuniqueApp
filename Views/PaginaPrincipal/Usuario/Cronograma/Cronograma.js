import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ListaCronograma from "./Lista/ListaCronograma";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import CalendarioCronograma from "./Calendario/CalendarioCronograma";
import TabBarIcons from "../../../../componentes/TabBarIcons";
import IconBack from "../../../../assets/IconBack";
import { useNavigation } from "@react-navigation/native";
import CronogramaController from "../../../../Controller/CronogramaController";
const Tab = createMaterialTopTabNavigator();
let popI = 2;
const cores = {
  background: '#3282B8',
  red1: "#B75353",
  red2: "#563838",
  blue: "#539FB7",
  green: "#3C8544",
  pink: "#B953B2",
  purple: "#8953B9",
  cyan: "#53B9B5",
  yellow: "#ECEC0C",
  orange: "#E19625",
  black: "#252525",
};
export default function Cronograma(props) {
  useEffect(() => {
    props.swipe(false);
    props.navDisplay("none");
    return function () {
      props.swipe(true);
      props.navDisplay("flex");
    };
  }, []);
  const [busca, setBusca] = useState('')
  const cronogramaController = new CronogramaController().cronograma;
  const [cronograma, setCronograma] = useState(cronogramaController)
  const [popWidth, setPopWidth] = useState(0);
  const navigation = useNavigation();

  return (
    <>
      <NavigationContainer independent={true}>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 130,
            backgroundColor: "#3282B8",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ top: -25, fontSize: 20, left: "5%", color: "white" }}>
            {"Cronograma"}
          </Text>
        </View>
        <Tab.Navigator
          initialRouteName="ListaCronograma"
          screenOptions={{
            tabBarStyle: {
              height: 130,
              backgroundColor: "#3282B8",
              justifyContent: "flex-end",
              width: "60%",
              elevation: 0,
              flexDirection: "column",
              left: "40%",
            },
            tabBarActiveTintColor: "#e91e63",
            tabBarLabelStyle: {
              textTransform: "none",
              color: "white",
              fontSize: 20,
              flexGrow: 0,
            },
            tabBarShowIcon: false,
            tabBarContentContainerStyle: {
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            },

            tabBarIndicatorStyle: {
              width: 100,
              left: 15,
              height: 5,
              backgroundColor: "white",
            },
          }}
        >
          <Tab.Screen
            name="ListaCronograma"
            children={() => <ListaCronograma cronograma={cronograma} setCronograma={setCronograma} popWidth={popWidth} busca={busca} setBusca={setBusca}/>}
            options={{
              tabBarLabel: "Dia",
            }}
          />
          <Tab.Screen
            name="CalendarioCronograma"
            children={() => <CalendarioCronograma cronograma={cronograma} setCronograma={setCronograma} popWidth={popWidth} busca={busca} setBusca={setBusca} />}
            options={{
              tabBarLabel: "Mes",
            }}
          />
        </Tab.Navigator>
        <View style={{ position: "absolute", top: 45, left: "85%" }}>
          <TouchableOpacity
            onPress={() => {
              popI % 2 === 0
                ? [setPopWidth(250), popI++]
                : [setPopWidth(0), popI++];
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../../assets/PopMenu.png")}
            />
          </TouchableOpacity>
        </View>
      </NavigationContainer>
      <TouchableOpacity
        style={{ position: "absolute", top: 40, left: "3%" }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View>
          <IconBack width={30} height={30} />
        </View>
      </TouchableOpacity>
    </>
  );
}
