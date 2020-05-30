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
 input:{
   borderWidth: 2,
   borderColor: '#5184A9',
   width: 270,
   height: 52,
   paddingLeft: 15,
 },
 inputBox:{
   alignItems: 'center',
   marginTop: 20,
 },
 post:{
   marginTop: 20,
   alignItems: 'center',
   justifyContent: 'center',
 }

});

export default styles;
