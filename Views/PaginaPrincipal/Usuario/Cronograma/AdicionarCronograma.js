import AsyncStorage from "@react-native-async-storage/async-storage";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../../../App";
import keys from "../../../../configs/keys";
import CronogramaStyle from "../../../../estilos/Views_Estilos/CronogramaStyle";
export default function AdicionarCronograma(props) {
  const cores = {
    background: '#3282B8',
    red1: "#B75353",
    red2: "#563838",
    blue: "#539FB7",
    green: "#3C8544",
    pink: "#B953B2",
    purple: "#8953B9",
    cyan: "#53B9B5",
    yellow: "#ECEC0C",
    orange: "#E19625",
    black: "#252525",
  };
  const navigation = useNavigation();

  let [AdicionarCor, setAdicionarCor] = useState(cores.red2);
  let [AdicionarPrazo, setAdicionarPrazo] = useState();
  let [AdicionarText, setAdicionarText] = useState('');
  let [date, setDate] = useState(false);
  let [addDate, setAddDate] = useState("");
  const { user, setUser } = useContext(UserContext);
  const adicionardata = (event, date) => {
    setAddDate(date)
  }
  async function adicionarItem() {
    if (AdicionarText === '') {
      alert("Por favor coloque uma mensagem!")
      return
    }
    if (AdicionarPrazo === undefined) {
      alert("Por favor coloque um prazo!")
      return
    }
    if (addDate === "") {
      alert("Por favor escolha uma data valida!")
      return
    }


    try {
      const novoCronograma = {
        dataAtividade: addDate.toISOString().split('T')[0],
        cor: AdicionarCor,
        prazo: AdicionarPrazo,
        atividade: AdicionarText,
      };

      const response = await fetch(`${keys.linkBackEnd}Cronograma/${user.email}/${user.senha}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoCronograma),
      });

      if (response.ok) {
        const novoCronogramaComID = await response.json();
        const cronogramas = await AsyncStorage.getItem(`${user.idUsuario}_cronogramas`);
        const arrayCronogramas = JSON.parse(cronogramas);
        const cronogramasAtualizados = [...arrayCronogramas, novoCronogramaComID];
        await AsyncStorage.setItem(`${user.idUsuario}_cronogramas`, JSON.stringify(cronogramasAtualizados));
        props.setCronograma(cronogramasAtualizados);
        return navigation.goBack();
      } else {
        throw new Error('Erro ao adicionar novo cronograma.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row", left: -32, top: 100 }}>
          <View style={{ flexDirection: "column" }}>
            {
              date === true && addDate === "" ? <RNDateTimePicker locale="pt-BR" mode="date" value={new Date()} onChange={adicionardata} /> : <></>
            }

            <TouchableOpacity style={[
              styles.CronogramaStyle.inputDia,
              { backgroundColor: AdicionarCor },
            ]}
              onPress={() => { setDate(!date); setAddDate("") }}
            >
              <Text style={{ color: 'white' }}>{addDate === '' ? 'Dia' : addDate.toISOString().substring(8, 10)}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.CronogramaStyle.atividadeAdicionarPonto,
              { backgroundColor: AdicionarCor },
            ]}
          />
          <View style={styles.CronogramaStyle.atividadeAdicionar}>
            <View style={{ flexDirection: 'row', top: -10 }}>
              <TextInput
                style={[
                  styles.CronogramaStyle.inputPrazo,
                  { backgroundColor: AdicionarCor },
                ]}
                keyboardType={"number-pad"}
                placeholderTextColor={"white"}
                placeholder={"Prazo Dias"}
                onChangeText={(Prazo) => {
                  setAdicionarPrazo(Prazo);
                }}
              />
              <View style={{ left: 10, width: 110, height: 35, borderRadius: 15, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
                <Picker
                  selectedValue={AdicionarCor}
                  placeholder="Cor"
                  style={{ width: '100%', height: '100%', backgroundColor: AdicionarCor, color: 'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    setAdicionarCor(itemValue)
                  }
                >
                  <Picker.Item
                    value=""
                    label="Cor"
                    enabled={false}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                  <Picker.Item
                    label="Vermelho"
                    value={cores.red2}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                  <Picker.Item
                    label="Verde"
                    value={cores.green}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                  <Picker.Item
                    label="Azul"
                    value={cores.blue}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                  <Picker.Item
                    label="Ciano"
                    value={cores.cyan}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                  <Picker.Item
                    label="Laranja"
                    value={cores.orange}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                  <Picker.Item
                    label="Rosa"
                    value={cores.pink}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                  <Picker.Item
                    label="Roxo"
                    value={cores.purple}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                  <Picker.Item
                    label="Amarelo"
                    value={cores.yellow}
                    style={styles.CronogramaStyle.adicionarCorSelectItems}
                  />
                </Picker>
              </View>
            </View>

            <TextInput
              keyboardType={"default"}
              placeholder={"Mensagem"}
              onChangeText={(text) => {
                setAdicionarText(text);
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.CronogramaStyle.botaoAdicionar}
          onPress={() => {
            adicionarItem();
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "white" }}>
              {"salvar"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.CronogramaStyle.adicionarBotaoVoltar}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "white" }}>
              {"voltar"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  CronogramaStyle,
});