import React, { useState, useEffect } from "react";
import { View } from "react-native";
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
import { TouchableOpacity } from "react-native-gesture-handler";
import IconBack from "../../../../../../assets/IconBack";
import { Text } from "react-native";
const Stack = createStackNavigator();
export default function Questionario (props){
    const navigation = useNavigation();
   const questoes = new QuestionarioController()
   let questoesSelecionadas= [];
   const [respostas, setRespostas] = useState(0);
   const [questions, setQuestions] = useState([])
   useEffect(() => {
    props.swipe(false);
    props.display("none");
    props.setIconBackDisplay('none')
    return function () {
      props.swipe(true);
      props.display("flex");
      props.setIconBackDisplay('flex')
    };
  });
    function mapQuestion(){
        let questions =[]
        for(let i=0; i<10; i++){
            if(questoesSelecionadas.length===0){
                let x = parseInt(Math.random() * 10);
                questoesSelecionadas.push(x)
                questions.push(questoes.Questionario[x])
                }
                else{
                    let boolean = true;
                    while(boolean===true){
                        let x =parseInt(Math.random()*10)
                        
                        let find = questoesSelecionadas.find(element => element===x)
                        if(find !== x){
                            boolean=false;
                            questoesSelecionadas.push(x)
                            questions.push(questoes.Questionario[x])
                        }
                    }
                }
            }
            return questions.map((value, index) => {
                return(
                  
                    <Stack.Screen key={index}
                    name={""+index}
                    children={()=><QuestoesComponente RC={value.RC} R1={value.R1} R2={value.R2} R3={value.R3} R4={value.R4}
                    titulo={value.titulo} buttonText={index==9 ?'Resultado' : 'Proxima questão'} 
                    respostas={respostas} setRespostas={setRespostas} navigate={index==9?'resultado':''+(index+1)}
                    />}
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


    return(
        <>
        <NavigationContainer independent={true}>
            <Stack.Navigator
            initialRouteName="0"
            transitionConfig={() => fromLeft(1000)}
            >
            
                {mapQuestion()}
            
            <Stack.Screen
                 name={'resultado'}
                 children={()=><Resultado respostas={respostas} navigation={navigation}/>}
                 options={{
                   tabBarStyle: { display: "none" },
                   headerShown: false,
                   tabBarShowLabel: false,
                   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                 }}
               />
            </Stack.Navigator>
        </NavigationContainer>
        <View style={{width:'100%', height:130, position:'absolute', top:0, backgroundColor:'#0F4C75'}}>
        <Text style={{color:'white', fontSize:20, top:'60%', left:'5%'}}>{'Questionario '}</Text>
        
        </View>
        <View style={{ position: "absolute", top: 30, left: 20}}>
        <TouchableOpacity
          onPress={() => {
           navigation.goBack();
          }}
        >
          
          <IconBack width={28} height={29} />
        </TouchableOpacity>
      </View>
        </>
    );
}