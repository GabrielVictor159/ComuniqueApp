import React, { useEffect } from "react";
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
import IconBack from "../../../../../assets/IconBack";
export default function TextoAprendizagem2(props) {
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
          <Text style={styles.tituloMenu}>{"Xadrez Aprendizagem 2"}</Text>
        </View>
        <Text>{"\n"}</Text>
        <Text style={styles.titulos}>{"     Tabuleiro"}</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.paragrafo}>
          {
            "   O tabuleiro de xadrez conta com 64 casas distribuídas em 8 colunas (verticais) e 8 fileiras (horizontais), cada uma com 8 casas. As casas são alternadamente escuras e claras. A primeira casa no extremo esquerdo do tabuleiro deve ser uma casa preta e a última casa no extremo direito, uma casa branca."
          }
        </Text>
        
        <Text style={styles.paragrafo}>
          {
            "\n  Cada coluna é designada por uma letra (a a h), enquanto as fileiras são designadas por um número (1 a 8). Dessa forma cada casa é designada pela letra e número correspondentes a sua coluna e fileira (a1, b6, f5, etc.). Esse é o sistema padrão de notação em competições oficiais."
          }
        </Text>
        <Text>{'\n'}</Text>
        <Image
          style={[styles.images]}
          source={require("../../../../../assets/tabuleiro.jpg")}
        />
        <Text>{"\n\n"}</Text>
        <Text style={styles.titulos}>
          {
            "       Peças"
          }
        </Text>
        <Text>{'\n'}</Text>
        <Text style={styles.paragrafo}>{'      Rei \n'}</Text>
        <Text style={styles.paragrafo}>
          {
            "   Pode mover-se em qualquer direção, porém apenas uma casa por vez. \n"
          }
        </Text>
        <Image style={styles.images} source={require('../../../../../assets/Rei.png')}/>
        <Text>{"\n\n\n\n"}</Text>
        <Text style={styles.paragrafo}>
          {"        Dama \n"}
        </Text>
        <Text style={styles.paragrafo}>
          {
            "    Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres."
          }
        </Text>
        
        <Text>{"\n"}</Text>
        <Image
          style={styles.images}
          source={require("../../../../../assets/Dama.png")}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.paragrafo}>
          {"        Torre \n"}
        </Text>
        <Text style={styles.paragrafo}>
          {
            "     Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser."
          }
        </Text>
        <Text>{"\n"}</Text>
        <Image
          style={styles.images}
          source={require("../../../../../assets/torre.png")}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.paragrafo}>
          {"        Bispo \n"}
        </Text>
        <Text style={styles.paragrafo}>
          {
            "     Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas."
          }
        </Text>
        <Text>{"\n"}</Text>
        <Image
          style={styles.images}
          source={require("../../../../../assets/bispo.png")}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.paragrafo}>
          {"        Cavalo \n"}
        </Text>
        <Text style={styles.paragrafo}>
          {
            "     É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa."
          }
        </Text>
        <Text>{"\n"}</Text>
        <Image
          style={styles.images}
          source={require("../../../../../assets/cavalo.png")}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.paragrafo}>
          {"        Peão \n"}
        </Text>
        <Text style={styles.paragrafo}>
          {
            "     Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua."
          }
        </Text>
        <Text>{"\n"}</Text>
        <Image
          style={styles.images}
          source={require("../../../../../assets/peao.png")}
        />
        <Text>{"\n"}</Text>
        <Text>{"\n\n\n\n\n"}</Text>
        <View style={styles.containerBotao}>
        <TouchableOpacity
            style={styles.botaoTouchable}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.botao}>
              <Text style={styles.botaoText}>{"Voltar"}</Text>
            </View>
          </TouchableOpacity>
          <View style={{width:20}}/>
          <TouchableOpacity
            style={styles.botaoTouchable}
            onPress={() => {
              navigation.navigate("Questionario");
            }}
          >
            <View style={styles.botao}>
              <Text style={styles.botaoText}>{"Questionario"}</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.containerBotao}>
        
          <View style={{width:20}}/>
          <TouchableOpacity
            style={styles.textTouchable}
            onPress={() => {
              navigation.navigate("AprenderJogosView");
            }}
          >
           
              <Text style={{color:'white', fontSize:14, left:-10}}>{"Voltar ao menu"}</Text>
         
          </TouchableOpacity>
        </View>
        <Text>{"\n"}</Text>
      </ScrollView>
      <View style={{ position: "absolute", top: 50, left: 20}}>
        <TouchableOpacity
          onPress={() => {
           navigation.goBack();
          }}
        >
          
          <IconBack width={28} height={29} />
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
    width: "50%",
    height: 210,
    left: "25%",
  },
  botaoTouchable: {
    width: "25%",
    height: 40,
  },
  textTouchable: {
    width: "40%",
    height: 40,
    alignItems:'center',
    top:10
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
    flexDirection:'row',
    justifyContent:'center',
    
  },
});
