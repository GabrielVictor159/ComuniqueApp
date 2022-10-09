import React from "react";
import { View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import swipeConfig from "../configs/swipeConfig";

export default class Mensagens extends React.Component{
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
            style={{width:'100%', height:'100%'}}
            >

            </GestureRecognizer>
        );
    }
}