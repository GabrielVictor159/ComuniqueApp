import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, TouchableOpacity, Text, Image, ScrollView,  TextInput, Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import IconBack from "../assets/IconBack";
import CronogramaAtividade from "../componentes/CronogramaAtividade";
import dataConvert from "../configs/dataConvert";
const cores = {
    red1:'#B75353',
    red2:'#563838',
    blue:'#539FB7',
    green:'#3C8544',
}




export default class Cronograma extends React.Component{
    constructor(props){
        super(props);
        this.state={
            busca:'',
            Atividades:[
                { id:0, data:'09/12/2022', cor:cores.red1, prazo:'30 dias', text:'terminar exercicio'},
                { id:1, data:'17/03/2022', cor:cores.blue, prazo:'30 dias', text:'terminar exercicio'},
                { id:2, data:'25/04/2022', cor:cores.green, prazo:'30 dias', text:'terminar exercicio'},
                { id:3, data:'18/08/2022', cor:cores.red1, prazo:'30 dias', text:'terminar exercicio'},
                { id:4, data:'20/06/2022', cor:cores.green, prazo:'30 dias', text:'terminar exercicio'},
                { id:5, data:'28/09/2022', cor:cores.blue, prazo:'30 dias', text:'terminar exercicio'},
            ],
            pop:0,
            estado:0,
            AdicionarDia:'',
            AdicionarMes:'',
            AdicionarCor:'',
            AdicionarPrazo:'',
            AdicionarText:'',
            
        }
    }

