import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../../../App";
import CronogramaAtividade from "../../../../componentes/CronogramaAtividade";
import dataConvert from "../../../../configs/dataConvert";
import keys from "../../../../configs/keys";
import cores from "../../../../estilos/Views_Estilos/CronogramaCores";
import CronogramaStyle from "../../../../estilos/Views_Estilos/CronogramaStyle";
import PopMenu from "./PopMenu";
export default function ExcluirCronograma(props) {
  const navigation = useNavigation();
  let [mapAtividades, setMapAtividades] = useState([]);
  const [atualizar, setAtualizar] = useState(0);
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {

    setMapAtividades(atividadeReturn(props.cronograma))

  }, [props.cronograma])
  async function deleteAtividade(id) {
    try {
      const cronogramas = await AsyncStorage.getItem(`${user.idUsuario}_cronogramas`);
      const arrayCronogramas = JSON.parse(cronogramas);
      const index = arrayCronogramas.findIndex(cronograma => cronograma.idCronograma === id);
      if (index !== -1) {
        arrayCronogramas.splice(index, 1);
        await AsyncStorage.setItem(`${user.idUsuario}_cronogramas`, JSON.stringify(arrayCronogramas));
        console.log(arrayCronogramas.toString())
        await props.setCronograma(arrayCronogramas)



      }
      const response = await fetch(`${keys.linkBackEnd}Cronograma/${user.email}/${user.senha}/${id}`, {
        method: 'DELETE'
      });


    }
    catch { }

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