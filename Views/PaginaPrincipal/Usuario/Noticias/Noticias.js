import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { fromLeft } from "react-navigation-transitions";
import { UserContext } from "../../../../App";
import keys from "../../../../configs/keys";
import NoticiasOneView from "./NoticiasOneView";
import NoticiasView from "./NoticiasView";
const Stack = createStackNavigator();
export default function Noticias(props) {

  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [noticias, setNoticias] = useState([])
  const [noticiaEscolha, setNoticiaEscolha] = useState();

  useEffect(() => {
    props.swipe(false);
    props.navDisplay("none");
    props.setJogando(true)
    return function () {
      props.swipe(true);
      props.navDisplay("flex");
      props.setJogando(false)
    };
  }, []);

  useLayoutEffect(() => {
    getNoticias()
      .then(data => setNoticias(data))
  }, [])

  const getNoticias = async () => {
    let resposta = await fetch(`${keys.linkBackEnd}Noticias/getAll/${user.instituicao.idInstituicao}`)
    if (resposta.status === 200) {
      return await resposta.json()
    }
    else {
      return []
    }
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="NoticiasView"
        transitionConfig={() => fromLeft(1000)}
      >
        <Stack.Screen
          name="NoticiasView"
          children={() => <NoticiasView noticias={noticias} setNoticias={setNoticias} navigation={navigation} setNoticiaEscolha={setNoticiaEscolha} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="NoticiaOneView"
          children={() => <NoticiasOneView noticia={noticiaEscolha} />}

          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}