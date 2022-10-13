import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AprenderJogos from "./AprenderJogos";
import { NavigationContainer } from '@react-navigation/native';
import Jogar from "./Jogar";
const Tab = createMaterialTopTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
      <Tab.Screen name="Aprenda" component={AprenderJogos} />
      <Tab.Screen name="Jogar" component={Jogar} />
    </Tab.Navigator>
    );
}

export default function Jogos(){
    return(
        <NavigationContainer
        independent={true}
        >
          <MyTabs />
        </NavigationContainer>
    );
}