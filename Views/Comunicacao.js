import React from "react";
import { View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import swipeConfig from "../configs/swipeConfig";
import RadialGradient from 'react-native-radial-gradient';
import BackgroundColor2 from '../assets/BackgroundColor2';
export default class Comunicacao extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            
            <GestureRecognizer
            onSwipeRight={(state)=>this.props.navigation.navigate('PaginaUsuario')}
            onSwipeLeft={(state)=>this.props.navigation.navigate('School')}
                config={swipeConfig}
            style={{width:'100%', height:'100%', flex:1, justifyContent:'center', flexDirection:'row', overflow:'visible'}}
            >
             <BackgroundColor2  />   
         
            </GestureRecognizer>
       
        );
    }
}