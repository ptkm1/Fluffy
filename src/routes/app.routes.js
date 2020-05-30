import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../paginas/dashboard';
import criarPost from '../paginas/criarPost';

export const AppStack = createStackNavigator();

export default function AppRoutes(){
  return(
    <AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      <AppStack.Screen name="criarPost" component={criarPost} options={{headerShown: false}} />
    </AppStack.Navigator>
  )
}
