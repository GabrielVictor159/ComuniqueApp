import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { fromLeft } from "react-navigation-transitions";
import NoticiasController from "../../../../Controller/NoticiasController";
import NoticiasView from "./NoticiasView";
import NoticiasOneView from "./NoticiasOneView";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();
export default function Noticias(props){
    useEffect(() => {
        props.swipe(false);
        props.navDisplay("none");
        return function () {
          props.swipe(true);
          props.navDisplay("flex");
        };
      }, []);
   const Noticias = new NoticiasController();
    const navigation = useNavigation();
   const [noticias, setNoticias]= useState(Noticias.Noticias)
   const [noticiaEscolha, setNoticiaEscolha]= useState();
    return(
        <NavigationContainer independent={true}>
             <Stack.Navigator
      initialRouteName="NoticiasView"
      transitionConfig={() => fromLeft(1000)}
    >
      <Stack.Screen
        name="NoticiasView"
        children={()=><NoticiasView noticias={noticias} setNoticias={setNoticias} navigation={navigation} setNoticiaEscolha={setNoticiaEscolha}/>}
        options={{
            tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="NoticiaOneView"
        children={()=><NoticiasOneView noticia={noticiaEscolha}/>}
        
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
     
    </Stack.Navigator>
        </NavigationContainer>
    );
}