import {StyleSheet} from 'react-native';

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
 flat:{
   height: 0,
   paddingTop: 15,
 },
 item: {
   backgroundColor: '#5184A9',
   padding: 5,
   marginHorizontal: 8,
   height: 210,
   width: 210,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 9,
 },
 title: {
   fontSize: 12,
   color: '#fff',
   fontWeight: 'bold'
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
   width: 50,
   height: 50,
   borderRadius: 11,
   margin: 20,
   justifyContent: 'center',
   alignItems: 'center',
 },

});

export default styles;
