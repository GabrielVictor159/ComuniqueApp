import React, { useEffect, useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AprenderJogos from "./AprenderJogos";
import { NavigationContainer } from '@react-navigation/native';
import Jogar from "./Jogar";
import { LinearGradient } from 'expo-linear-gradient';
import { cores } from "../estilos";
import IconBack from "../assets/IconBack";
import { TouchableOpacity } from "react-native";
const Tab = createMaterialTopTabNavigator();

function MyTabs(){
    return(
        <>
        
        <LinearGradient style={{width:'100%', height:150, position:'absolute', top:0,
            
    }}
        colors={[cores.jogosGradientColor1, cores.jogosGradientColor2]} start={[0, 0]} end={[1, 1]}></LinearGradient>
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {height:150, justifyContent:'flex-end', backgroundColor:'transparent', shadowColor: "green",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            
            elevation: 11, },
            
            tabBarLabelStyle: {textTransform:'none', color:'white', fontSize:20},
           
            tabBarIndicatorStyle: {width:150, left:30, height:5, backgroundColor:'white'}
        }}
        >
      <Tab.Screen name="Aprenda" component={AprenderJogos} 
      
      />
      <Tab.Screen name="Jogue" component={Jogar} />
    </Tab.Navigator>
    
    </>
    );
}

export default function Jogos(props){
  
    return(
        <NavigationContainer
        independent={true}
        >
            
          <MyTabs />
          <View style={{position:'absolute', top:50, left:20}}>
            <TouchableOpacity 
            onPress={()=>{
                
               props.navigation.goBack();
                
            }}
            >
            <IconBack width={28} height={29} />
            </TouchableOpacity>
            
        </View>
        </NavigationContainer>
    );
}