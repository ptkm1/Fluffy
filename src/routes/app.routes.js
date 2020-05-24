import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../paginas/dashboard';

export const AppStack = createStackNavigator();

export default function AppRoutes(){
  return(
    <AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
    </AppStack.Navigator>
  )
}
