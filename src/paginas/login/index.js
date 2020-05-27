import React, {useContext} from 'react';
import {Text,View,TextInput,TouchableOpacity,AsyncStorage,StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../../contexts/auth';
import styles from './styles.js';

import {useNavigation} from '@react-navigation/native';
import Logo from '../../media/logo.png';

export default function Login({navigation}){
  const {signed, Logar,setPassword,setEmail} = useContext(AuthContext);

console.log(signed);




function Autenticar(){
  Logar();
}

function Cadastrar(){
  navigation.push('Cadastro');
}

function EsqueciSenha(){
  navigation.push('EsqueciSenha')
}

  return(
    <View style={styles.container}>
      <Image source={Logo} style={{width: 130, height: 130, resizeMode: 'contain',marginVertical: 20}}/>

      <Text style={{fontWeight: 'bold', color: '#5184A9',fontStyle: 'italic'}}>Entre na sua conta <Icon name="ios-contact" size={15} color="#5184A9" /></Text>

      <View style={styles.formulario}>
        <View style={styles.inputBox}>
          <View>
          <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Email</Text>
          <TextInput style={styles.input} placeholder="Digite o seu E-mail" placeholderTextColor="#5184A9" onChangeText={(value)=>setEmail(value)} />
          </View>
        </View>


        <View style={styles.inputBox}>
          <View>
          <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Senha</Text>
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Digite a sua senha" placeholderTextColor="#5184A9" onChangeText={(value)=>setPassword(value)}  />
          </View>
          <TouchableOpacity style={styles.btnCadastro} onPress={EsqueciSenha} >
            <Text style={{fontWeight: 'bold', color: 'gray'}}>Esqueci a senha </Text>
              <Icon name="ios-user" size={14} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={Autenticar}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Logar  <Icon name="ios-log-in" size={14} color="#fff" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastro} onPress={Cadastrar} >
          <Text style={{fontWeight: 'bold', color: '#5184A9'}}>Criar uma conta </Text>
            <Icon name="ios-create" size={14} color="#5184A9" />
        </TouchableOpacity>

      </View>

    </View>
  );



}
