import Mensagem1 from './Views/Mensagem1';
import Mensagem2 from './Views/Mensagem2';
import Login from './Views/Login';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import Logar from './Views/Logar';
import Cadastrar from './Views/Cadastrar';
import {Image, TouchableOpacity} from 'react-native';
import RecuperarSenha from './Views/RecuperarSenha';
import PaginaUsuario from './Views/PaginaUsuario';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { GestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { fromLeft } from 'react-navigation-transitions';
const animationConfig={
  animation:'FadeInFromBottomAndroidSpec',
  config:{
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  }
}
const Stack = createStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer
    >
      <Stack.Navigator initialRouteName="Mensagem1"
      transitionConfig={()=>fromLeft(1000)}
      >
        <Stack.Screen name="Mensagem1" component={Mensagem1} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false, 
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS, 
        }}/>
        <Stack.Screen name="Mensagem2" component={Mensagem2} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false ,
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        }}/>
        <Stack.Screen name='Login' component={Login}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false,
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        }}/>
        <Stack.Screen name='Logar' component={Logar} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false  }}/>
        <Stack.Screen name='Cadastrar' component={Cadastrar} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false  }}/>
        <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} />
        <Stack.Screen name='PaginaUsuario' component={PaginaUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


