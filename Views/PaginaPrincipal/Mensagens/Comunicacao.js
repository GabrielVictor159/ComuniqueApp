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
const Stack = createStackNavigator();
export default function Comunicacao (props){
  const chatModel = new UsuarioController();
  let [chats, setChats] = useState(chatModel.usuario.chats);
  let [chatEscolhido, setChatEscolhido] = useState();
 
  return(
    <NavigationContainer independent={true}>
    <Stack.Navigator
      initialRouteName="ComunicacaoView"
      transitionConfig={() => fromLeft(1000)}
    >
      <Stack.Screen
        name="ComunicacaoView"
        children={()=><ComunicacaoView chats={chats} setChats={setChats} setChatEscolhido={setChatEscolhido}/>}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Chat"
        children={()=><Chat swipe={props.swipe} chats={chats} chat={chats[chatEscolhido]} setChats={setChats} navDisplay={props.navDisplay}/>}
        
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
     
    </Stack.Navigator>
  </NavigationContainer>
  );
}