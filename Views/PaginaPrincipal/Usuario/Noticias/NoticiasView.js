import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconBack from "../../../../assets/IconBack";
import Noticias from "../../../../componentes/Noticias";
export default function NoticiasView(props) {
    const [noticiasMap, setNoticiasMap] = useState();
    useEffect(() => {
        setNoticiasMap(mapNoticias(props.noticias))
    }, []);
    const navigation = useNavigation();

    function mapNoticias(callback) {
        if(callback.length!=0){
        return callback.map((value) => {

            return (

                <TouchableOpacity style={{ width: '100%', height: 300, alignItems: 'center' }}
                    onPress={() => {
                        props.setNoticiaEscolha(value),
                            navigation.navigate('NoticiaOneView')

                    }}
                    key={value.idNoticia}
                >
                    <Noticias
                        width='100%'
                        height='90%'
                        borderRadius={20}
                        Image={value.imagem}
                        titulo={value.titulo}
                    />
                    <Text>{'\n'}</Text>
                </TouchableOpacity>



            );
        });
    }
    };
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center' }}>
            <View style={{ width: '100%', height: '80%', top: 160, alignItems: 'center' }}>
                <ScrollView style={{ width: '90%' }}>
                    {noticiasMap}
                </ScrollView>
            </View>

            <View style={{
                width: '100%', height: 130, backgroundColor: '#69B1C9', top: 0, position: 'absolute', borderBottomLeftRadius: 20, borderBottomRightRadius: 20
                , elevation: 10
            }}>
                <View style={{ position: 'absolute', top: '30%', left: '5%' }}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('UsuarioView');
                        }}
                    >
                        <IconBack width={30} height={30} />
                    </TouchableOpacity>
                </View>

                <Text style={{ color: 'white', position: 'absolute', top: '60%', left: '7%', fontSize: 22, elevation: 10 }}>{'Noticias'}</Text>
            </View>
        </View>
    );
}