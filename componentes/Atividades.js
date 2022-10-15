import React from "react";
import { View,  Text, Image,  TouchableNativeFeedback } from "react-native";
import {useNavigation} from '@react-navigation/native';
import PlayButton from "../assets/PlayButton";
import { LinearGradient } from 'expo-linear-gradient';
const Atividades = (props) =>{
    const navigation = useNavigation();
const position1 = props.height*1.5
return(
   
    <TouchableNativeFeedback 
                    onPress={()=>{
                        props.navigate!=null
                        ?navigation.navigate(props.navigate)
                        :props.goBack!=null
                        ?navigate.goBack()
                        :props.reset!=null
                        ?navigation.reset({
                            index:0,
                            routes: [{name: props.reset}]
                          })
                         :props.push!=null
                         ?navigation.push(props.push)
                         :props.popToPop!=null
                         ?navigation.popToPop()
                         :props.dispatch!=null
                         ?navigation.dispatch(props.dispatch)
                         :<></>

                    }}
                    >
        <View style={{width:props.width, height:props.height, 
        flexDirection:'row',
        borderRadius:props.borderRadius, backgroundColor:props.gradient===true?'transparent': props.color, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,}}>
            {props.gradient===true?<LinearGradient
                style={{ borderRadius:props.borderRadius, width:'100%', height:'100%', position:'absolute'}}
                start={{x:0, y:0}}
                end={{x:1,y:1}}
                colors={[props.color1 , props.color2]}
                ></LinearGradient>:''}
                
            
            <View style={{width:'50%', height:'50%',  justifyContent:'center', left:'5%', top:'5%', alignItems:'center'}}>
        <Text style={{fontSize:props.fontSize, color:props.textColor}}>{props.text}</Text>
        <Text style={{fontSize:props.fontSize, color:props.textColor}}>{props.text2}</Text>
                </View>
            {props.iconType==='barComplete'
            ?
            <View style={{width:props.barWidth, height:props.barHeight, backgroundColor:'white', borderRadius:props.borderRadius,position:'absolute', justifyContent:'center', left:'5%', top:'70%', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,}}>
            <View style={{width:props.completo, height:'80%', borderRadius:props.borderRadius, backgroundColor:props.gradient===true?props.color2:props.color, left:'2%'}}/>
            </View>
            :props.iconType==='playButton'?
            <View style={{width:'40%', height:'20%',position:'absolute', justifyContent:'center', left:'5%', top:'65%', alignItems:'center'}}>
            <PlayButton width={props.iconWidth} height={props.iconHeight}/>
            </View> 
            :<></>
        }
        
        <Image source={props.image} style={{width:props.imageWidth, height:props.imageHeight, left:props.imageLeft, top:props.imageTop, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,}}/>
        </View>
        </TouchableNativeFeedback>
);
}

export default Atividades;