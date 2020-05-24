import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function Splashscreen(){
  return(
    <View style={styles.container}>
      <Text>FluffyApp</Text>
    </View>
  )

  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'violet',
      justifyContent: 'center',
      alignItems: 'center',
    }
  })

}
