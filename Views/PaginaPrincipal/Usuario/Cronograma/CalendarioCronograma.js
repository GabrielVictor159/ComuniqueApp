
import React, { useEffect, useState } from "react";
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

import CronogramaAtividade from "../../../../componentes/CronogramaAtividade";
import dataConvert from "../../../../configs/dataConvert";
import CronogramaStyle from "../../../../estilos/Views_Estilos/CronogramaStyle";
let contador =0;
export default function CalendarioCronograma (props) {

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
  let [busca, setBusca] = useState('');
  let [estado, setEstado] = useState(0);
  let [AdicionarAno, setAdicionarAno] = useState('');
  let [AdicionarDia, setAdicionarDia] = useState('');
  let [AdicionarMes, setAdicionarMes] = useState('');
  let [AdicionarCor, setAdicionarCor] = useState(cores.red2);
  let [AdicionarPrazo, setAdicionarPrazo] = useState();
  let [AdicionarText, setAdicionarText] = useState('');
  let [atividades, setAtividades] = useState(props.cronograma);
  let [atualizacao, setAtualizacao]= useState(contador)
  
 function deleteAtividade(id) {
    const z = props.cronograma;
    if(z.length>1){
    z.splice(id, 1);
    }
    else{
      z.pop()
    }
    props.setCronograma(z);
    contador++;
    setAtualizacao(contador)
    
  }
  
 function atividadeReturn(callback) {

    return  callback.filter(post => {
      if(busca === ''){
        return post;
      }
      else if(post.text.toLowerCase().includes(busca.toLowerCase())){
        return post;
      }
  }).map((value, index) => {
      

      if (estado === 0) {
        return (
          <View style={{ left: "14%" }} key={index}>
            <CronogramaAtividade
              ano={value.data.substring(6,10)}
              dia={value.data.substring(0, 2)}
              mes={dataConvert(value.data.substring(3, 5))}
              color={value.cor}
              width={241}
              height={106}
              backgroundColor="#CDCDCD"
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
                ano={value.data.substring(6,10)}
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
function  adicionarItem() {
    try {
      if (AdicionarDia >= 0 && AdicionarDia <= 32) {
        if (AdicionarMes > 0 && AdicionarMes <= 12) {
          if(AdicionarAno.length==4){
          const x = props.cronograma;
          x.push({
            id: props.cronograma.length,
            data: AdicionarDia + "/" + AdicionarMes +"/" + AdicionarAno,
            cor: AdicionarCor,
            prazo: AdicionarPrazo,
            text: AdicionarText,
          });
          props.setCronograma(x)
          setAtividades(x)
          setEstado(0);
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
 
    return (
      <>
        
          <View style={styles.CronogramaStyle.body}>
            <View style={styles.CronogramaStyle.containerConteudo}>
              <View style={styles.CronogramaStyle.linhaDeFundo} />

              {estado === 0 ? (
                <ScrollView>
                  <Text>{"\n"}</Text>
                  {atividadeReturn(atividades)}
                </ScrollView>
              ) : estado === 1 ? (
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
                      setEstado(0);
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        {"voltar"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : estado === 2 ? (
                <ScrollView>
                  <Text>{"\n"}</Text>
                  {atividadeReturn(atividades)}
                </ScrollView>
              ) : (
                <></>
              )}
            </View>

            
          </View>
      

        {estado === 1 ? (
          <View style={styles.CronogramaStyle.adicionarContainerCorSelect}>
            <Picker
              selectedValue={AdicionarCor}
              placeholder="Cor"
              style={[
                styles.CronogramaStyle.adicionarCorSelect,
                { backgroundColor: AdicionarCor },
              ]}
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
                value={cores.red1}
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
        ) : estado === 2 ? (
          <View style={styles.CronogramaStyle.excluirBotaoVoltar}>
            <Button
              title="voltar"
              color={cores.background}
              onPress={() => {
                setEstado( 0 );
              }}
            />
          </View>
        ) : (
          <></>
        )}
        <View
          style={[
            styles.CronogramaStyle.frameContainer,
            { width: props.popWidth },
          ]}
        >
          <View
            style={{ width: "80%", flexDirection: "row", alignItems: "center" }}
          >
            <Image
              style={{ width: 40, height: 42 }}
              source={require("../../../../assets/Lupa.png")}
            />
            <TextInput style={{ color: "white", fontSize: 15, left: 10 }}
            placeholder={'Pesquisar'}
            placeholderTextColor={'white'}
            onChangeText={(value)=>
             setBusca(value)
            }
            />
            
          </View>
          <View style={{ width: "80%" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => {
                setEstado(1);
              }}
            >
              <Image
                style={{ width: 40, height: 42 }}
                source={require("../../../../assets/AdicionarItem.png")}
              />
              <Text style={{ color: "white", fontSize: 15, left: 10 }}>
                {"Criar"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => {
                setEstado(2);
              }}
            >
              <Image
                style={{ width: 40, height: 42 }}
                source={require("../../../../assets/Lixeira.png")}
              />
              <Text style={{ color: "white", fontSize: 15, left: 10 }}>
                {"Criar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
       
      </>
    );
  }


const styles = StyleSheet.create({
  CronogramaStyle,
});
