import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React, { createContext, useState } from 'react';
import { fromLeft } from "react-navigation-transitions";
import Cadastrar from "./Views/Login/Cadastrar";
import Logar from "./Views/Login/Logar";
import Login from "./Views/Login/Login";
import Mensagem1 from "./Views/MensagensIniciais/Mensagem1";
import Mensagem2 from "./Views/MensagensIniciais/Mensagem2";
import PaginaInicial from "./Views/PaginaPrincipal/PaginaInicial";

const Stack = createStackNavigator();
export const UserContext = createContext("");
function App(navigation) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>

  );
}

export default App;
