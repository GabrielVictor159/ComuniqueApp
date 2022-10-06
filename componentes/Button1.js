import React from "react";
import {View, TouchableOpacity,Text} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
// botão com gradiente reutilizado no codigo
const button1 = (props)=>{
    const navigation = useNavigation();
    return (
    <View style={{borderRadius:props.borderRadius, width:props.width ,height:props.height,  alignItems:'center',
                 shadowColor: "black",
                 shadowOffset: {
                         width: 0,
                         height: 3,
                 },
                 shadowOpacity: 0.25,
                 shadowRadius: 4.65,
                 elevation: 5
            
            }}>
         <LinearGradient
                style={{ borderRadius:props.borderRadius, width:'100%', height:'100%'}}
                start={{x:0, y:0}}
                end={{x:1,y:1}}
                colors={[props.color1 , props.color2]}
                >
                  
                  <TouchableOpacity
                  style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center' }}
                  onPress={()=>
                 
                  props.tipoNavegacao==='navigate'
                  ?navigation.navigate(props.navegacao)
                  : props.tipoNavegacao==='push'?navigation.push(props.navegacao)
                  : props.tipoNavegacao==='popToPop'?navigation.popToPop()
                  : props.tipoNavegacao==='dispatch'?navigation.dispatch(props.navegacao)
                  : props.tipoNavegacao==='reset'?navigation.reset({
                    index:0,
                    routes: [{name: props.navegacao}]
                  })
                  : navigation.goBack()

                }
                  >
                  <Text style={{color:'white' , fontWeight: "normal", fontSize:props.fontSize}}>{props.texto}</Text>
                  </TouchableOpacity>
                  
                </LinearGradient>
                </View>
    );
}
export default button1;