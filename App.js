
import Login from './componentes/Login';
import React from "react";
import { View,  Text, Image,TouchableOpacity , StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {cores, fontes,  index, geral} from "./estilos";
import {LinearGradient} from 'expo-linear-gradient';
import Logar from './componentes/Logar';
import Cadastrar from './componentes/Cadastrar';
function Mensagem1({navigation}){
    return(
        <View style={{flex: 1, width:'100%',height:'100%', rowDirection:'row', justifyContent:'flex-start',  alignItems:'center', flexWrap:'nowrap', }}>
                <Image style={{position:'relative', top:120}} source={require("./assets/selfcare.png")}/>
                <View style={{position:'relative', top:190 }}>
                <Text style={{fontWeight: "normal", fontSize:30}}>Comunique</Text>
                </View>
                <View style={{width:300, position:'relative', top:260, textAlign:'center'}}>
                <Text style={{fontWeight: "normal", fontSize:17 , textAlign:'center'}}>Um app de comunicação para ajudar alunos com autismo a se comunicar com amigos e professores</Text>
                </View>
                <LinearGradient
                style={{ borderRadius:buttom.borderRadius, width:buttom.width, height:buttom.height, position:'absolute', left:'5%', top:'90%'}}
                start={{x:0, y:0}}
                end={{x:1,y:1}}
                colors={[cores.buttonGradientColor1,cores.buttonGradientColor2]}
                >
                  <TouchableOpacity
                  style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center' }}
                  onPress={()=>
                    navigation.navigate('Login')
                }
                  >
                  <Text style={{color:'white'}}>PULAR</Text>
                  </TouchableOpacity>
                </LinearGradient>
                
                <View style={{position:'absolute', left:'42%', top:'91%', backgroundColor:cores.buttonActive , width:25 , height:25, borderRadius:30}}/>
                <View style={{position:'absolute', left:'52%', top:'91%', backgroundColor:cores.buttonInative , width:25 , height:25, borderRadius:30}}/>
           
                <LinearGradient
                style={{borderRadius:buttom.borderRadius, width:buttom.width, height:buttom.height, position:'absolute', left:'70%', top:'90%'}}
                start={{x:0, y:0}}
                end={{x:1,y:1}}
                colors={[cores.buttonGradientColor1,cores.buttonGradientColor2]}
                >
                  <TouchableOpacity
                  style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center' }}
                  onPress={()=>
                    navigation.navigate('Mensagem2')
                }
                  >
                  <Text style={{color:'white'}}>PRÓXIMO</Text>
                  </TouchableOpacity>
                </LinearGradient>
             
                
        </View>
    );
}
var buttom = StyleSheet.create({


      borderRadius:20, width:100, height:40, justifyContent:'center', alignItems:'center',
  
});
function Mensagem2({navigation}){
    return(
      <View style={{flex: 1, width:'100%',height:'100%', rowDirection:'row', justifyContent:'flex-start',  alignItems:'center', flexWrap:'nowrap', }}>
      <Image style={{position:'relative', top:80}} source={require("./assets/Component8.png")}/>
      <View style={{position:'relative', top:100 }}>
      <Text style={{fontWeight: "normal", fontSize:30}}>Tudo muito simples</Text>
      </View>
      <View style={{width:300, position:'relative', top:160, textAlign:'center'}}>
      <Text style={{fontWeight: "normal", fontSize:17 , textAlign:'center'}}>Nesse app comunicação será feita através de imagens e figuras, para que tudo seja bem mais amigável</Text>
      </View>
      <LinearGradient
      style={{ borderRadius:buttom.borderRadius, width:buttom.width, height:buttom.height,  position:'absolute', left:'5%', top:'90%'}}
      start={{x:0, y:0}}
      end={{x:1,y:1}}
      colors={[cores.buttonGradientColor1,cores.buttonGradientColor2]}
      >
        <TouchableOpacity
        style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center' }}
        onPress={()=>
          navigation.navigate('Login')
      }
        >
        <Text style={{color:'white'}}>PULAR</Text>
        </TouchableOpacity>
      </LinearGradient>
      
      <View style={{position:'absolute', left:'42%', top:'91%', backgroundColor:cores.buttonInative , width:25 , height:25, borderRadius:30}}/>
                <View style={{position:'absolute', left:'52%', top:'91%', backgroundColor:cores.buttonActive , width:25 , height:25, borderRadius:30}}/>
 
      <LinearGradient
      style={{borderRadius:buttom.borderRadius, width:buttom.width, height:buttom.height, position:'absolute', left:'70%', top:'90%'}}
      start={{x:0, y:0}}
      end={{x:1,y:1}}
      colors={[cores.buttonGradientColor1,cores.buttonGradientColor2]}
      >
        <TouchableOpacity
        style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center' }}
        onPress={()=>
          navigation.navigate('Login')
      }
        >
        <Text style={{color:'white'}}>PRÓXIMO</Text>
        </TouchableOpacity>
      </LinearGradient>
   
      
</View>
    );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mensagem1">
        <Stack.Screen name="Mensagem1" component={Mensagem1} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false}}/>
        <Stack.Screen name="Mensagem2" component={Mensagem2} 
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false}}/>
        <Stack.Screen name='Login' component={Login}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarShowLabel: false}}/>
        <Stack.Screen name='Logar' component={Logar} />
        <Stack.Screen name='Cadastrar' component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


