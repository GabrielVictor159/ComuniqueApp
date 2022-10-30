import React from "react";
import { Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Resultado(props){
    return(
        <View style={{width:'100%', height:'100%', backgroundColor:'#EAEAEA', alignItems:'center'}}>
            <View style={{width:'100%', height:'70%',top:'22%', alignItems:'center', justifyContent:'space-evenly'}}>
            <Text style={{fontSize:20}}>
                {'Parabéns !!!!'}
            </Text>
            <Text>{'\n'}</Text>
            <Image style={{width:315, height:315}} source={require('../../../../../../assets/Happy-birthday.png')}/>
            <Text>{'\n'}</Text>
            <Text style={{fontSize:20}}>
                {'Sua nota foi '}
            </Text>
            <Text style={{fontSize:25, color:'#3EAC2C'}}>
                {props.respostas}
            </Text>
            <Text>{'\n\n'}</Text>
            <View style={{width:200, height:60,borderRadius:20, flexDirection:'row', alignItems:'center', backgroundColor:'#0F4C75', justifyContent:'center', elevation:12}}>
            
            <TouchableOpacity
            onPress={()=>{
            }}
            >
            <Text style={{color:'white', fontSize:18}}>{'Pratique jogando!'}</Text>
            </TouchableOpacity>
        </View>
            <View style={{top:20}}>
                <TouchableOpacity
                onPress={()=>{
                    props.navigation.navigate('AprenderJogosView')
                }}
                >
                    <Text style={{color:'#0D5692', fontSize:20, elevation:12}}>
                        {'Voltar ao menu'}
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}