import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Button1 from "../componentes/Button1";
export default class Cadastrar extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
    <View style={{width:"100%", height:"100%", display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-end', backgroundColor:'#277BC0'}}>

       <View style={{backgroundColor:'white', width:'100%', height:'80%' , top:'7%' ,borderTopRightRadius:50, borderTopLeftRadius:50, justifyContent:'center', alignItems:'center'}}>
            <View>
            <Button1 width={220} height={55} borderRadius={20} navegacao='Logar'  texto='Cadastrar'/>
            </View>
       </View>
    </View>
        );
    }
}