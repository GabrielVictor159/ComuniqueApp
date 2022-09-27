import React from "react";
import {View, Image, Button, TouchableOpacity,Text, StyleSheet} from "react-native";
import Cadastrar from "./Cadastrar";
import Logar from "./Logar";
import {LinearGradient} from 'expo-linear-gradient';
import {cores, fontes,  index, geral} from "../estilos";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        }
    }
    render(){
        return(
    <View style={{flex:1, width:'100%', height:'100%', justifyContent:'flex-end', alignItems:'center' , backgroundColor:'#277BC0'}}>
        <Image style={{position:'absolute', left:20, top:100}}
        source={require("../assets/selfcare(2).png")}
        />
        <Text style={{color:'white' ,fontWeight: "normal", fontSize:40, position:'absolute', left:120, top:100}}>
            Comunique
        </Text>
        <View style={{backgroundColor:'white', width:'100%', height:'40%' ,  borderTopRightRadius:100, justifyContent:'center', alignItems:'center'}}>
        <Image style={{position:'relative', top:'-50%'}}
        source={require("../assets/Autism-rafiki.png")}
        />
        <View style={{borderRadius:10, width:'60%',height:'20%', position:'relative', top:'-45%',
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
                style={{ borderRadius:10, width:'100%', height:'100%'}}
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
                </View>
                <View style={{width:'60%', height:'20%',position:'relative',top:'-40%', borderRadius:10,
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
                style={{ borderRadius:10, width:'100%', height:'100%'}}
                start={{x:0, y:0}}
                end={{x:1,y:1}}
                colors={['#C9C9C9'  , '#FFFFFF']}
                >
                  <TouchableOpacity
                  style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center' }}
                  
                  onPress={()=>
                    this.props.navigation.navigate('Cadastrar')
                }
                  >
                  <Text style={{color:'#0D5692' , fontWeight: "normal", fontSize:20}}>Cadastrar</Text>
                  </TouchableOpacity>
                </LinearGradient>
               </View>
        </View>
    </View>
    );
    }
}
export default Login;