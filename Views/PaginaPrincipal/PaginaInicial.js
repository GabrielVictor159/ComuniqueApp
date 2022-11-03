import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PaginaUsuario from "./Usuario/PaginaUsuario";
import TabBarIcons from "../../componentes/TabBarIcons";
import Personalizar from "./Configurações/Personalizar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Comunicacao from "./Mensagens/Comunicacao";
import Jogos from "./Usuario/Jogos/Jogos";
import Cronograma from "./Usuario/Cronograma/Cronograma";
import { color } from "react-native-reanimated";
import UsuarioController from "../../Controller/UsuarioController";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const TabBarIconsConfig = {
  sizeActive: 50,
  sizeInactive: 50,
  backgroundColorActive: "",
  backgroundColorInactive: "",
  topActive: 0,
  topInactive: 0,
};
const Tab = createMaterialTopTabNavigator();
export default function PaginaInicial (props) {
      const usuarioController = new UsuarioController()
   const [usuario, setUsuario] = useState(usuarioController.usuario) 
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const [display, setDisplay] = useState('flex');
  const navigation = useNavigation();
  
  useEffect(()=>{
    setInterval(()=>{
      setUsuario(usuarioController.usuario)
    },1000)
  }, [])
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="PaginaUsuario"
        tabBarPosition="bottom"
        screenOptions={{
          swipeEnabled:swipeEnabled,
          tabBarIndicatorStyle: {
            height: 0,
          },
          tabBarStyle: { height: 80, display:display },
          tabBarIconStyle:{alignItems:'center'},
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="PaginaUsuario"
          
          children={()=><PaginaUsuario usuarioController={usuarioController} usuario={usuario} setUsuario={setUsuario} swipe={setSwipeEnabled} navDisplay={setDisplay}/>}
          options={{
            tabBarLabel:({focused})=>{
              return <Text style={{fontSize:14, top:12, color:focused===true?"#277BC0":"black"}}>{'Principal'}</Text>
            },
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabBarIcons
                focused={focused}
                name="Home"
                sizeActive={TabBarIconsConfig.sizeActive}
                sizeInactive={TabBarIconsConfig.sizeInactive}
                backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
                backgroundColorInactive={
                  TabBarIconsConfig.backgroundColorInactive
                }
                topActive={TabBarIconsConfig.topActive}
                topInactive={TabBarIconsConfig.topInactive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Comunicacao"
          children={()=><Comunicacao usuarioController={usuarioController} usuario={usuario} chats={usuario.chats} setUsuario={setUsuario}  swipe={setSwipeEnabled} navDisplay={setDisplay}/>}
          
          options={{
            
            tabBarLabel:({focused})=>{
              return <Text style={{fontSize:14, top:12, color:focused===true?"#277BC0":"black"}}>{'Conversas'}</Text>
            },
            headerShown: false,
           
            tabBarIcon: ({ focused }) => (
              <TabBarIcons
                focused={focused}
                name="Chat"
                sizeActive={TabBarIconsConfig.sizeActive}
                sizeInactive={TabBarIconsConfig.sizeInactive}
                backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
                backgroundColorInactive={
                  TabBarIconsConfig.backgroundColorInactive
                }
                topActive={TabBarIconsConfig.topActive}
                topInactive={TabBarIconsConfig.topInactive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Personalizar"
          children={()=><Personalizar navigationReset={navigation}  usuario={usuarioController} setUsuario={setUsuario} />}
          options={{
            tabBarLabel:({focused})=>{
              return <Text style={{fontSize:14, top:12, color:focused===true?"#277BC0":"black"}}>{'Configurações'}</Text>
            },
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabBarIcons
                focused={focused}
                name="Personalizar"
                sizeActive={TabBarIconsConfig.sizeActive}
                sizeInactive={TabBarIconsConfig.sizeInactive}
                backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
                backgroundColorInactive={
                  TabBarIconsConfig.backgroundColorInactive
                }
                topActive={TabBarIconsConfig.topActive}
                topInactive={TabBarIconsConfig.topInactive}
              />
            ),
          }}
        />
        
      </Tab.Navigator>
      </NavigationContainer>
      
  );
        
}

