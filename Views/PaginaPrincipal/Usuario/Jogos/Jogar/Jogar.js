import JogarView from "./JogarView";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Chessboard from "../../../../../componentes/Chess/componentes/Chessboard";
const Stack = createStackNavigator();
export default function Jogar(props){
   
    return(
        <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="JogarView"
          transitionConfig={() => fromLeft(1000)}
        >
          <Stack.Screen
            name="JogarView"
            children={()=><JogarView />}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
            }}
          />
           <Stack.Screen
            name="ChessEasy"
            children={()=><Chessboard dificulty={'easy'} swipe={props.swipe} display={props.display} setIconBackDisplay={props.setIconBackDisplay}/>}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="ChessMedium"
            children={()=><Chessboard dificulty={'medium'} swipe={props.swipe} display={props.display} setIconBackDisplay={props.setIconBackDisplay}/>}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="ChessHard"
            children={()=><Chessboard dificulty={'hard'} swipe={props.swipe} display={props.display} setIconBackDisplay={props.setIconBackDisplay}/>}
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