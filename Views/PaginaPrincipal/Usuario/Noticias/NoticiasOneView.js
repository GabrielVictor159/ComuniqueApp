import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import keys from "../../../../configs/keys";

export default function NoticiasOneView(props) {
    const navigation = useNavigation();
    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>


            <ScrollView >
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text>{'\n\n\n\n'}</Text>
                    <Image style={{ width: 380, height: 300, borderRadius: 20 }} source={{ uri: `${keys.linkBackEnd}images/${props.noticia.imagem}` }} />
                    <View style={{ width: '95%', alignItems: 'center' }}>


                        <Text>{'\n'}</Text>
                        <Text style={styles.text}>{props.noticia.titulo}</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.text}>{props.noticia.texto}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', top: '5%', left: '85%' }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image style={{ width: 30, height: 30 }} source={require('../../../../assets/X.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,


    }
})