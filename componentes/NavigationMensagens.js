import React from "react";
import { View} from "react-native";
import Button1 from "./Button1";
import {useNavigation} from '@react-navigation/native';
// componente que sera utilizado nas duas mensagens iniciais para navegar entre elas
const NavigationMensagens = (props)=>{
    const navigation = useNavigation();
    if(props.screenNumber==1){
        return (
            <View style={{width:'90%', height:'5%', justifyContent:'space-between', flexDirection:'row', position:'absolute', top:'90%', alignItems:'center'}}>
                
            <Button1 width={'28%'} height={'100%'} borderRadius={20} tipoNavegacao='navigate' navegacao={props.navigationButton1} fontSize={15}  texto={props.button1Text} color1={props.buttonColor1} color2={props.buttonColor2}/>
            <View style={{ width:'20%', height:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
               
            <View style={{backgroundColor:props.buttonColor1 , width:25 , height:25, borderRadius:20}}/>
            <View style={{backgroundColor:'#D9D9D9' , width:25 , height:25, borderRadius:20}}/>
                
            </View>
            <Button1 width={'28%'} height={'100%'} borderRadius={20} tipoNavegacao='navigate' navegacao={props.navigationButton2}  fontSize={15}  texto={props.button2Text} color1={props.buttonColor1} color2={props.buttonColor2}/>
            </View>
        );
    }
    else if(props.screenNumber==2){
        return (
            <View style={{width:'90%', height:'5%', justifyContent:'space-between', flexDirection:'row', position:'absolute', top:'90%', alignItems:'center'}}>
            <Button1 width={'28%'} height={'100%'} borderRadius={20} tipoNavegacao='navigate' navegacao={props.navigationButton1} fontSize={15}  texto={props.button1Text} color1={props.buttonColor1} color2={props.buttonColor2}/>
            <View style={{ width:'20%', height:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{backgroundColor:'#D9D9D9' , width:25 , height:25, borderRadius:20}}/>
            <View style={{backgroundColor:props.buttonColor1 , width:25 , height:25, borderRadius:20}}/>
                
            </View>
            <Button1 width={'28%'} height={'100%'} borderRadius={20} tipoNavegacao='navigate' navegacao={props.navigationButton2}  fontSize={15}  texto={props.button2Text} color1={props.buttonColor1} color2={props.buttonColor2}/>
            </View>
        );
    }
    else{
        return (
            <View style={{width:'90%', height:'5%', justifyContent:'space-between', flexDirection:'row', position:'absolute', top:'90%', alignItems:'center'}}>
            <Button1 width={'28%'} height={'100%'} borderRadius={20} tipoNavegacao='navigate' navegacao={props.navigationButton1} fontSize={15}  texto={props.button1Text} color1={props.buttonColor1} color2={props.buttonColor2}/>
            <View style={{ width:'20%', height:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                
            </View>
            <Button1 width={'28%'} height={'100%'} borderRadius={20} tipoNavegacao='navigate' navegacao={props.navigationButton2}  fontSize={15}  texto={props.button2Text} color1={props.buttonColor1} color2={props.buttonColor2}/>
            </View>
        );
    }
    }

    export default NavigationMensagens;