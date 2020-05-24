import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../paginas/login';
import Cadastro from '../paginas/cadastro';
const AuthStack = createStackNavigator();

export default function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="Logar" component={Login} options={{headerShown: false}}/>
      <AuthStack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  )
}
