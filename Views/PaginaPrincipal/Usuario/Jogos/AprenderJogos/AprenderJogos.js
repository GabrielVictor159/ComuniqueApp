import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Atividades from "../../../../../componentes/Atividades";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import AprenderJogosView from "./AprenderJogosView";
import TextoAprendizagem1 from "./TextoAprendizagem1";
import TextoAprendizagem2 from "./TextoAprendizagem2";
import Questionario from "./Questionario/Questionario";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Stack = createStackNavigator();
export default function AprenderJogos(props) {
  const navigation = useNavigation();


  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="AprenderJogosView"
          transitionConfig={() => fromLeft(1000)}
        >
          <Stack.Screen
            name="AprenderJogosView"
            children={() => <AprenderJogosView setIconBackDisplay={props.setIconBackDisplay} />}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="TextoAprendizagem1"
            children={() => <TextoAprendizagem1 setIconBackDisplay={props.setIconBackDisplay} swipe={props.swipe} display={props.display} />}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="TextoAprendizagem2"
            children={() => <TextoAprendizagem2 setIconBackDisplay={props.setIconBackDisplay} swipe={props.swipe} display={props.display} />}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Questionario"
            children={() => <Questionario setIconBackDisplay={props.setIconBackDisplay} swipe={props.swipe} display={props.display} />}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>


    </>
  );

}
