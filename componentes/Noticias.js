import React from "react";
import { View, Text, Image } from "react-native";


const Noticias = (props) => {
    return (
        <View style={{ width: props.width, height: props.height, borderRadius: props.borderRadius }}>
            <View style={{ width: '100%', height: '100%', borderRadius: props.borderRadius, backgroundColor: 'black', position: 'absolute', left: 0, top: 0 }} />
            <Image style={{ width: '100%', height: '100%', borderRadius: props.borderRadius, position: 'absolute', left: 0, top: 0, opacity: 0.6 }} source={{ uri: props.Image }} />
            <View style={{ width: '90%', height: '30%', top: '70%' }}>
                <Text style={{ left: '5%', color: 'white', fontSize: 18 }}>
                    {props.titulo}
                </Text>
            </View>

        </View>
    );
}

export default Noticias