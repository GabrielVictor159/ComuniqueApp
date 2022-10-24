import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { fromLeft } from "react-navigation-transitions";
import ComunicacaoView from "./ComunicacaoView";
import Chat from "./Chat";
const Stack = createStackNavigator();
export default function Comunicacao (props){
  return(
    <NavigationContainer independent={true}>
    <Stack.Navigator
      initialRouteName="ComunicacaoView"
      transitionConfig={() => fromLeft(1000)}
    >
      <Stack.Screen
        name="ComunicacaoView"
        component={ComunicacaoView}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
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