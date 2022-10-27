import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NoticiasOneView(props){
    const navigation = useNavigation();
    return(
        <View style={{width:'100%', height:'100%', alignItems:'center'}}>
             
        
           <ScrollView >
            <View style={{width:'100%', alignItems:'center'}}>
            <Text>{'\n\n\n\n'}</Text>
            <Image style={{width:380, height:300, borderRadius:20}} source={props.noticia.image}/>
            <View style={{width:'95%', alignItems:'center'}}>

           
            <Text>{'\n'}</Text>
            <Text style={styles.text}>{props.noticia.titulo}</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.text}>{props.noticia.texto}</Text>
            </View>
            </View>
            </ScrollView> 
            <View style={{position:'absolute', top:'5%', left:'85%'}}>
        <TouchableOpacity 
        onPress={()=>{
           navigation.goBack();
        }}
        >
           <Image style={{width:30, height:30}} source={require('../../../../assets/X.png')}/>
        </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        
        
    }
})