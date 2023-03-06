import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { UserContext } from '../../App';
import TabBarIcons from "../../componentes/TabBarIcons";
import ImageStorage from '../../configs/ImageStorage';
import keys from '../../configs/keys';
import mensagensImmageTextConvert from '../../configs/mensagensImageTextConverts';
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

  useEffect(() => {
    let isMounted = true;

    AsyncStorage.getItem('chats')
      .then(chat => {
        if (chat === null) {
          AsyncStorage.setItem('chats', JSON.stringify([]))
            .catch(error => console.log(error));
        } else {
          if (isMounted) {
            setChats(JSON.parse(chat));
          }
        }
      })
      .catch(error => console.log(error));

    AsyncStorage.getItem('mensagens')
      .then(mensagens => {
        if (mensagens === null) {
          AsyncStorage.setItem('mensagens', JSON.stringify([]))
            .catch(error => console.log(error));
        } else {
          if (isMounted) {
            setMensagens(JSON.parse(mensagens));
          }
        }
      })
      .catch(error => console.log(error));

    const intervalId = setInterval(() => {

      axios.get(`${keys.linkBackEnd}Chat/getAll/${user.email}/${user.senha}`)
        .then(response => {
          if (response.status === 200) {
            AsyncStorage.getItem('chats')
              .then(chatsValue => {
                const arrayChats = JSON.parse(chatsValue);
                const chatsAtualizados = [...arrayChats];

                response.data.forEach(novoChat => {
                  if (!arrayChats.some(novoChat => novoChat.idChat === novoChat.idChat)) {
                    chatsAtualizados.push(novoChat);
                  }
                });

                AsyncStorage.setItem('chats', JSON.stringify(chatsAtualizados))
                  .then(() => {
                    if (isMounted) {
                      setChats(chatsAtualizados)
                    }
                  })
                  .catch(error => console.log(error));
              })
          }
        })

      axios.get(`${keys.linkBackEnd}Mensagens/getAllUser/${user.email}/${user.senha}`)
        .then(response => {
          if (response.status === 200) {
            AsyncStorage.getItem('mensagens')
              .then(mensagensValue => {
                const arrayMensagens = JSON.parse(mensagensValue);
                const mensagensAtualizadas = [...arrayMensagens];

                response.data.forEach(novaMensagem => {
                  if (!arrayMensagens.some(mensagem => mensagem.idMensagem === novaMensagem.idMensagem)) {
                    mensagensAtualizadas.push(novaMensagem);
                    axios.put(`${keys.linkBackEnd}Mensagens/confirmarEntrega/${user.email}/${user.senha}/${novaMensagem.idMensagem}`)
                      .then(response => {
                        console.log('Mensagem entregue com sucesso!');
                      })
                      .catch(error => {
                        console.log(`Erro ao confirmar entrega da mensagem: ${error}`);
                      });
                    if (novaMensagem.isFile) {
                      ImageStorage.addImage(`${keys.linkBackEnd}images/${mensagensImmageTextConvert.getContentBetweenDelimiters(novaMensagem.mensagem, "§")}`)
                    }
                  }
                });

                AsyncStorage.setItem('mensagens', JSON.stringify(mensagensAtualizadas))
                  .then(() => {
                    if (isMounted) {
                      setMensagens(mensagensAtualizadas);
                    }
                  })
                  .catch(error => console.log(error));
              })
          }
        })
    }, 60000);

    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const naoLidas = mensagens.filter(mensagem => !mensagem.lida);
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

          children={() => <PaginaUsuario swipe={setSwipeEnabled} navDisplay={setDisplay} />}
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

