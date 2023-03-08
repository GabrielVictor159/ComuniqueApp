import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../../../../../App";
import IconBack from "../../../../../../assets/IconBack";
import keys from "../../../../../../configs/keys";
import QuestoesComponente from "./QuestoesComponente";
import Resultado from "./Resultado";
const Stack = createStackNavigator();
export default function Questionario(props) {
  const navigation = useNavigation();
  const [respostas, setRespostas] = useState(0);
  const [questions, setQuestions] = useState([]);
  const { user, setUser } = useContext(UserContext)

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

  useEffect(() => {
    fetch(`${keys.linkBackEnd}Questoes/LimitRange/${user.instituicao.idInstituicao}/10`)
      .then((response) => {
        if (response.status === 200) {
          setQuestions(response.json())
        }
        else {
          alert("Houve um problema na busca das questões!")
          navigation.goBack()
        }
      })
  }, [])

  function mapQuestion() {

    if(questions.length!=0){
    return questions.map((value, i) => {
      return (
        <Stack.Screen
          key={value.idQuestao}
          name={"" + i}
          children={() => (
            <QuestoesComponente
              RC={value.RespostaCorreta}
              R1={value.Resposta1}
              R2={value.Resposta2}
              R3={value.Resposta3}
              R4={value.Resposta4}
              titulo={value.Titulo}
              buttonText={i == 9 ? 'Resultado' : 'Proxima questão'}
              respostas={respostas}
              setRespostas={setRespostas}
              navigate={i == 9 ? 'resultado' : '' + (i + 1)}
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