    atividadeReturn(callback){
        return callback.map(value =>{
            return(
                <View style={{left:'14%'}} key={value.id}>
                     <CronogramaAtividade dia={value.data.substring(0,2)} mes={dataConvert(value.data.substring(3,5))} color={value.cor} width={241} height={106} backgroundColor='#CDCDCD' texto={value.text} prazo={value.prazo}/>
                     <Text>{'\n'}</Text>
                </View>
               
            
            );
        })
    }
    adicionarItem(){
        try{
            if(this.state.AdicionarDia>=0 && this.state.AdicionarDia<=32){
                if(this.state.AdicionarMes>0 && this.state.AdicionarMes<=12){
                    this.state.Atividades.push({id:6, data:this.state.AdicionarDia+'/'+this.state.AdicionarMes, cor:'red', prazo:this.state.AdicionarPrazo, text:this.state.AdicionarText})
                    this.setState({estado:0})
                }
                else{
                    alert('Mês invalido');
                }
            }
            else{
                alert('Dia invalido')
            }
            
        }
        catch{

        }
      
    }
    render(){
        return(
            <>
            <TouchableWithoutFeedback
            onPress={()=>{this.setState({pop:0})}}
            >
            <View style={{width:'100%', height:'100%', backgroundColor:'white'}}>
                
                <View style={{position:'absolute', top:'15%', width:'100%', height:'85%'}}>
                <View style={{width:4, height:'100%', backgroundColor:'#626262', position:'absolute', left:'22%', opacity:0.5}}/>
                { 

               this.state.estado===0
                 ?   <ScrollView>
                        <Text>{'\n'}</Text>
                    {this.atividadeReturn(this.state.Atividades)}
                    </ScrollView>

                :
                <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row', left:-32, top:100}}>
    <View style={{flexDirection:'column'}}>
    <TextInput 
            style={{color:'white', backgroundColor:'#505050', textAlign:'center', width:60, borderRadius:15}}
            keyboardType={"number-pad"}
            placeholderTextColor={'white'}
            placeholder={'Dia'}
            onChangeText={
                dia => {this.setState({AdicionarDia:dia})}
            }
            />
        <TextInput 
            style={{color:'white', backgroundColor:'#505050', textAlign:'center', width:60, borderRadius:15, top:20}}
            keyboardType={"number-pad"}
            placeholderTextColor={'white'}
            placeholder={'Mes'}
            onChangeText={
                mes => {this.setState({AdicionarMes:mes})}
            }
            />
    </View>
    <View style={{width:15, height:15, borderRadius:20, left:10, backgroundColor:'black', top:10}}/>
    <View style={{width:241, height:106, backgroundColor:'#CDCDCD', flexDirection:'column', justifyContent:'center', borderRadius:15 , left:30,
    shadowColor: "#000",
    
    shadowOpacity: 1,
    shadowRadius: 1,
    
    elevation: 7,
}}>     
        <TextInput 
            style={{color:'white', backgroundColor:'#505050', textAlign:'center', width:'50%', borderRadius:15}}
            keyboardType={"default"}
            placeholderTextColor={'white'}
            placeholder={'Prazo'}
            onChangeText={
                Prazo => {this.setState({AdicionarPrazo:Prazo})}
            }
            />
        <TextInput 
            style={{color:'white'}}
            keyboardType={"default"}
            placeholder={'Mensagem'}
            onChangeText={
                text => {this.setState({AdicionarText:text})}
            }
            />
       
        
        
        
    </View>
    
    </View>
    <TouchableOpacity   style={{width:'50%', height:40, backgroundColor:cores.red1, borderRadius:30, justifyContent:'center', alignItems:'center', left:30, top:140}}
    onPress={()=>{
        this.adicionarItem();
    }}
    >
    <View>
        <Text style={{fontSize:20, color:'white'}}>{'salvar'}</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity   style={{width:'50%', height:40, backgroundColor:cores.red1, borderRadius:30, justifyContent:'center', alignItems:'center', left:30, top:160}}
    onPress={()=>{
        this.setState({estado:0});
    }}
    >
    <View>
        <Text style={{fontSize:20, color:'white'}}>{'voltar'}</Text>
        </View>
    </TouchableOpacity>
   
    
    </View>             
                }
                
                </View>
                
                <View style={{width:'100%', height:130}}>
                    <LinearGradient style={{width:'100%', height:'100%'}}
                     colors={[cores.red1, cores.red2]} start={[0, 0]} end={[1, 1]}
                    />
                    <View style={{position:'absolute', left:'5%', top:'25%'}}>
                    <TouchableOpacity 
                     onPress={()=>{
                     this.props.navigation.goBack();
                        
                         }}
                         >
                              <IconBack width={28} height={29} />
                     </TouchableOpacity>
                    </View>
                   
                    
                         
                    <Text style={{position:'absolute', top:'60%', left:'7%', fontSize:22, color:'white'}}>{'Cronograma'}</Text>
                </View>
                
            </View>
            </TouchableWithoutFeedback>
            
            <View style={{width:this.state.pop===0?0:168, height:321, backgroundColor:cores.red1, position:'absolute', borderRadius:20, left:'40%', top:40, alignItems:'center', overflow:'hidden', justifyContent:'space-evenly'}}>
                <View style={{width:'80%', flexDirection:'row', alignItems:'center'}}>
                <Image style={{width:40, height:42}} source={require('../assets/Lupa.png')}/>
                <Text style={{color:'white', fontSize:15, left:10}}>{'Pesquisar'}</Text>
                </View>
                <View style={{width:'80%'}}>
                    <TouchableOpacity style={{flexDirection:'row', flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{this.setState({estado:1})}}
                    >
                    <Image style={{width:40, height:42}} source={require('../assets/AdicionarItem.png')}/>
                <Text style={{color:'white', fontSize:15, left:10}}>{'Criar'}</Text>
                    </TouchableOpacity>
               
                </View>
                <View style={{width:'80%', flexDirection:'row', alignItems:'center'}}>
                <Image style={{width:40, height:42}} source={require('../assets/Lixeira.png')}/>
                <Text style={{color:'white', fontSize:15, left:10}}>{'Excluir'}</Text>
                </View>

            </View>
            <View style={{ position:'absolute', top:'5%', left:'85%'}}>
                    <TouchableOpacity
                    onPress={()=>{this.setState({pop:1})}}
                    >
                    <Image style={{width:35, height:35}} source={require('../assets/PopMenu.png')}/>
                    </TouchableOpacity>
            </View>
            </>
        );
    }
}