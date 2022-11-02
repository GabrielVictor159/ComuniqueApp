import React, {useState} from "react";
import { ScrollView } from "react-native";
import { View, StyleSheet, Text, Button, Image, TextInput, TouchableOpacity } from "react-native";
import cores from "../../../../estilos/Views_Estilos/CronogramaCores"
import CronogramaStyle from "../../../../estilos/Views_Estilos/CronogramaStyle";
import CronogramaAtividade from "../../../../componentes/CronogramaAtividade";
import dataConvert from "../../../../configs/dataConvert";
import PopMenu from "./PopMenu";
import { useNavigation } from "@react-navigation/native";
export default function ExcluirCronograma(props){
  const navigation = useNavigation();
  let [atividades, setAtividades] = useState(props.cronograma);
  let [mapAtividades, setMapAtividades] = useState(atividadeReturn(props.cronograma));
    function deleteAtividade(id) {
        const z = props.cronograma;
        if(z.length>1){
        z.splice(id, 1);
        }
        else{
          z.pop()
        }
        props.setCronograma(z);
        setMapAtividades(atividadeReturn(z));
        
      }
    function atividadeReturn(callback) {

        return  callback.filter(post => {
          if(props.busca === ''){
            return post;
          }
          else if(post.text.toLowerCase().includes(busca.toLowerCase())){
            return post;
          }
      }).map((value, index) => {
          
    
          
            return (
              <View style={{ left: "14%" }} key={index}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  
                  <CronogramaAtividade
                    ano={value.data.substring(0, 4)}
                    dia={value.data.substring(8, 10)}
                    mes={dataConvert(value.data.substring(5, 7))}
                    color={value.cor}
                    width={220}
                    height={106}
                    backgroundColor="#CDCDCD"
                    texto={value.text}
                    prazo={value.prazo}
                  />
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      left: 20,
                    }}
                  >
                    <Button
                      style={{ width: "100%", height: "100%" }}
                      title="X"
                      color={cores.background}
                      onPress={() => deleteAtividade(value.id)}
                    />
                  </View>
                </View>
                <Text>{"\n"}</Text>
              </View>
            );
          
        });
      }
return(
  <View style={styles.CronogramaStyle.body}>
    <View style={styles.CronogramaStyle.containerConteudo}>
      <View style={styles.CronogramaStyle.linhaDeFundo} />

        <ScrollView>
          <Text>{"\n"}</Text>
          {mapAtividades}
        </ScrollView>
    
    </View>

    
  
  <View style={styles.CronogramaStyle.excluirBotaoVoltar}>
    <Button
      title="voltar"
      color={cores.background}
      onPress={() => {
        navigation.goBack()
      }}
    />
  </View>
  <PopMenu setBusca={props.setBusca} popWidth={props.popWidth}/>
</View>
);

}

const styles = StyleSheet.create({
  CronogramaStyle,
});