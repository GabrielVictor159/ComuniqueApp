import React from "react";
import {View, TouchableOpacity,Text} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
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
                  navigation.navigate(props.navegacao)
                }
                  >
                  <Text style={{color:'white' , fontWeight: "normal", fontSize:props.fontSize}}>{props.texto}</Text>
                  </TouchableOpacity>
                  
                </LinearGradient>
                </View>
    );
}
export default button1;