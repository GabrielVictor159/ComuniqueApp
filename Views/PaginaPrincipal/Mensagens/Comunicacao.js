import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React, { useState } from "react";
import { fromLeft } from "react-navigation-transitions";
import Chat from "./Chat";
import ComunicacaoView from "./ComunicacaoView";
import ContatosDaUnidade from "./ContatosDaUnidade";
const Stack = createStackNavigator();
export default function Comunicacao(props) {

  let [chatEscolhido, setChatEscolhido] = useState();



  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="ComunicacaoView"
        transitionConfig={() => fromLeft(1000)}
      >
        <Stack.Screen
          name="ComunicacaoView"
          children={() => <ComunicacaoView setChatEscolhido={setChatEscolhido} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Chat"
          children={() => <Chat swipe={props.swipe} navDisplay={props.navDisplay} />}

          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="ContatosDaUnidade"
          children={() => <ContatosDaUnidade swipe={props.swipe} navDisplay={props.navDisplay} setChatEscolhido={setChatEscolhido} />}

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