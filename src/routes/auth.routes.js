import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../paginas/login';
import Cadastro from '../paginas/cadastro';
import EsqueciSenha from '../paginas/esqueciSenha';
import ResetSenha from '../paginas/resetSenha';
const AuthStack = createStackNavigator();

export default function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="Logar" component={Login} options={{headerShown: false}}/>
      <AuthStack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{headerShown: false}}/>
      <AuthStack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
      <AuthStack.Screen name="ResetSenha" component={ResetSenha} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  )
}
