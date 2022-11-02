import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import CronogramaStyle from "../../../../estilos/Views_Estilos/CronogramaStyle";
export default function AdicionarCronograma(props){
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
    let [AdicionarAno, setAdicionarAno] = useState('');
     let [AdicionarDia, setAdicionarDia] = useState('');
     let [AdicionarMes, setAdicionarMes] = useState('');
    let [AdicionarCor, setAdicionarCor] = useState(cores.red2);
     let [AdicionarPrazo, setAdicionarPrazo] = useState();
     let [AdicionarText, setAdicionarText] = useState('');
    function  adicionarItem() {
        try {
          if (AdicionarDia >= 0 && AdicionarDia <= 32) {
            if (AdicionarMes > 0 && AdicionarMes <= 12) {
              if(AdicionarAno.length==4){
              const x = props.cronograma;
              x.push({
                id: props.cronograma.length,
                data: AdicionarAno + "-" + AdicionarMes + "-" + AdicionarDia,
                cor: AdicionarCor,
                prazo: AdicionarPrazo,
                text: AdicionarText,
              });
              props.setCronograma(x)
              
             return navigation.goBack();
            } else{
              alert("Por favor insira um ano com 4 digitos")
            }
            } else {
              alert("Mês invalido");
            }
          } else {
            alert("Dia invalido");
          }
        } catch {}
      }
    return(
            <View>
            <View style={{ alignItems: "center" }}>
              <View style={{ flexDirection: "row", left: -32, top: 100 }}>
                <View style={{ flexDirection: "column" }}>
                  <TextInput
                    style={[
                      styles.CronogramaStyle.inputDia,
                      { backgroundColor: AdicionarCor },
                    ]}
                    keyboardType={"number-pad"}
                    placeholderTextColor={"white"}
                    placeholder={"Dia"}
                    onChangeText={(dia) => {
                      setAdicionarDia( dia );
                    }}
                  />
                  <TextInput
                    style={[
                      styles.CronogramaStyle.inputMes,
                      { backgroundColor: AdicionarCor },
                    ]}
                    keyboardType={"number-pad"}
                    placeholderTextColor={"white"}
                    placeholder={"Mes"}
                    onChangeText={(mes) => {
                     setAdicionarMes(mes);
                    }}
                  />
                   <TextInput
                    style={[
                      styles.CronogramaStyle.inputAno,
                      { backgroundColor: AdicionarCor },
                    ]}
                    keyboardType={"number-pad"}
                    placeholderTextColor={"white"}
                    placeholder={"Ano"}
                    onChangeText={(Ano) => {
                     setAdicionarAno(Ano);
                    }}
                  />
                </View>
                <View
                  style={[
                    styles.CronogramaStyle.atividadeAdicionarPonto,
                    { backgroundColor: AdicionarCor },
                  ]}
                />
                <View style={styles.CronogramaStyle.atividadeAdicionar}>
                  <View style={{flexDirection:'row', top:-10}}>
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
                  <View style={{left:10,width:110, height:35,  borderRadius:15, overflow:'hidden', alignItems:'center', justifyContent:'center'}}>
            <Picker
              selectedValue={AdicionarCor}
              placeholder="Cor"
              style={{width:'100%', height:'100%', backgroundColor: AdicionarCor, color:'white' }}
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