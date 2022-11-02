import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import CronogramaAtividade from "../../../../../componentes/CronogramaAtividade";
import dataConvert from "../../../../../configs/dataConvert";
import CronogramaCalendarStyle from "../../../../../estilos/Views_Estilos/CronogramaCalendarStyle";
import { LocaleConfig } from "react-native-calendars";
import cores from "../../../../../estilos/Views_Estilos/CronogramaCores"
import moment from "moment";
import PopMenu from "../PopMenu";
import colorDegradeConvert from "../../../../../configs/colorDegradeConvert"
LocaleConfig.locales["br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan.",
    "Fev.",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Oct",
    "Nov.",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "br";

let contador = 0;
export default function CalendarioCronogramaView(props) {

  let [busca, setBusca] = useState("");
  let [estado, setEstado] = useState(0);

  let [atividades, setAtividades] = useState(props.cronograma);
  let [mesSelecionado, setMesSelecionado] = useState("");

  function mapDates(callback) {
    let map = [];
    callback.map((value, index) => {
      map.push(
        moment(value.data, "YYYY-MM-DD").format("YYYY-MM-DD") + "I" + value.cor
      );

      for (let i = 0; i <= parseInt(value.prazo.substring(0, 2)); i++) {
        
        let colorDegrade = colorDegradeConvert(value.cor)
        if (i === parseInt(value.prazo.substring(0, 2))) {
          map.push(
            moment(value.data, "YYYY-MM-DD")
              .add(i, "days")
              .format("YYYY-MM-DD") +
              "F" +
              value.cor
          );
        } else {
          if (i != 0) {

            map.push(
                
              moment(value.data, "YYYY-MM-DD")
                .add(i, "days")
                .format("YYYY-MM-DD") +
                "T" +
                colorDegrade 
            );
          }
        }
      }
    });
    return map.reduce(
      (c, v, index) =>
        Object.assign(c, {
          [v.substring(0, 10)]: {
            endingDay: v.substring(10, 11) === "F" ? true : false,
            startingDay: v.substring(10, 11) === "I" ? true : false,
            color: v.substring(11, 20),
            
          },
        }),
      {}
    );
  }

  function atividadeReturn(callback) {
    return callback
      .filter((post) => {
        if (props.busca === "") {
          if (
            post.data.substring(5, 7) == mesSelecionado.month &&
            post.data.substring(0, 4) == mesSelecionado.year
          ) {
            return post;
          }
        } else if (post.text.toLowerCase().includes(props.busca.toLowerCase())) {
            if (
                post.data.substring(5, 7) == mesSelecionado.month &&
                post.data.substring(0, 4) == mesSelecionado.year
              ) {
                return post;
              }
        }
      })
      .map((value, index) => {
        if (estado === 0) {
          return (
            <View style={{ left: "14%" }} key={index}>
              <CronogramaAtividade
                ano={value.data.substring(0, 4)}
                dia={value.data.substring(8, 10)}
                mes={dataConvert(value.data.substring(5, 7))}
                color={value.cor}
                width={241}
                height={106}
                backgroundColor="#D9D9D9"
                texto={value.text}
                prazo={value.prazo}
              />
              <Text>{"\n"}</Text>
            </View>
          );
        } else {
          return (
            <View style={{ left: "14%" }} key={index}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CronogramaAtividade
                  ano={value.data.substring(6, 10)}
                  dia={value.data.substring(0, 2)}
                  mes={dataConvert(value.data.substring(3, 5))}
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
        }
      });
  }
  

  return (
    <>
      <View style={styles.CronogramaCalendarStyle.body}>
        <View style={{width:'100%', alignItems:'center'}}>
        <View style={{width:'90%', top:50}}>
        <Calendar
        
        hideExtraDays={true}
          onMonthChange={(month) => {
            setMesSelecionado(month);
          }}
          markingType={"period"}
          markedDates={mapDates(props.cronograma)}
        />
        </View>
        </View>
        
        
        <View style={styles.CronogramaCalendarStyle.containerConteudo}>
          
            <ScrollView>
              <Text>{"\n"}</Text>
              {atividadeReturn(atividades)}
            </ScrollView>
        
      </View>
      
    </View>
    <PopMenu setBusca={props.setBusca} popWidth={props.popWidth}/>
    </>
  );
  }
  


const styles = StyleSheet.create({
  CronogramaCalendarStyle,
});
