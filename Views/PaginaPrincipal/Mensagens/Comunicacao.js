import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { fromLeft } from "react-navigation-transitions";
import ComunicacaoView from "./ComunicacaoView";
import Chat from "./Chat";
import UsuarioController from "../../../Controller/UsuarioController";
import ContatosDaUnidade from "./ContatosDaUnidade";
const Stack = createStackNavigator();
export default function Comunicacao (props){
  
  let [chatEscolhido, setChatEscolhido] = useState();
 function setChats(callback){
  let z = props.usuario
  z.chats = callback
  props.setUsuario(z)
 }
  return(
    <NavigationContainer independent={true}>
    <Stack.Navigator
      initialRouteName="ComunicacaoView"
      transitionConfig={() => fromLeft(1000)}
    >
      <Stack.Screen
        name="ComunicacaoView"
        children={()=><ComunicacaoView usuario={props.usuario} setUsario={props.setUsario}  setChatEscolhido={setChatEscolhido}/>}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Chat"
        children={()=><Chat swipe={props.swipe} chats={props.chats} chat={props.chats[chatEscolhido]} setChats={setChats} navDisplay={props.navDisplay}/>}
        
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ContatosDaUnidade"
        children={()=><ContatosDaUnidade swipe={props.swipe} navDisplay={props.navDisplay} chats={props.chats} setChats={setChats} setChatEscolhido={setChatEscolhido}/>}
        
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}