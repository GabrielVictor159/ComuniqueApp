import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import UsuarioView from "./UsuarioView";
import Cronograma from "./Cronograma/Cronograma";
import Jogos from "./Jogos/Jogos";
import Noticias from "./Noticias/Noticias";

const Stack = createStackNavigator();

export default function PaginaUsuario(props)  {
  
 

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="UsuarioView"
        transitionConfig={() => fromLeft(1000)}
      >
        <Stack.Screen
          name="UsuarioView"
          children={()=><UsuarioView usuarioController={props.usuarioController} usuario={props.usuario} setUsuario={props.setUsuario}  swipe={props.swipe} navDisplay={props.navDisplay}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
         
          }}
        />
        <Stack.Screen
          name="Cronograma"
          children={()=><Cronograma usuario={props.usuario} setUsuario={props.setUsuario}    swipe={props.swipe} navDisplay={props.navDisplay}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Jogos"
          children={()=><Jogos usuario={props.usuario} setUsuario={props.setUsuario}   swipe={props.swipe} navDisplay={props.navDisplay}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
         <Stack.Screen
          name="Noticias"
          children={()=><Noticias  swipe={props.swipe} navDisplay={props.navDisplay}/>}
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