import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import CronogramaAtividade from "../../../../componentes/CronogramaAtividade";
import dataConvert from "../../../../configs/dataConvert";
import cores from "../../../../estilos/Views_Estilos/CronogramaCores";
import CronogramaStyle from "../../../../estilos/Views_Estilos/CronogramaStyle";
import PopMenu from "./PopMenu";
export default function ExcluirCronograma(props) {
  const navigation = useNavigation();
  let [atividades, setAtividades] = useState(props.cronograma);
  let [mapAtividades, setMapAtividades] = useState(atividadeReturn(props.cronograma));

  async function deleteAtividade(id) {
    try {
      const cronogramas = await AsyncStorage.getItem('cronogramas');
      const arrayCronogramas = JSON.parse(cronogramas);
      const index = arrayCronogramas.findIndex(cronograma => cronograma.idCronograma === id);
      if (index !== -1) {
        arrayCronogramas.splice(index, 1);
        await AsyncStorage.setItem('cronogramas', JSON.stringify(arrayCronogramas));
      }
      const response = await fetch(`${keys.linkBackEnd}Cronograma/${user.email}/${user.senha}/${id}`, {
        method: 'DELETE'
      });
      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function atividadeReturn(callback) {
    return callback.filter(cronograma => {
      if (props.busca === '') {
        return cronograma;
      }
      else if (cronograma.atividade.toLowerCase().includes(props.busca.toLowerCase())) {
        return cronograma;
      }
    }).map((value, index) => {
      return (
        <View style={{ left: "14%" }} key={index}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CronogramaAtividade
              ano={value.dataAtividade.substring(0, 4)}
              dia={value.dataAtividade.substring(8, 10)}
              mes={dataConvert(value.dataAtividade.substring(5, 7))}
              color={value.cor}
              width={220}
              height={106}
              backgroundColor="#CDCDCD"
              texto={value.atividade}
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
                onPress={() => deleteAtividade(value.idCronograma)}
              />
            </View>
          </View>
          <Text>{"\n"}</Text>
        </View>
      );
    });
  }



  return (
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
      <PopMenu setBusca={props.setBusca} popWidth={props.popWidth} />
    </View>
  );

}

const styles = StyleSheet.create({
  CronogramaStyle,
});