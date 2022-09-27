import React from "react";
import {View, Image, Button, TouchableOpacity,Text, StyleSheet, TextInput} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {cores, fontes,  index, geral} from "../estilos";
import {Link} from '@react-navigation/native';
export default class Logar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Usuario:'',
            Senha:''
        }
    }
    render(){
        return(
    <View style={{width:"100%", height:"100%", display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-end', backgroundColor:'#277BC0'}}>
        <TouchableOpacity
        style={{position:'absolute', left:20, top:50}}
        onPress={() => this.props.navigation.goBack()}
        >
        <Image source={require("../assets/IconBack.png")}
        />
        </TouchableOpacity>
        <Image style={{position:'absolute', top:30 , left:'50%'}}
        source={require("../assets/Autism-bro.png")}
        />
        <View style={{backgroundColor:'white', width:'100%', height:'80%' , top:'7%' ,borderTopRightRadius:50, borderTopLeftRadius:50, justifyContent:'center', alignItems:'center'}}>
        <View style={{top:-120, alignItems:'center'}}>
            
            <Image style={{position:'relative', left:-80, top:22}} source={require("../assets/user.png")}/>
            <TextInput 
            style={{ width:220, textAlign:'center', borderBottomWidth : 1.0, borderColor:'#0D5692'}}
            placeholder={'E-mail'}
            onChangeText={
                Usuario => {this.setState({Usuario})}
            }
            />
        </View>
        <View style={{top:-80, alignItems:'center'}}>
            
            <Image style={{position:'relative', left:-80, top:22}} source={require("../assets/padlock.png")}/>
            <TextInput 
            style={{ width:220, textAlign:'center', borderBottomWidth : 1.0, borderColor:'#0D5692'}}
            placeholder={'Senha'}
            onChangeText={
                Senha => {this.setState({Senha})}
            }
            />
        </View>
        <View style={{borderRadius:20, width:220,height:55, position:'relative', top: 50, alignItems:'center',
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