import React, {useContext} from 'react';
import {Text,View,TextInput,TouchableOpacity,AsyncStorage,StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../../contexts/auth';
import styles from './styles.js';

import {useNavigation} from '@react-navigation/native';
import Logo from '../../media/logo.png';

export default function EsqueciSenha({navigation}){
  const {signed, EsqueciSenha,setPassword,setEmail} = useContext(AuthContext);

console.log(signed);




function Resetar(){
  EsqueciSenha();
}

const navegar = useNavigation()

function voltar(){
  navegar.goBack();
}

  return(
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: '#5184A9',fontStyle: 'italic',fontSize: 20}}>Reset sua senha, Digite o seu e-mail</Text>
      <Text style={{textAlign: 'center', marginHorizontal:30, fontWeight: 'bold', color: 'gray',fontStyle: 'italic'}}>ATENÇÃO: Nós mandaremos um e-mail para você com o token, você copia e utiliza ele para resetar!</Text>

      <View style={styles.formulario}>
        <View style={styles.inputBox}>
          <View>
          <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Email</Text>
          <TextInput style={styles.input} placeholder="Digite o seu E-mail" placeholderTextColor="#5184A9" onChangeText={(value)=>setEmail(value)} />
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
