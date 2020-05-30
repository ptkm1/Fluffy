import React,{useContext,useState,useEffect} from 'react';
import {View,Text, AsyncStorage, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles.js';
import AuthContext from '../../contexts/auth';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedHeader from '../../componentes/header';
import Perfil from '../../media/user.png';

import api from '../../services/api';


export default function Dashboard(){
  const {signed, user, Deslogar} = useContext(AuthContext)

  const [title,setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [tarefa,setTarefa] = useState('')


async function CriarPost(){
  try{
    const response = api.post('/projetos',{
      title: title,
      description: desc,
      tasks:[
        {
          title: tarefa,
        }
      ]
    })
    navegar.push('Dashboard');
  }catch(response){
    alert(response)
  }


}



function sair(){
  Deslogar();
}


const navegar = useNavigation()

function voltar(){
  navegar.goBack();
}




  return (
    <>
    <View style={styles.header}>

      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar rounded source={Perfil}/>
          <Text style={{marginLeft: 5, fontWeight: 'bold', color: '#5184A9'}}>{user.name}</Text>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <TouchableOpacity style={styles.deslog} onPress={sair}>
              <Icon name="ios-exit" size={20} color="#5184A9" />
            </TouchableOpacity>
        </View>
      </View>
    </View>


    <ScrollView style={styles.container}>

    <View style={styles.post}>

    <TouchableOpacity style={{flexDirection: 'row',justifyContent: "flex-start",alignItems: 'center',marginLeft: -270, fontWeight: 'bold', color: '#5184A9'}} onPress={voltar}>
      <Icon name="ios-arrow-round-back" size={20} color="#5184A9" />
      <Text style={{color: "#5184A9", fontWeight: "bold", fontStyle: "italic" }}>Voltar</Text>
    </TouchableOpacity>

      <View style={styles.inputBox}>
        <View>
        <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Título</Text>
        <TextInput style={styles.input} placeholder="Dê um Título" placeholderTextColor="#5184A9" onChangeText={(value)=>setTitle(value)} />
        </View>
      </View>

      <View style={styles.inputBox}>
        <View>
        <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Descrição</Text>
        <TextInput style={styles.input} placeholder="Descreva resumidamente o projeto" placeholderTextColor="#5184A9" onChangeText={(value)=>setDesc(value)} />
        </View>
      </View>

      <View style={styles.inputBox}>
        <View>
        <Text style={{fontWeight: 'bold', color: '#5184A9', marginVertical: 5}}>Título da tarefa</Text>
        <TextInput style={styles.input} placeholder="Qual Tarefa a ser feita" placeholderTextColor="#5184A9" onChangeText={(value)=>setTarefa(value)} />
        </View>
      </View>

      <TouchableOpacity style={{flexDirection: "row",alignItems: "center", marginTop: 10}} onPress={CriarPost} >
        <Text style={{fontWeight: 'bold', color: '#5184A9', marginRight: 3}}>Criar novo projeto </Text>
          <Icon name="ios-add-circle" size={20} color="#5184A9" />
      </TouchableOpacity>

    </View>




    </ScrollView>
    </>
  );
}
