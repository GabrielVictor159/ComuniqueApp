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

export default class PaginaUsuario extends React.Component {
  constructor(props){
    super(props);
    this.state ={
     
    }
  }
 

 render(){
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="UsuarioView"
        transitionConfig={() => fromLeft(1000)}
      >
        <Stack.Screen
          name="UsuarioView"
          children={()=><UsuarioView swipe={this.props.swipe} navDisplay={this.props.navDisplay}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
         
          }}
        />
        <Stack.Screen
          name="Cronograma"
          children={()=><Cronograma swipe={this.props.swipe} navDisplay={this.props.navDisplay}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Jogos"
          children={()=><Jogos swipe={this.props.swipe} navDisplay={this.props.navDisplay}/>}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
         <Stack.Screen
          name="Noticias"
          children={()=><Noticias swipe={this.props.swipe} navDisplay={this.props.navDisplay}/>}
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
}