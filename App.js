import { StatusBar } from 'expo-status-bar';
import MensagemInicial from './componentes/MensagemInicial';
import Login from './componentes/Login';
import React from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Mensagem1({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require("./assets/selfcare.png")}/>
                <Text>Comunique</Text>
                <Text>Um app de comunicação para ajudar alunos com autismo a se comunicar com amigos e professores</Text>
                </View>
                <View>
                <Button 
                title="PULAR"
                color="blue"
                onPress={()=>
                    navigation.navigate('Login')
                }
                />
                <Button 
                title="PRÓXIMO"
                color="blue"
                onPress={() => navigation.navigate('Mensagem2')}
                />
                </View>
        </View>
    );
}
function Mensagem2({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require("./assets/Component8.png")}/>
                <Text>Tudo muito simples</Text>
                <Text>Um app de comunicação para ajudar alunos com autismo a se comunicar com amigos e professores</Text>
                </View>
                <View>
                <Button 
                title="PULAR"
                color="blue"
                onPress={()=>
                    navigation.navigate('Login')
                }
                />
                <Button 
                title="PRÓXIMO"
                color="blue"
                onPress={() => navigation.navigate('Login')}
                />
                </View>
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
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


