import React from "react";
import {View, Image, Button, TouchableOpacity,Text, StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {cores, fontes,  index, geral} from "../estilos";
import {Link} from '@react-navigation/native';
export default class Logar extends React.Component{
    render(){
        return(
    <View style={{width:"100%", height:"100%", display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-end', backgroundColor:'#277BC0'}}>
        <View style={{backgroundColor:'white', width:'100%', height:'80%' , top:'5%' ,borderTopRightRadius:50, borderTopLeftRadius:50, justifyContent:'center', alignItems:'center'}}>
        <View style={{borderRadius:20, width:220,height:80, position:'relative', top: 50, alignItems:'center',
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
                style={{ borderRadius:20, width:'100%', height:'100%'}}
                start={{x:0, y:0}}
                end={{x:1,y:1}}
                colors={[cores.buttonGradientColor1 , cores.buttonGradientColor2]}
                >
                  <TouchableOpacity
                  style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center' }}
                  onPress={()=>
                    this.props.navigation.navigate('Logar')
                }
                  >
                  <Text style={{color:'white' , fontWeight: "normal", fontSize:20}}>Logar</Text>
                  </TouchableOpacity>
                  
                </LinearGradient>
               <TouchableOpacity
               onPress={()=>
                this.props.navigation.navigate('Cadastrar')}
               >
                <Text
                style={{color:'#277BC0', fontSize:16, top:20}}
                >Esqueceu a senha?</Text>
               </TouchableOpacity>
               <TouchableOpacity
               onPress={()=>
                this.props.navigation.navigate('Cadastrar')}
               >
                <Text
                style={{color:'#277BC0', fontSize:22, top:90}}
                >Cadastrar-se</Text>
               </TouchableOpacity>
        </View>
        
            
    </View>
    </View>
        );
    }
}