import React,{useContext,useState,useEffect} from 'react';
import {View,Text, AsyncStorage, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles.js';
import AuthContext from '../../contexts/auth';

import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedHeader from '../../componentes/header'
import Perfil from '../../media/user.png';

import api from '../../services/api';

export default function Dashboard(){

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
  const FEEDE = feed[0]


  /*

        { feed.map(response=>(
          <View style={{marginTop:30}} key={feed.map(resp=>resp._id)}>
            <Text>{response.map(arr=>arr.tt)}</Text>
          </View>

        )) }
  */

  //DATA, COM OS 5 PRIMEIROS POSTS
  const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: objetos.map(arr=>arr[0]),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: objetos.map(arr=>arr[1]),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: objetos.map(arr=>arr[2]),
  },
  ];


function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

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


          <TouchableOpacity style={styles.deslog} onPress={sair}>
            <Icon name="ios-exit" size={20} color="#5184A9" />
          </TouchableOpacity>
      </View>
    </View>
    <Text style={{marginLeft: 20, fontWeight: 'bold', color: '#5184A9'}}>Hilights</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={FEEDE}
      renderItem={({ item }) => <Item title={item.title}/>}
      keyExtractor={item => item._id}
      style={styles.flat}
    />
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

      </View>




    </ScrollView>
    </>
  );
}
