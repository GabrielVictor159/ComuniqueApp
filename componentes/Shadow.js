import React from "react";
import {View, StyleSheet} from 'react-native';

const Shadow =(props) =>{
    const styles = StyleSheet.create({
        dropShadow:{
            width:props.width, height:props.height, backgroundColor:props.shadowColor, position:'absolute', borderRadius:props.borderRadius,
              top:props.shadowTop, left:props.left, opacity:props.shadowOpacity
            
        }
    })
    if(props.shadow==='true'){
        return(
            <View style={ styles.dropShadow }></View>
           );
    }
   
}

export default Shadow;