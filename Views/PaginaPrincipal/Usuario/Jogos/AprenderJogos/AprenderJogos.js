import React from "react";
import { View } from "react-native";
import Atividades from "../../../../../componentes/Atividades";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import AprenderJogosView from "./AprenderJogosView";
import TextoAprendizagem1 from "./TextoAprendizagem1";
import TextoAprendizagem2 from "./TextoAprendizagem2";
import Questionario from "./Questionario";
const Stack = createStackNavigator();
export default class AprenderJogos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="AprenderJogosView"
          transitionConfig={() => fromLeft(1000)}
        >
          <Stack.Screen
            name="AprenderJogosView"
            component={AprenderJogosView}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="TextoAprendizagem1"
            children={()=><TextoAprendizagem1 swipe={this.props.swipe} display={this.props.display}/>}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="TextoAprendizagem2"
            children={()=><TextoAprendizagem2 swipe={this.props.swipe} display={this.props.display}/>}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Questionario"
            component={Questionario}
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
