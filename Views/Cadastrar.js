import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, Image} from "react-native";
import Button1 from "../componentes/Button1";
import { cores } from "../estilos";
import CadastrarStyle from "../estilos/Views_Estilos/CadastrarStyle";


export default class Cadastrar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoria:'',
            nome:'',
            email:'',
            senha:'',
            confirmarSenha:'',
        }
        
    }
    render(){
        return(
    <View style={styles.CadastrarStyle.body}>
        <Text style={styles.CadastrarStyle.textTitulo}
        >
            Registre-se
        </Text>
        <Image  style={styles.CadastrarStyle.imageBackground}
        
        source={require("../assets/Login-rafiki1.png")}/>
        
       <View style={styles.CadastrarStyle.viewMiddle}>
            
            <View style={styles.CadastrarStyle.viewInputs}>
                <View style={styles.CadastrarStyle.selectCategoria}>
                    <Pressable 
                    
                    style={this.state.categoria==='Aluno'?styles.CadastrarStyle.selectActive:styles.CadastrarStyle.selectInative}
                    onPress={()=>
                    this.setState({categoria:'Aluno'})
                    }
                    >
                        <Text >Aluno</Text>
                    </Pressable>
                    <Pressable
                     style={this.state.categoria==='Professor'?styles.CadastrarStyle.selectActive:styles.CadastrarStyle.selectInative}
                     onPress={()=>
                        this.setState({categoria:'Professor'})
                        }
                    >
                        <Text>Professor</Text>
                    </Pressable>
                </View>
                <Text>
                    {"\n"}
                </Text>
                <TextInput style={styles.CadastrarStyle.input}
                placeholder={'Nome Completo'}
                keyboardType={"default"}
                onChangeText={
                    nome => {this.setState({nome})}
                }
                />
                <Text>
                    {"\n"}
                </Text>
                <TextInput style={styles.CadastrarStyle.input}
                placeholder={'Email'}
                keyboardType={"email-address"}
                onChangeText={
                    email => {this.setState({email})}
                }
                />
                <Text>
                    {"\n"}
                </Text>
                <TextInput style={styles.CadastrarStyle.input}
                placeholder={'Senha'}
                keyboardType={"default"}
                secureTextEntry={true}
                onChangeText={
                    senha => {this.setState({senha})}
                }
                />
                <Text>
                    {"\n"}
                </Text>
                <TextInput style={styles.CadastrarStyle.input}
                placeholder={'Confirmar Senha'}
                keyboardType={"default"}
                secureTextEntry={true}
                onChangeText={
                    confirmarSenha => {this.setState({confirmarSenha})}
                }
                />
            </View>
            <View style={styles.CadastrarStyle.viewButtons}>
            <Button1 width={220} height={'60%'} borderRadius={20} fontSize={20} tipoNavegacao='navigate'  navegacao='Logar'  texto='Cadastrar' color1={cores.buttonGradientColor1} color2={cores.buttonGradientColor2}/>
            <Text>
                {'\n'}
            </Text>
                <TouchableOpacity
                onPress={()=>
                    this.props.navigation.goBack()
                }
                >
                    <Text style={styles.CadastrarStyle.linkText}>Voltar</Text>
                </TouchableOpacity>
            </View>
       </View>
    </View>
        );
    }
}

const styles = StyleSheet.create({
   CadastrarStyle
})
