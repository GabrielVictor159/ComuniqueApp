import React from "react";
import { View, Text } from "react-native";
import { geral } from "../estilos";
import ImagePerfil from "./ImagePerfil";

const Comunicacoes = (props) =>{
    return(
        <View style={[geral.shadow,{width:props.width, height:props.height, backgroundColor:props.backgroundColor,
        flexDirection:'row', alignItems:'center', justifyContent:'flex-start',
        borderRadius:20
        }]}>
            <View style={{left:'2%', position:'absolute'}}>
            <ImagePerfil shadow='true' width={60} height={60}  
                imageUrl={props.imageUrl}
                />
            </View>
           
                <View style={{left:'25%', position:'absolute'}}>
                    <Text style={{top:-10, fontSize:15, fontWeight: 'regular'}}>{props.nomeUsuario}</Text>
                    <Text style={{opacity:0.4}}>{props.mensagem.length < 35
                ? `${props.mensagem}`
                : `${props.mensagem.substring(0, 20)}...`}</Text>
                </View>
                <View style={[{width:130, height:25, top:'10%', left:'50%', borderRadius:20, alignItems:'center', justifyContent:'center', position:'absolute'}, props.tipoUsuario==='Professor'
                                                        ?{backgroundColor:'rgba(184, 144, 41, 0.2)'}
                                                        :{backgroundColor:'rgba(52, 184, 41, 0.2)'}
                                                    ]}><Text style={{textAlign:'center'}}>{props.tipoUsuario==='Professor'?'Professor':'Amigo'}</Text></View>
                <View style={props.online==true?{backgroundColor:'#A93232', width:18, height:18, borderRadius:10, top:'10%', left:'90%', position:'absolute'}:{}}/>
                <Text style={{top:'70%', left:'85%', position:'absolute'}}>{props.horario}</Text>
        </View>
    );
}

export default Comunicacoes;