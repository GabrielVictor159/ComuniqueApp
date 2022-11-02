import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ListaCronogramaView from "./ListaCronogramaView";
import ExcluirCronograma from "../ExcluirCronograma";
import AdicionarCronograma from "../AdicionarCronograma";
const Stack = createStackNavigator();
export default function ListaCronograma(props){
  return (
    <>
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="ListaCronogramaView"
        transitionConfig={() => fromLeft(1000)}
      >
       
        <Stack.Screen
          name="ListaCronogramaView"
          children={()=><ListaCronogramaView cronograma={props.cronograma} popWidth={props.popWidth} busca={props.busca} setBusca={props.setBusca}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
        
       <Stack.Screen
          name="ExcluirCronograma"
          children={()=><ExcluirCronograma setCronograma={props.setCronograma} cronograma={props.cronograma} popWidth={props.popWidth} busca={props.busca} setBusca={props.setBusca}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
        <Stack.Screen
          name="AdicionarCronograma"
          children={()=><AdicionarCronograma setCronograma={props.setCronograma} cronograma={props.cronograma} popWidth={props.popWidth} busca={props.busca} setBusca={props.setBusca}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
    
    </>
  );
}