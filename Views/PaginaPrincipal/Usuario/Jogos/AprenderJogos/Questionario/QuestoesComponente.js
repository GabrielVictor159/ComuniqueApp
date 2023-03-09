import React, { useEffect, useState } from "react";
import { TouchableNativeFeedback } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
export default function QuestoesComponente(props) {
    const [R1Color, setR1Color] = useState('#0F4C75')
    const [R2Color, setR2Color] = useState('#0F4C75')
    const [R3Color, setR3Color] = useState('#0F4C75')
    const [R4Color, setR4Color] = useState('#0F4C75')
    const [resposta, setResposta] = useState('')
    const navigation = useNavigation();

    function select(callback) {
        if (callback === 'A') {
            setR1Color('#282A2C')
            setR2Color('#0F4C75')
            setR3Color('#0F4C75')
            setR4Color('#0F4C75')
        }
        else if (callback === 'B') {
            setR1Color('#0F4C75')
            setR2Color('#282A2C')
            setR3Color('#0F4C75')
            setR4Color('#0F4C75')
        }
        else if (callback === 'C') {
            setR1Color('#0F4C75')
            setR2Color('#0F4C75')
            setR3Color('#282A2C')
            setR4Color('#0F4C75')
        }
        else if (callback === 'D') {
            setR1Color('#0F4C75')
            setR2Color('#0F4C75')
            setR3Color('#0F4C75')
            setR4Color('#282A2C')
        }
        setResposta(callback);
    }
    function enviarResposta() {
        if (props.RC === resposta) {
            const z = props.respostas + 1;
            props.setRespostas(z)
        }
        return navigation.navigate(props.navigate)
    }


    return (
        <View style={styles.body}>
            <Text>{'\n\n\n\n\n\n\n\n\n'}</Text>
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>
                    {props.titulo}
                </Text>
            </View>

            <Text>{'\n'}</Text>
            <View style={styles.questoesContainer}>
                <TouchableNativeFeedback
                    onPress={() => {
                        select('A')
                    }}
                >
                    <View style={[styles.questaoContainer, { backgroundColor: R1Color }]}>


                        <View style={styles.questaoIndicador}>
                            <Text>
                                {'A'}
                            </Text>
                        </View>
                        <Text style={styles.questaoText}>{props.R1}</Text>

                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                        select('B')
                    }}
                >
                    <View style={[styles.questaoContainer, { backgroundColor: R2Color }]}>


                        <View style={styles.questaoIndicador}>
                            <Text>
                                {'B'}
                            </Text>
                        </View>
                        <Text style={styles.questaoText}>{props.R2}</Text>

                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                        select('C')
                    }}
                >
                    <View style={[styles.questaoContainer, { backgroundColor: R3Color }]}>


                        <View style={styles.questaoIndicador}>
                            <Text>
                                {'C'}
                            </Text>
                        </View>
                        <Text style={styles.questaoText}>{props.R3}</Text>

                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                        select('D')
                    }}
                >
                    <View style={[styles.questaoContainer, { backgroundColor: R4Color }]}>


                        <View style={styles.questaoIndicador}>
                            <Text>
                                {'D'}
                            </Text>
                        </View>
                        <Text style={styles.questaoText}>{props.R4}</Text>

                    </View>
                </TouchableNativeFeedback>
            </View>
            <Text>{'\n\n\n\n'}</Text>
            <View style={styles.botao}>

                <TouchableOpacity
                    onPress={() => {
                        enviarResposta()
                    }}
                >

                    <Text style={styles.botaoText}>{props.buttonText}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: '100%', height: '100%', backgroundColor: '#EAEAEA', alignItems: 'center'
    },
    tituloContainer: {
        width: '80%', alignItems: 'center'
    },
    titulo: {
        fontSize: 16
    },
    questoesContainer: {
        width: '80%', height: '40%', alignItems: 'center', justifyContent: 'space-between'
    },
    questaoContainer: {
        flexDirection: 'row', alignItems: 'center', borderRadius: 20
    },
    questaoIndicador: {
        width: 40, minHeight: 40, borderRadius: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', left: '25%'
    },
    questaoText: {
        fontSize: 13, color: 'white', left: '3%', width: '80%', minHeight: 45, paddingTop: 22.5, paddingBottom: 22.5, paddingHorizontal: 35
    },
    botao: {
        width: '50%', height: '8%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F4C75', borderRadius: 20
    },
    botaoText: {
        color: 'white', fontSize: 18
    },

})