import React from "react";
import {View, TouchableOpacity,Text} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import PersonalizarIcons from "../assets/PersonalizarIcons";
// botão com gradiente reutilizado no codigo
const PersonalizarOption = (props)=>{
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
                colors={['#D3D3D3' , '#FCFCFC']}
                >
                  
                  <TouchableOpacity
                  style={{width:'100%', height:'100%', flexDirection:'row', alignItems:'center' }}
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
                    <View style={{left:20}}>
                    <PersonalizarIcons icon={props.icon} width={29} height={29}/>
                    </View>
                   
                  <Text style={{color:props.textColor , fontWeight: "normal", fontSize:props.fontSize, left:45}}>{props.texto}</Text>
                  </TouchableOpacity>
                  
                </LinearGradient>
                </View>
    );
}
export default PersonalizarOption;