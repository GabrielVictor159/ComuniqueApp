import React from "react";
import { View,  Text, Image,TouchableOpacity , StyleSheet } from "react-native";
import {cores, fontes,  index, geral} from "../estilos";
import {LinearGradient} from 'expo-linear-gradient';
function Mensagem2({navigation}){
    return(
      <View style={{flex: 1, width:'100%',height:'100%', rowDirection:'row', justifyContent:'flex-start',  alignItems:'center', flexWrap:'nowrap', }}>
      <Image style={{position:'relative', top:80}} source={require("../assets/Component8.png")}/>
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

var buttom = StyleSheet.create({


    borderRadius:20, width:100, height:40, justifyContent:'center', alignItems:'center',

});

export default Mensagem2;