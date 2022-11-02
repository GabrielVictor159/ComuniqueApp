import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ExcluirCronograma from "../ExcluirCronograma";
import AdicionarCronograma from "../AdicionarCronograma";
import CalendarioCronogramaView from "./CalendarioCronogramaView";
const Stack = createStackNavigator();
export default function CalendarioCronograma(props){
  return (
    <>
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="CalendarioCronogramaView"
        transitionConfig={() => fromLeft(1000)}
      >
       
        <Stack.Screen
          name="CalendarioCronogramaView"
          children={()=><CalendarioCronogramaView cronograma={props.cronograma} popWidth={props.popWidth} busca={props.busca} setBusca={props.setBusca}/>}
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