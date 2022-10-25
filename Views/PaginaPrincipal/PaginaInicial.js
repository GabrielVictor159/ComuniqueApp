import React from "react";
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
const TabBarIconsConfig = {
  sizeActive: 50,
  sizeInactive: 50,
  backgroundColorActive: "",
  backgroundColorInactive: "",
  topActive: 0,
  topInactive: 0,
};
const Tab = createMaterialTopTabNavigator();
export default class PaginaInicial extends React.Component {
  constructor(){
    super();
    this.state = {
      swipeEnabled:true,
      display:'flex'
    }
  }
  setSwipeEnabled = (callback) => {
    this.setState({swipeEnabled:callback})
  }
  setDisplay = (callback) =>{
    this.setState({display:callback})
  }
render(){
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="PaginaUsuario"
        tabBarPosition="bottom"
        screenOptions={{
          swipeEnabled:this.state.swipeEnabled,
          tabBarIndicatorStyle: {
            height: 0,
          },
          tabBarStyle: { height: 80, display:this.state.display },
          tabBarIconStyle:{alignItems:'center'},
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="PaginaUsuario"
          
          children={()=><PaginaUsuario swipe={this.setSwipeEnabled} navDisplay={this.setDisplay}/>}
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
          children={()=><Comunicacao swipe={this.setSwipeEnabled} navDisplay={this.setDisplay}/>}
          
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
          component={Personalizar}
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
}


