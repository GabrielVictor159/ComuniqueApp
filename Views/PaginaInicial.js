import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PaginaUsuario from "./PaginaUsuario";
import TabBarIcons from "../componentes/TabBarIcons";
import Mensagens from "./Mensagens";
import School from "./School";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const TabBarIconsConfig = {
  sizeActive:120,
  sizeInactive:50,
  backgroundColorActive:'white',
  backgroundColorInactive:'',
  topActive:-20,
  topInactive:0,

}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <SafeAreaView style={{flex:1}}>
    <Tab.Navigator
      initialRouteName="PaginaUsuario"
     
      screenOptions={{
        tabBarPosition:'bootom',
        tabBarIndicatorStyle:{
          height:0
        },
        tabBarStyle:{height:80, },
        
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="PaginaUsuario"
        component={PaginaUsuario}
        options={{
          
          tabBarShowLabel:false,
          headerShown: false,
          
          tabBarIcon: ({ focused}) => (
            <TabBarIcons focused={focused} name='Home'
             sizeActive={TabBarIconsConfig.sizeActive} 
             sizeInactive={TabBarIconsConfig.sizeInactive} 
             backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
             backgroundColorInactive={TabBarIconsConfig.backgroundColorInactive}
             topActive={TabBarIconsConfig.topActive}
             topInactive={TabBarIconsConfig.topInactive}
             />
          ),
          
        }}
      />
      <Tab.Screen
        name="Mensagens"
        component={Mensagens}
        options={{
          tabBarShowLabel:false,
          headerShown: false,
          
          tabBarIcon: ({ focused}) => (
            <TabBarIcons focused={focused} name='Chat'
            sizeActive={TabBarIconsConfig.sizeActive} 
            sizeInactive={TabBarIconsConfig.sizeInactive} 
            backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
            backgroundColorInactive={TabBarIconsConfig.backgroundColorInactive}
            topActive={TabBarIconsConfig.topActive}
            topInactive={TabBarIconsConfig.topInactive}
             />
          ),
          
        }}
      />
    <Tab.Screen
        name="School"
        component={Mensagens}
        options={{
          tabBarShowLabel:false,
          headerShown: false,
          
          tabBarIcon: ({ focused}) => (
            <TabBarIcons focused={focused} name='School'
            sizeActive={TabBarIconsConfig.sizeActive} 
            sizeInactive={TabBarIconsConfig.sizeInactive} 
            backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
            backgroundColorInactive={TabBarIconsConfig.backgroundColorInactive}
            topActive={TabBarIconsConfig.topActive}
            topInactive={TabBarIconsConfig.topInactive}
             />
          ),
          
        }}
      />
     
    </Tab.Navigator>
    </SafeAreaView>
  );
}

export default function PaginaInicial() {
  return (
    <NavigationContainer
    independent={true}
    >
      <MyTabs />
    </NavigationContainer>
  );
}

