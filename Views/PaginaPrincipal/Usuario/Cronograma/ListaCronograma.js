import { LinearGradient } from "expo-linear-gradient";
import React from "react";
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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import IconBack from "../../../../assets/IconBack";
import CronogramaAtividade from "../../../../componentes/CronogramaAtividade";
import dataConvert from "../../../../configs/dataConvert";
import CronogramaStyle from "../../../../estilos/Views_Estilos/CronogramaStyle";


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
let indice = 0;
export default class ListaCronograma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busca: "",
      Atividades: [
        {
          id: 0,
          data: "09/12/2022",
          cor: cores.red1,
          prazo: "30 dias",
          text: "terminar exercicio",
        },
        {
          id: 1,
          data: "17/03/2022",
          cor: cores.blue,
          prazo: "30 dias",
          text: "terminar exercicio",
        },
        {
          id: 2,
          data: "25/04/2022",
          cor: cores.green,
          prazo: "30 dias",
          text: "terminar exercicio",
        },
        {
          id: 3,
          data: "18/08/2022",
          cor: cores.red1,
          prazo: "30 dias",
          text: "terminar exercicio",
        },
        {
          id: 4,
          data: "20/06/2022",
          cor: cores.green,
          prazo: "30 dias",
          text: "terminar exercicio",
        },
        {
          id: 5,
          data: "28/09/2022",
          cor: cores.blue,
          prazo: "30 dias",
          text: "terminar exercicio",
        },
      ],
      test:0,
      estado: 0,
      AdicionarDia: "",
      AdicionarMes: "",
      AdicionarCor: cores.red2,
      AdicionarPrazo: "",
      AdicionarText: "",
    };
  }
 
  updateCor(cor) {
    this.setState({ AdicionarCor: cor });
  }
  deleteAtividade(id) {
    this.state.Atividades.splice(id, 1);
  }
  
  atividadeReturn(callback) {
    return callback.map((value) => {
      indice = value.id;

      if (this.state.estado === 0) {
        return (
          <View style={{ left: "14%" }} key={value.id}>
            <CronogramaAtividade
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
          <View style={{ left: "14%" }} key={value.id}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CronogramaAtividade
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
                  onPress={() => this.deleteAtividade(value.id)}
                />
              </View>
            </View>
            <Text>{"\n"}</Text>
          </View>
        );
      }
    });
  }
  adicionarItem() {
    try {
      if (this.state.AdicionarDia >= 0 && this.state.AdicionarDia <= 32) {
        if (this.state.AdicionarMes > 0 && this.state.AdicionarMes <= 12) {
          indice++;
          this.state.Atividades.push({
            id: indice,
            data: this.state.AdicionarDia + "/" + this.state.AdicionarMes,
            cor: this.state.AdicionarCor,
            prazo: this.state.AdicionarPrazo,
            text: this.state.AdicionarText,
          });
          this.setState({ estado: 0 });
        } else {
          alert("Mês invalido");
        }
      } else {
        alert("Dia invalido");
      }
    } catch {}
  }
  render() {
    return (
      <>
        
          <View style={styles.CronogramaStyle.body}>
            <View style={styles.CronogramaStyle.containerConteudo}>
              <View style={styles.CronogramaStyle.linhaDeFundo} />

              {this.state.estado === 0 ? (
                <ScrollView>
                  <Text>{"\n"}</Text>
                  {this.atividadeReturn(this.state.Atividades)}
                </ScrollView>
              ) : this.state.estado === 1 ? (
                <View style={{ alignItems: "center" }}>
                  <View style={{ flexDirection: "row", left: -32, top: 100 }}>
                    <View style={{ flexDirection: "column" }}>
                      <TextInput
                        style={[
                          styles.CronogramaStyle.inputDia,
                          { backgroundColor: this.state.AdicionarCor },
                        ]}
                        keyboardType={"number-pad"}
                        placeholderTextColor={"white"}
                        placeholder={"Dia"}
                        onChangeText={(dia) => {
                          this.setState({ AdicionarDia: dia });
                        }}
                      />
                      <TextInput
                        style={[
                          styles.CronogramaStyle.inputMes,
                          { backgroundColor: this.state.AdicionarCor },
                        ]}
                        keyboardType={"number-pad"}
                        placeholderTextColor={"white"}
                        placeholder={"Mes"}
                        onChangeText={(mes) => {
                          this.setState({ AdicionarMes: mes });
                        }}
                      />
                    </View>
                    <View
                      style={[
                        styles.CronogramaStyle.atividadeAdicionarPonto,
                        { backgroundColor: this.state.AdicionarCor },
                      ]}
                    />
                    <View style={styles.CronogramaStyle.atividadeAdicionar}>
                      <TextInput
                        style={[
                          styles.CronogramaStyle.inputPrazo,
                          { backgroundColor: this.state.AdicionarCor },
                        ]}
                        keyboardType={"default"}
                        placeholderTextColor={"white"}
                        placeholder={"Prazo"}
                        onChangeText={(Prazo) => {
                          this.setState({ AdicionarPrazo: Prazo });
                        }}
                      />
                      <TextInput
                        keyboardType={"default"}
                        placeholder={"Mensagem"}
                        onChangeText={(text) => {
                          this.setState({ AdicionarText: text });
                        }}
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.CronogramaStyle.botaoAdicionar}
                    onPress={() => {
                      this.adicionarItem();
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
                      this.setState({ estado: 0 });
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        {"voltar"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : this.state.estado === 2 ? (
                <ScrollView>
                  <Text>{"\n"}</Text>
                  {this.atividadeReturn(this.state.Atividades)}
                </ScrollView>
              ) : (
                <></>
              )}
            </View>

            
          </View>
      

        {this.state.estado === 1 ? (
          <View style={styles.CronogramaStyle.adicionarContainerCorSelect}>
            <Picker
              selectedValue={this.state.AdicionarCor}
              placeholder="Cor"
              style={[
                styles.CronogramaStyle.adicionarCorSelect,
                { backgroundColor: this.state.AdicionarCor },
              ]}
              onValueChange={(itemValue, itemIndex) =>
                this.updateCor(itemValue)
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
        ) : this.state.estado === 2 ? (
          <View style={styles.CronogramaStyle.excluirBotaoVoltar}>
            <Button
              title="voltar"
              color={cores.background}
              onPress={() => {
                this.setState({ estado: 0 });
              }}
            />
          </View>
        ) : (
          <></>
        )}
        <View
          style={[
            styles.CronogramaStyle.frameContainer,
            { width: this.props.popWidth },
          ]}
        >
          <View
            style={{ width: "80%", flexDirection: "row", alignItems: "center" }}
          >
            <Image
              style={{ width: 40, height: 42 }}
              source={require("../../../../assets/Lupa.png")}
            />
            <Text style={{ color: "white", fontSize: 15, left: 10 }}>
              {"Pesquisar"}
            </Text>
          </View>
          <View style={{ width: "80%" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => {
                this.setState({ estado: 1 });
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
                this.setState({ estado: 2 });
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
}

const styles = StyleSheet.create({
  CronogramaStyle,
});
