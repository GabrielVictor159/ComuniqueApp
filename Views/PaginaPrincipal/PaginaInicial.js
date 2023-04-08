import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import axios from 'axios';
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppState, BackHandler, Text } from "react-native";
import { UserContext } from '../../App';
import TabBarIcons from "../../componentes/TabBarIcons";
import addImageToBackground from '../../configs/addImageToBackground';
import createBlobFromLocalImage from '../../configs/createBlobFromLocalImage';
import ImageStorage from '../../configs/ImageStorage';
import keys from '../../configs/keys';
import mensagensImageTextConvert from '../../configs/mensagensImageTextConverts';
import Personalizar from "./Configurações/Personalizar";
import Comunicacao from "./Mensagens/Comunicacao";
import PaginaUsuario from "./Usuario/PaginaUsuario";
const TabBarIconsConfig = {
  sizeActive: 50,
  sizeInactive: 50,
  backgroundColorActive: "",
  backgroundColorInactive: "",
  topActive: 0,
  topInactive: 0,
};
const Tab = createMaterialTopTabNavigator();
export default function PaginaInicial(props) {

  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const [display, setDisplay] = useState('flex');
  const navigation = useNavigation();

  const { user, setUser } = useContext(UserContext);
  const [chats, setChats] = useState([]);
  const [mensagens, setMensagens] = useState([])
  const [mensagensNaoLidas, setMensagensNaoLidas] = useState([]);
  const [jogando, setJogando] = useState(false);
  useLayoutEffect(() => {
    getAllChat()
    AsyncStorage.getItem(`${user.idUsuario}_mensagens`)
      .then(mensagens => {
        if (mensagens === null) {
          AsyncStorage.setItem(`${user.idUsuario}_mensagens`, JSON.stringify([]))
            .catch(error => console.log(error));
        } else {
          setMensagens(JSON.parse(mensagens));
        }
      })
      .catch(error => console.log(error));

    getMensagens()
    axios.put(`${keys.linkBackEnd}Usuarios/online/${user.email}/${user.senha}/true`)
  }, [])
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'background') {
        axios.put(`${keys.linkBackEnd}Usuarios/online/${user.email}/${user.senha}/false`);
      }
    };
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      subscription.remove();
    };
  }, []);




  useEffect(() => {
    let intervalId;
    if (!jogando) {
      intervalId = setInterval(() => {
        getAllChat()
      }, 6000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [jogando, user]);

  const getAllChat = () => {
    axios.get(`${keys.linkBackEnd}Chat/getAll/${user.email}/${user.senha}`)
      .then(response => {
        if (response.status === 200) {
          setChats(response.data)
        }
      });
  }

  useEffect(() => {

    let intervalId;
    if (!jogando) {
      intervalId = setInterval(() => {
        getMensagens()
      }, 6000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [jogando, user]);

  const getMensagens = () => {
    axios.get(`${keys.linkBackEnd}Mensagens/getAllUser/${user.email}/${user.senha}`)
      .then(response => {
        if (response.status === 200) {
          AsyncStorage.getItem(`${user.idUsuario}_mensagens`)
            .then(mensagensValue => {
              const arrayMensagens = JSON.parse(mensagensValue);
              const mensagensAtualizadas = [...arrayMensagens];

              response.data.forEach(novaMensagem => {
                const mensagemExistente = mensagensAtualizadas.find(
                  mensagem => mensagem.idMensagens === novaMensagem.idMensagens
                );
                if (!mensagemExistente) {
                  mensagensAtualizadas.push(novaMensagem);
                  if (novaMensagem.usuarioEnviou !== user.idUsuario && novaMensagem.entregue === false) {
                    axios.put(`${keys.linkBackEnd}Mensagens/confirmarEntrega/${user.email}/${user.senha}/${novaMensagem.idMensagens}`)
                      .then(response => {
                        console.log('Mensagem entregue com sucesso!');
                      })
                      .catch(error => {
                        console.log(`Erro ao confirmar entrega da mensagem: ${error}`);
                      });
                  }
                  if (novaMensagem.isFile) {
                    ImageStorage.addImage(`${keys.linkBackEnd}images/${mensagensImageTextConvert.getContentBetweenDelimiters(novaMensagem.mensagem, "§")}`)
                  }
                }
              });

              AsyncStorage.setItem(`${user.idUsuario}_mensagens`, JSON.stringify(mensagensAtualizadas.sort((a, b) => a.dataMensagem - b.dataMensagem)))
                .then(() => {
                  setMensagens(mensagensAtualizadas.sort((a, b) => new Date(a.dataMensagem) - new Date(b.dataMensagem)));
                })
                .catch(error => console.log(error));
            })
        }
      });
  }
  useEffect(() => {
    const naoLidas = []
    mensagens.forEach(a => {
      if (a.lida === false && a.usuarioEnviou !== user.idUsuario) {
        naoLidas.push(a)
      }
    })
    setMensagensNaoLidas(naoLidas);
  }, [mensagens]);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="PaginaUsuario"
        tabBarPosition="bottom"
        screenOptions={{
          swipeEnabled: swipeEnabled,
          tabBarIndicatorStyle: {
            height: 0,
          },
          tabBarStyle: { height: 80, display: display },
          tabBarIconStyle: { alignItems: 'center' },
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="PaginaUsuario"

          children={() => <PaginaUsuario setJogando={setJogando} swipe={setSwipeEnabled} navDisplay={setDisplay} />}
          options={{
            tabBarLabel: ({ focused }) => {
              return <Text style={{ fontSize: 14, top: 12, color: focused === true ? "#277BC0" : "black" }}>{'Principal'}</Text>
            },
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabBarIcons
                focused={focused}
                name="Home"
                sizeActive={TabBarIconsConfig.sizeActive}
                sizeInactive={TabBarIconsConfig.sizeInactive}
                backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
                backgroundColorInactive={
                  TabBarIconsConfig.backgroundColorInactive
                }
                topActive={TabBarIconsConfig.topActive}
                topInactive={TabBarIconsConfig.topInactive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Comunicacao"
          children={() => <Comunicacao mensagens={mensagens} setMensagens={setMensagens} chats={chats} setChats={setChats} mensagensNaoLidas={mensagensNaoLidas} setMensagensNaoLidas={setMensagensNaoLidas} swipe={setSwipeEnabled} navDisplay={setDisplay} />}

          options={{

            tabBarLabel: ({ focused }) => {
              return <Text style={{ fontSize: 14, top: 12, color: focused === true ? "#277BC0" : "black" }}>{'Conversas'}</Text>
            },
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabBarIcons
                focused={focused}
                name="Chat"
                mensagensNaoLidas={mensagensNaoLidas.length}
                sizeActive={TabBarIconsConfig.sizeActive}
                sizeInactive={TabBarIconsConfig.sizeInactive}
                backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
                backgroundColorInactive={
                  TabBarIconsConfig.backgroundColorInactive
                }
                topActive={TabBarIconsConfig.topActive}
                topInactive={TabBarIconsConfig.topInactive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Personalizar"
          children={() => <Personalizar navigationReset={navigation} />}
          options={{
            tabBarLabel: ({ focused }) => {
              return <Text style={{ fontSize: 14, top: 12, color: focused === true ? "#277BC0" : "black" }}>{'Configurações'}</Text>
            },
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabBarIcons
                focused={focused}
                name="Personalizar"
                sizeActive={TabBarIconsConfig.sizeActive}
                sizeInactive={TabBarIconsConfig.sizeInactive}
                backgroundColorActive={TabBarIconsConfig.backgroundColorActive}
                backgroundColorInactive={
                  TabBarIconsConfig.backgroundColorInactive
                }
                topActive={TabBarIconsConfig.topActive}
                topInactive={TabBarIconsConfig.topInactive}
              />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>

  );

}

