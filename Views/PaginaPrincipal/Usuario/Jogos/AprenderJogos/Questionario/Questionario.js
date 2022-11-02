import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import QuestoesComponente from "./QuestoesComponente";
import QuestionarioController from "../../../../../../Controller/QuestionarioController";
import Resultado from "./Resultado";
import { useNavigation } from "@react-navigation/native";
import IconBack from "../../../../../../assets/IconBack";
import { Text } from "react-native";
import { Value } from "react-native-reanimated";
const Stack = createStackNavigator();
export default function Questionario(props) {
  const navigation = useNavigation();
  const questoes = new QuestionarioController();
  const [respostas, setRespostas] = useState(0);
  const [questions, setQuestions] = useState(shuffleArray(questoes.Questionario));
  
  useEffect(() => {
    props.swipe(false);
   
    props.display("none");
    props.setIconBackDisplay("none");
    return function () {
      props.swipe(true);
      props.display("flex");
      props.setIconBackDisplay("flex");
    };
  });
  function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function mapQuestion() {
  
     
    return questions.map((value, i) => {
     return( 
      <Stack.Screen
     key={i}
      name={""+i}
      children={() => (
        <QuestoesComponente
          RC={value.RC}
          R1={value.R1}
          R2={value.R2}
          R3={value.R3}
          R4={value.R4}
          titulo={value.titulo}
          buttonText={ i==9 ?'Resultado' : 'Proxima questão'}
          respostas={respostas}
          setRespostas={setRespostas}
          navigate={i==9?'resultado':''+(i+1)}
        />
      )}
      options={{
        tabBarStyle: { display: "none" },
        headerShown: false,
        tabBarShowLabel: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
     );
  });
     
  }

  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="0"
          transitionConfig={() => fromLeft(1000)}
        >
          
       
          {mapQuestion()}
          <Stack.Screen
            name={"resultado"}
            children={() => (
              <Resultado respostas={respostas} navigation={navigation} />
            )}
            options={{
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarShowLabel: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <View
        style={{
          width: "100%",
          height: 130,
          position: "absolute",
          top: 0,
          backgroundColor: "#0F4C75",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, top: "60%", left: "5%" }}>
          {"Questionario "}
        </Text>
      </View>
      <View style={{ position: "absolute", top: 30, left: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AprenderJogosView');
          }}
        >
          <IconBack width={28} height={29} />
        </TouchableOpacity>
      </View>
    </>
  );
}
