import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React from "react";
import Cronograma from "./Cronograma/Cronograma";
import Jogos from "./Jogos/Jogos";
import Noticias from "./Noticias/Noticias";
import UsuarioView from "./UsuarioView";

const Stack = createStackNavigator();

export default function PaginaUsuario(props) {



  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="UsuarioView"
        transitionConfig={() => fromLeft(1000)}
      >
        <Stack.Screen
          name="UsuarioView"
          children={() => <UsuarioView swipe={props.swipe} navDisplay={props.navDisplay} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,

          }}
        />
        <Stack.Screen
          name="Cronograma"
          children={() => <Cronograma setJogando={props.setJogando} swipe={props.swipe} navDisplay={props.navDisplay} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Jogos"
          children={() => <Jogos setJogando={props.setJogando} swipe={props.swipe} navDisplay={props.navDisplay} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Noticias"
          children={() => <Noticias setJogando={props.setJogando} swipe={props.swipe} navDisplay={props.navDisplay} />}
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