import React from "react";
import { View,  Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";

const Atividades = (props) =>{
const position1 = props.height*1.5
return(
        <View style={{width:props.width, height:props.height, borderRadius:props.borderRadius, backgroundColor:props.color, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,}}>
            <Image source={props.image} style={{position:'absolute', left:'65%', top:'-70%', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,}}/>
        <Text style={{left:'10%', top:'13%', fontSize:props.fontSize}}>{props.text}</Text>
        <View style={{width:'40%', height:'20%', backgroundColor:'white', borderRadius:props.borderRadius, justifyContent:'center', left:'5%', top:'30%', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,}}>
            <View style={{width:props.completo, height:'80%', borderRadius:props.borderRadius, backgroundColor:props.color, left:'2%'}}/>
        </View>
        </View>
  
);
}

export default Atividades;