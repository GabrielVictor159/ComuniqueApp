import Mensagem1 from "./Views/MensagensIniciais/Mensagem1";
import Mensagem2 from "./Views/MensagensIniciais/Mensagem2";
import Login from "./Views/Login/Login";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Logar from "./Views/Login/Logar";
import Cadastrar from "./Views/Login/Cadastrar";
import { Image, TouchableOpacity } from "react-native";
import PaginaUsuario from "./Views/PaginaPrincipal/Usuario/PaginaUsuario";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { GestureHandlerGestureEvent } from "react-native-gesture-handler";
import { fromLeft } from "react-navigation-transitions";
import PaginaInicial from "./Views/PaginaPrincipal/PaginaInicial";

const Stack = createStackNavigator();

function App(navigation) {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Mensagem1"
        transitionConfig={() => fromLeft(1000)}
      >
        <Stack.Screen
          name="Mensagem1"
          component={Mensagem1}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Mensagem2"
          component={Mensagem2}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Logar"
          component={Logar}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        
        <Stack.Screen
          name="PaginaInicial"
          component={PaginaInicial}
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

export default App;
