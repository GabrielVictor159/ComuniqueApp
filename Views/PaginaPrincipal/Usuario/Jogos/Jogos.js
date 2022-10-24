import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AprenderJogos from "./AprenderJogos/AprenderJogos";
import { NavigationContainer } from "@react-navigation/native";
import Jogar from "./Jogar";
import { LinearGradient } from "expo-linear-gradient";
import { cores } from "../../../../estilos";
import IconBack from "../../../../assets/IconBack";
import { TouchableOpacity } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { renderNode } from "@rneui/themed/dist/config";
import { useNavigation } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();
function MyTabs() {
  const [swipe, setSwipe]= useState(true);
  const [display, setDisplay]= useState('flex');

  return (
    <>
     
      <Tab.Navigator
        screenOptions={{
          swipeEnabled:swipe,
          tabBarStyle: {
            height: 150,
            justifyContent: "flex-end",
            backgroundColor: '#0F4C75',
            shadowColor: "green",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            display:display,
          },

          tabBarLabelStyle: {
            textTransform: "none",
            color: "white",
            fontSize: 20,
          },

          tabBarIndicatorStyle: {
            width: 150,
            left: 30,
            height: 5,
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen name="Aprenda" children={()=><AprenderJogos swipe={setSwipe} display={setDisplay}/>} />
        <Tab.Screen name="Jogue" component={Jogar} />
      </Tab.Navigator>
    </>
  );
}

export default function Jogos (props){
  useEffect(() => {
    props.swipe(false);
  props.navDisplay('none');
  return function (){
    props.swipe(true);
  props.navDisplay('flex');
  };
  }, []);


const navigation = useNavigation();
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
      <View style={{ position: "absolute", top: 50, left: 20 }}>
        <TouchableOpacity
          onPress={() => {
           navigation.goBack();
          }}
        >
          <IconBack width={28} height={29} />
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
        
}
