import { SearchBar } from "@rneui/themed";
import moment from "moment";
import React, { useState } from "react";
import {
  Image,
  ScrollView, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars";
import CronogramaAtividade from "../../../../../componentes/CronogramaAtividade";
import colorDegradeConvert from "../../../../../configs/colorDegradeConvert";
import dataConvert from "../../../../../configs/dataConvert";
import { cores } from "../../../../../estilos";
import CronogramaCalendarStyle from "../../../../../estilos/Views_Estilos/CronogramaCalendarStyle";
import PopMenu from "../PopMenu";
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
  const [busca, setBusca] = useState("");
  const [estado, setEstado] = useState(0);
  const currentDate = moment();
  const [mesSelecionado, setMesSelecionado] = useState({
    dateString: currentDate.format('YYYY-MM-DD'),
    day: currentDate.date(),
    month: currentDate.month() + 1,
    timestamp: currentDate.valueOf(),
    year: currentDate.year(),
  });

  function mapDates(callback) {

    let map = [];
    if (callback.length != 0) {
      try {
        callback.map((value, index) => {
          map.push({
            dateString: moment(value.dataAtividade, "YYYY-MM-DD").format("YYYY-MM-DD"),
            color: value.cor,
            endingDay: false,
            startingDay: true,
          });

          for (let i = 0; i <= value.prazo; i++) {
            let colorDegrade = colorDegradeConvert(value.cor);
            if (i === value.prazo) {
              map.push({
                dateString: moment(value.dataAtividade, "YYYY-MM-DD")
                  .add(i, "days")
                  .format("YYYY-MM-DD"),
                color: value.cor,
                endingDay: true,
                startingDay: false,
              });
            } else {
              if (i !== 0) {
                map.push({
                  dateString: moment(value.dataAtividade, "YYYY-MM-DD")
                    .add(i, "days")
                    .format("YYYY-MM-DD"),
                  color: colorDegrade,
                  endingDay: false,
                  startingDay: false,
                });
              }
            }
          }
        });
        return map.reduce(
          (c, v) =>
            Object.assign(c, {
              [v.dateString]: {
                endingDay: v.endingDay,
                startingDay: v.startingDay,
                color: v.color,
              },
            }),
          {}
        );
      }
      catch (e) { console.log(e) }
    }


  }

  function atividadeReturn(callback) {
    console.log(mesSelecionado)
    console.log(callback)
    if (callback.length != 0) {
      return callback
        .filter((post) => {
          if (props.busca === "") {
            const postDate = new Date(post.dataAtividade);
            if (
              postDate.getMonth() + 1 == mesSelecionado.month &&
              postDate.getFullYear() == mesSelecionado.year
            ) {
              return post;
            }
          } else if (
            post.atividade.toLowerCase().includes(props.busca.toLowerCase())
          ) {
            const postDate = new Date(post.dataAtividade);
            if (
              postDate.getMonth() + 1 == mesSelecionado.month &&
              postDate.getFullYear() == mesSelecionado.year
            ) {
              return post;
            }
          }
        })
        .map((value, index) => {
          const postDate = new Date(value.dataAtividade);
          console.log(value)
          return (
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
          );
        });
    }
  }





  const map = mapDates(props.cronograma);

  return (
    <>
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F2F2F2",
          }}
        >


          <Text>{"\n"}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column", padding: 5 }}>
          <View style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

            <Calendar
              current={moment().format("YYYY-MM-DD")}
              pastScrollRange={0}
              onMonthChange={(month) => setMesSelecionado(month)}
              futureScrollRange={12}
              showScrollIndicator={true}
              style={{
                borderWidth: 0.5,
                borderColor: "gray",
                width: 380
              }}
              markedDates={{
                ...map,
                [moment().format("YYYY-MM-DD")]: {
                  color: "#50cebb",
                  textColor: "white",
                },
              }}
              markingType={"period"}
            />

          </View>
          <Text>{"\n"}</Text>
          <View style={{}}>
            <ScrollView style={{ maxHeight: 575 }}>
              {atividadeReturn(props.cronograma)}
            </ScrollView>

            <Text>{"\n"}</Text>
          </View>
        </View>
      </View>
      <PopMenu setBusca={props.setBusca} popWidth={props.popWidth} />

    </>
  );
}


const styles = StyleSheet.create({
  CronogramaCalendarStyle,
});
