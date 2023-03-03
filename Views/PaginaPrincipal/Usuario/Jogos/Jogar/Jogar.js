import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React from "react";
import Chessboard from "../../../../../componentes/Chess/componentes/Chessboard";
import JogarView from "./JogarView";
const Stack = createStackNavigator();
export default function Jogar(props) {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="JogarView"
        transitionConfig={() => fromLeft(1000)}
      >
        <Stack.Screen
          name="JogarView"
          children={() => <JogarView />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
        <Stack.Screen
          name="ChessEasy"
          children={() => <Chessboard dificulty={'easy'} swipe={props.swipe} display={props.display} setIconBackDisplay={props.setIconBackDisplay} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="ChessMedium"
          children={() => <Chessboard dificulty={'medium'} swipe={props.swipe} display={props.display} setIconBackDisplay={props.setIconBackDisplay} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="ChessHard"
          children={() => <Chessboard dificulty={'hard'} swipe={props.swipe} display={props.display} setIconBackDisplay={props.setIconBackDisplay} />}
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