
import React, { useEffect, useState } from "react";
import {
  ScrollView, StyleSheet, Text, View
} from "react-native";


import CronogramaAtividade from "../../../../../componentes/CronogramaAtividade";
import dataConvert from "../../../../../configs/dataConvert";
import CronogramaStyle from "../../../../../estilos/Views_Estilos/CronogramaStyle";
import PopMenu from "../PopMenu";
let contador = 0;
export default function ListaCronogramaView(props) {
  const [atividades, setAtividades] = useState(props.cronograma);
  const [mapAtividades, setMapAtividades] = useState([]);

  useEffect(() => {
    setMapAtividades(atividadeReturn(props.cronograma));

  }, [props.cronograma, props.busca]);

  function atividadeReturn(callback) {
    if (callback.length != 0) {
      return callback
        .filter((post) => {
          if (props.busca === "") {
            return post;
          }
          else if (
            post.atividade.toLowerCase().includes(props.busca.toLowerCase())
          ) {
            return post;
          }
        })
        .map((value, index) => (
          <View style={{ left: "14%" }} key={index}>
            <CronogramaAtividade
              ano={value.dataAtividade.substring(0, 4)}
              dia={value.dataAtividade.substring(8, 10)}
              mes={dataConvert(value.dataAtividade.substring(5, 7))}
              color={value.cor}
              width={241}
              height={106}
              backgroundColor="#CDCDCD"
              texto={value.atividade}
              prazo={value.prazo}
            />
            <Text>{"\n"}</Text>
          </View>
        ));
    }
  }

  return (
    <>
      <View style={styles.CronogramaStyle.body}>
        <View style={styles.CronogramaStyle.containerConteudo}>
          <View style={styles.CronogramaStyle.linhaDeFundo} />
          <ScrollView>
            <Text>{"\n"}</Text>
            {mapAtividades}
          </ScrollView>
        </View>
      </View>
      <PopMenu setBusca={props.setBusca} popWidth={props.popWidth} />
    </>
  );
}

const styles = StyleSheet.create({
  CronogramaStyle,
});
