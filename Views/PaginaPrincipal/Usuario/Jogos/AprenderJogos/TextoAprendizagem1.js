import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { color } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
export default function TextoAprendizagem1(props) {
  const navigation = useNavigation();

  useEffect(() => {
    props.swipe(false);
    props.display("none");
    props.setIconBackDisplay('none')
    return function () {
      props.swipe(true);
      props.display("flex");
      props.setIconBackDisplay('flex')
    };
  });
  return (
    <View style={styles.body}>
      <ScrollView style={styles.containerConteudo}>
        <View style={styles.menu}>
          <Text style={styles.tituloMenu}>{"Xadrez Aprendizagem 1"}</Text>
        </View>
        <Text>{"\n"}</Text>
        <Text style={styles.titulos}>{"     Origem"}</Text>
        <Text style={styles.paragrafo}>
          {
            "   Há um consenso entre os historiadores de que a Índia é o mais provável berço do esporte. A principal diferença entre o jogo atual e seu antecessor ficava por conta da limitação de movimento das peças. O atual bispo era conhecido como elefante, enquanto a dama, peça mais poderosa do xadrez moderno, era conhecida como vizir."
          }
        </Text>
        <Text>{"\n"}</Text>
        <Image
          style={[styles.images]}
          source={require("../../../../../assets/Learning-bro2.png")}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.paragrafo}>
          {
            "   Mas foi na França, no século XVIII, que eventos de xadrez, passaram a ganhar repercussão. Os mestres da época se enfrentavam em partidas épicas, cujo palco eram as coffee houses, casas de café e chá distribuídas pelas maiores cidades europeias."
          }
        </Text>
        <Text style={styles.paragrafo}>
          {
            "   No século seguinte, os clubes de xadrez tiveram um rápido desenvolvimento e partidas por correspondência entre cidades tornaram-se comuns. Jornais passaram a destacar o jogo e publicações foram feitas contendo ideias avançadas dos mais célebres enxadristas da época."
          }
        </Text>
        <Text>{"\n\n\n\n"}</Text>
        <Text style={styles.titulos}>
          {"Importância do xadrez na educação"}
        </Text>
        <Text>{"\n"}</Text>
        <Text style={styles.paragrafo}>
          {
            "    Fica claro, portanto, que o xadrez, além de ser um esporte para muitos, serve, também, como ferramenta de aprendizado para os mais jovens. A prática desenvolve habilidades como: memória, concentração, planejamento e tomadas de decisões."
          }
        </Text>
        <Text style={styles.paragrafo}>
          {
            "\n   O xadrez é considerado um excelente suporte pedagógico visto que se relaciona com diversas disciplinas, incluindo Matemática, Artes, História e Geografia. Outro ponto fundamental é que o esporte desenvolve o espírito ético de seus praticantes. Não há formas de burlar a regra no xadrez."
          }
        </Text>
        <Text>{"\n"}</Text>
        <Image
          style={styles.images}
          source={require("../../../../../assets/Book_lover.png")}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.paragrafo}>
          {
            "   Na Matemática explora-se inicialmente o tabuleiro e a movimentação das peças associadas com a Geometria e suas dimensões. Nas Artes, exploram-se as formas das peças através do uso da argila, pintura, técnicas com materiais recicláveis. Na História, pode ser trabalhada a questão da origem do xadrez, a cultura dos seus povos e a relação entre aspectos sociais e políticos. Na Geografia, pode ser abordada a localização onde o jogo de xadrez era praticado."
          }
        </Text>
        <Text>{"\n\n\n\n"}</Text>
        <Text style={styles.titulos}>{"     como jogar"}</Text>
        <Text style={styles.paragrafo}>
          {
            "    Há um consenso entre os historiadores de que a Índia é o mais provável berço do esporte. A principal diferença entre o jogo atual e seu antecessor ficava por conta da limitação de movimento das peças. O atual bispo era conhecido como elefante, enquanto a dama, peça mais poderosa do xadrez moderno, era conhecida como vizir."
          }
        </Text>
        <Text>{"\n\n\n\n\n"}</Text>
        <View style={styles.containerBotao}>
          <TouchableOpacity
            style={styles.botaoTouchable}
            onPress={() => {
              navigation.navigate("TextoAprendizagem2");
            }}
          >
            <View style={styles.botao}>
              <Text style={styles.botaoText}>{"Proximo"}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text>{"\n"}</Text>
      </ScrollView>
      <View style={{ position: "absolute", top: 50, left: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >

          <View>
            <Image source={require("../../../../../assets/IconBack.png")} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0F4C75",
  },
  menu: {
    width: "100%",
    height: 130,
    backgroundColor: "#07395A",
    justifyContent: "center",
    alignItems: "center",
  },
  tituloMenu: {
    color: "white",
    fontSize: 20,
  },

  titulos: {
    width: "80%",
    left: "10%",
    color: "white",
    fontSize: 20,
    top: -10,
  },
  paragrafo: {
    width: "80%",
    left: "10%",
    textAlign: "justify",

    color: "white",
  },
  images: {
    width: "80%",
    height: 300,
    left: "10%",
  },
  botaoTouchable: {
    width: "25%",
    height: 40,
  },
  botao: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    elevation: 20,
  },
  botaoText: {
    color: "#0F4C75",
  },
  containerBotao: {
    width: "100%",
    alignItems: "center",
  },
});
