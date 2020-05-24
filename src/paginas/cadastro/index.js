import React, {useContext} from 'react'
import {Text,View,TextInput,TouchableOpacity,AsyncStorage,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../../contexts/auth';
import styles from './styles.js';

import {useNavigation} from '@react-navigation/native';

export default function Cadastro(){
  const {signed, Cadastrar, setName,setEmail,setPassword} = useContext(AuthContext);

  function Criar(){
    Cadastrar();
  }

  const navegar = useNavigation()

  function voltar(){
    navegar.goBack();
  }

console.log(signed);
  return(
    <View style={styles.container}>

      <TouchableOpacity style={styles.voltar} onPress={voltar} >
        <Icon name="ios-undo" size={15} color="gray" />
        <Text style={{fontWeight: 'bold', color: 'gray',}}> Já tenho uma conta :D</Text>
      </TouchableOpacity>

      <Text style={{fontWeight: 'bold', color: '#5184A9', fontStyle: 'italic'}}>Crie uma conta novinha!</Text>

      <View style={styles.inputBox}>
        <View>
        <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Nome</Text>
        <TextInput style={styles.input} onChangeText={(value)=>setName(value)} />
        </View>
      </View>


      <View style={styles.inputBox}>
        <View>
        <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Digite a sua senha" onChangeText={(value)=>setPassword(value)}  />
        </View>
      </View>

      <View style={styles.inputBox}>
        <View>
        <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Email</Text>
        <TextInput style={styles.input} onChangeText={(value)=>setEmail(value)} />
        </View>
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={Criar} >
        <Text style={{fontWeight: 'bold', color: 'white'}}>Criar </Text>
          <Icon name="ios-done-all" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );



}
