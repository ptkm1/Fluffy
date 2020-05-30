import React,{useContext,useState,useEffect} from 'react';
import {View,Text, AsyncStorage, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles.js';
import AuthContext from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedHeader from '../../componentes/header'
import Perfil from '../../media/user.png';

import api from '../../services/api';


export default function Dashboard({navigation}){


  function Postar(){
    navigation.push('criarPost');
  }


  async function Deletar(id){
    try{
      const response = await api.delete(`/projetos/${id}`);
        navigation.push('Dashboard');
    }catch(response){
      alert(response);
    }
  }

  const [objetos, setObjetos] = useState([])
  const [feed, setFeed] = useState([])



  useEffect(()=>{
    async function getProjetos(){
      try{
        const response = await api.get('/projetos');

        const { projetos } = response.data;

        setObjetos([projetos.map(arr=>arr.title)])
        setFeed([projetos])

console.log(projetos)
      }catch(response){
        alert(response.data.error)
      }
    }
    getProjetos()



  },[])

  //Feed
  const FEEDE = feed[0];

  const {signed, user, Deslogar} = useContext(AuthContext)

  function sair(){
    Deslogar();
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
          <TouchableOpacity style={styles.add} onPress={Postar}>
            <Icon name="ios-add" size={20} color="#5184A9" />
            <Text style={{marginLeft: 5, fontWeight: 'bold',fontSize: 8,textAlign: 'center',alignItems: 'center', color: '#5184A9'}}>Adicionar Projeto</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.deslog} onPress={sair}>
              <Icon name="ios-exit" size={20} color="#5184A9" />
            </TouchableOpacity>
        </View>
      </View>
    </View>
    <Text style={{marginLeft: 20, fontWeight: 'bold', color: '#5184A9'}}>Hilights</Text>

<View style={{marginVertical: 15, paddingLeft: 5,}}>
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={FEEDE}
    extraData={feed[0]}
    keyExtractor={incident => String(incident._id)}
    renderItem={({ item: incident })=> (
      <View style={styles.box}>
        <View style={styles.deleteEinfo}>
          <TouchableOpacity style={{marginLeft: 10,}} onPress={()=> Deletar(incident._id)}>
            <Icon name="ios-trash" size={16} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 10,}} onPress={()=> Deletar(incident._id)}>
            <Icon name="ios-build" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.conteudo}>
            <Text style={styles.titulo}>{incident.title}</Text>
            <Text style={styles.descricao}>{incident.description}</Text>
        </View>


      </View>
    )}
    />
</View>







    <ScrollView style={styles.container}>

      <View style={styles.icons} >

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-code" size={20} color="#FFF" />
          <Text style={{fontSize: 8, fontWeight: 'bold', color: '#fff'}}>Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-build" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Ferramentas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-bulb" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Idéias</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-chatbubbles" size={20} color="#FFF" />
            <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Comunidade</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-contacts" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Equipes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-rocket" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Carreira</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-sad" size={20} color="#FFF" />
            <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Reclamações</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-paper" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Forum</Text>
        </TouchableOpacity>




        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-code" size={20} color="#FFF" />
          <Text style={{fontSize: 8, fontWeight: 'bold', color: '#fff'}}>Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-build" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Ferramentas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-bulb" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Idéias</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-chatbubbles" size={20} color="#FFF" />
            <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Comunidade</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-contacts" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Equipes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-rocket" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Carreira</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-sad" size={20} color="#FFF" />
            <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Reclamações</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.botoes}>
          <Icon name="ios-paper" size={20} color="#FFF" />
          <Text style={{fontSize: 7, fontWeight: 'bold', color: '#fff'}}>Forum</Text>
        </TouchableOpacity>


      </View>




    </ScrollView>
    </>
  );
}
