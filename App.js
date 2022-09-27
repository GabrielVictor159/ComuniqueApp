import Mensagem1 from './componentes/Mensagem1';
import Mensagem2 from './componentes/Mensagem2';
import Login from './componentes/Login';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logar from './componentes/Logar';
import Cadastrar from './componentes/Cadastrar';
import {Image, TouchableOpacity} from 'react-native';
const Stack = createNativeStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mensagem1">
        <Stack.Screen name="Mensagem1" component={Mensagem1} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false}}/>
        <Stack.Screen name="Mensagem2" component={Mensagem2} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false}}/>
        <Stack.Screen name='Login' component={Login}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false}}/>
        <Stack.Screen name='Logar' component={Logar} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false  }}/>
        <Stack.Screen name='Cadastrar' component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


