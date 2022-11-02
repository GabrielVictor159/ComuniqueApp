
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


import CronogramaAtividade from "../../../../../componentes/CronogramaAtividade";
import dataConvert from "../../../../../configs/dataConvert";
import CronogramaStyle from "../../../../../estilos/Views_Estilos/CronogramaStyle";
import cores from "../../../../../estilos/Views_Estilos/CronogramaCores"
import PopMenu from "../PopMenu";
let contador =0;
export default function ListaCronogramaView (props) {

 
 
 
  
  let [atividades, setAtividades] = useState(props.cronograma);
  let [mapAtividades, setMapAtividades] = useState()

  useEffect(()=>{
    setInterval(()=>{
        setMapAtividades(atividadeReturn(props.cronograma))
    }, 1000)
    
  },[])
 function atividadeReturn(callback) {

    return  callback.filter(post => {
      if(props.busca === ''){
        return post;
      }
      else if(post.text.toLowerCase().includes(props.busca.toLowerCase())){
        return post;
      }
  }).map((value, index) => {
      

     
        return (
          <View style={{ left: "14%" }} key={index}>
            <CronogramaAtividade
             ano={value.data.substring(0, 4)}
             dia={value.data.substring(8, 10)}
             mes={dataConvert(value.data.substring(5, 7))}
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
      
    });
  }

 
    return (
      <>
        
          <View style={styles.CronogramaStyle.body}>
            <View style={styles.CronogramaStyle.containerConteudo}>
              <View style={styles.CronogramaStyle.linhaDeFundo} />

              
                <ScrollView>
                  <Text>{"\n"}</Text>
                  {mapAtividades}
                </ScrollView>
             
            </View>

            
          </View>
        <PopMenu setBusca={props.setBusca} popWidth={props.popWidth}/>
      </>
    );
  }


const styles = StyleSheet.create({
  CronogramaStyle,
});
