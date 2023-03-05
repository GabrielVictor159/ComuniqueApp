import moment from "moment";
import React, { useState } from "react";
import {
  Image,
  ScrollView, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import CronogramaAtividade from "../../../../../componentes/CronogramaAtividade";
import colorDegradeConvert from "../../../../../configs/colorDegradeConvert";
import dataConvert from "../../../../../configs/dataConvert";
import CronogramaCalendarStyle from "../../../../../estilos/Views_Estilos/CronogramaCalendarStyle";
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
  const [atividades, setAtividades] = useState(props.cronograma);
  const [mesSelecionado, setMesSelecionado] = useState("");

  function mapDates(callback) {
    let map = [];
    callback.map((value, index) => {
      map.push({
        dateString: moment(value.data, "YYYY-MM-DD").format("YYYY-MM-DD"),
        color: value.cor,
        endingDay: true,
        startingDay: true,
      });

      for (let i = 0; i <= parseInt(value.prazo.substring(0, 2)); i++) {
        let colorDegrade = colorDegradeConvert(value.cor);
        if (i === parseInt(value.prazo.substring(0, 2))) {
          map.push({
            dateString: moment(value.data, "YYYY-MM-DD")
              .add(i, "days")
              .format("YYYY-MM-DD"),
            color: value.cor,
            endingDay: true,
            startingDay: false,
          });
        } else {
          if (i !== 0) {
            map.push({
              dateString: moment(value.data, "YYYY-MM-DD")
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
        } else if (
          post.text.toLowerCase().includes(props.busca.toLowerCase())
        ) {
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
                  dia={value.data.substring(8, 10)}
                  mes={dataConvert(value.data.substring(5, 7))}
                  color={value.cor}
                  width={120}
                  height={53}
                  backgroundColor="#D9D9D9"
                  texto={value.text}
                  prazo={value.prazo}
                />
                <TouchableOpacity onPress={() => deleteAtividade(index)}>
                  <Image
                    source={require("../assets/images/delete-icon.png")}
                    style={{ marginLeft: 10 }}
                  />
                </TouchableOpacity>
              </View>
              <Text>{"\n"}</Text>
            </View>
          );
        }
      });
  }



  const map = mapDates(props.cronograma);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2F2F2",
        }}
      >
        <SearchBar
          placeholder="Busca"
          onChangeText={(busca) => setBusca(busca)}
          value={busca}
          lightTheme={true}
          platform="ios"
          containerStyle={{ width: "95%", backgroundColor: "white" }}
        />
        <Text>{"\n"}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
        <View style={{ flex: 1 }}>
          <CalendarList
            current={moment().format("YYYY-MM-DD")}
            pastScrollRange={0}
            futureScrollRange={12}
            showScrollIndicator={true}
            style={{
              borderWidth: 0.5,
              borderColor: "gray",
              height: "100%",
            }}
            onDayPress={onDayPress}
            onMonthChange={onMonthChange}
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
        <View style={{ flex: 1 }}>
          <ScrollView style={{ maxHeight: 575 }}>
            {atividadeReturn(props.cronograma)}
          </ScrollView>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={() => setEstado(estado === 1 ? 0 : 1)}>
              <Text style={{ marginRight: 10 }}>
                {estado === 0 ? "Editar" : "Salvar"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Text style={{ marginRight: 10 }}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <Text>{"\n"}</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  CronogramaCalendarStyle,
});
