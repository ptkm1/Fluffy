import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';


const {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
   flex: 1,
   height: '100%',
   width: '100%',
 },
 header: {
   height: 94,
   width: '100%',
   alignItems: 'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
 },
 headerContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: 20,
   paddingVertical: 30,
   paddingHorizontal: 10,
    width: '100%',
 },
 welcome: {
   fontSize: 34,
   textAlign: 'left',
   fontWeight: '700',
   color: '#ffffff'
 },
 avatar: {
   width: 44,
   height: 44,
   resizeMode: 'contain',
   borderRadius: 22
 },
 deslog:{
   width: 30,
   height: 30,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 100
 },
item: {
   borderWidth: 1,
   borderColor: 'royalblue'
 },
 icons:{
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',

 },
 botoes:{
   backgroundColor: '#5184A9',
   width: 60,
   height: 60,
   borderRadius: 11,
   margin: 10,
   justifyContent: 'center',
   alignItems: 'center',
 },
 add:{
   width: 60,
   height: 60,
   borderRadius: 11,
   justifyContent: 'center',
   alignItems: 'center',
 },
 box:{
   backgroundColor: '#5184A9',
   padding: 3,
   marginLeft: 9,
   marginRight: 9,
   height: height * 0.2,
   width: width * 0.45,
   alignItems: 'center',
   borderRadius: 15,
 },
 titulo:{
   fontSize: 12,
   color: '#fff',
   fontWeight: 'bold'
 },
 descricao:{
   fontSize: 9,
   color: 'whitesmoke',
   fontWeight: 'bold',
   fontStyle: 'italic'
 },
 deleteEinfo:{
   flexDirection: 'row',
   marginBottom: 5,
   marginTop: 5,
   width: "100%",
   justifyContent: 'flex-start',
 },
 conteudo:{
   width: '100%',
   justifyContent: 'flex-start',
   alignItems: 'center',
   marginTop: "20%",
 }

});

export default styles;
