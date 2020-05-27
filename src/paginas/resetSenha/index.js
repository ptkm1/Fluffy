import React, {useContext} from 'react';
import {Text,View,TextInput,TouchableOpacity,AsyncStorage,StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../../contexts/auth';
import styles from './styles.js';

import {useNavigation} from '@react-navigation/native';
import Logo from '../../media/logo.png';

export default function EsqueciSenha({navigation}){
  const {signed, ResetarSenha,setPassword,setEmail,setToken} = useContext(AuthContext);

console.log(signed);




function Resetar(){
  ResetarSenha();
}

const navegar = useNavigation()

function voltar(){
  navegar.goBack();
}

  return(
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold',fontSize: 18, color: '#5184A9',fontStyle: 'italic',marginHorizontal: 30, textAlign: 'center'}}>Tudo pronto? Vamos resetar sua senha!</Text>
      <Text style={{fontWeight: 'bold', color: '#5184A9',fontStyle: 'italic', marginHorizontal: 30, textAlign: 'center'}}>Verifique seu e-mail e colete o token para resetar sua senha!</Text>

      <View style={styles.formulario}>
        <View style={styles.inputBox}>
          <View>
          <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Email</Text>
          <TextInput style={styles.input} placeholder="Digite o seu E-mail" placeholderTextColor="#5184A9" onChangeText={(value)=>setEmail(value)} />
          </View>
        </View>

        <View style={styles.inputBox}>
          <View>
          <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Token recebido</Text>
          <TextInput style={styles.input} placeholder="Digite o novo token" placeholderTextColor="#5184A9" onChangeText={(value)=>setEmail(value)} />
          </View>
        </View>

        <View style={styles.inputBox}>
          <View>
          <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Senha</Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#5184A9" onChangeText={(value)=>setEmail(value)} />
          </View>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={Resetar}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Resetar  <Icon name="ios-log-in" size={14} color="#fff" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastro} onPress={voltar} >
          <Text style={{fontWeight: 'bold', color: '#5184A9'}}>Voltar</Text>
            <Icon name="ios-create" size={14} color="#5184A9" />
        </TouchableOpacity>
      </View>

    </View>
  );



}
