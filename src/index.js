import React, { useState, useEffect } from 'react';
import {AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './paginas/login';
import Dashboard from './paginas/dashboard';
import {AuthProvider} from './contexts/auth';
import Routes from './routes';




export default function App(){
  return(
  <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>

  </NavigationContainer>
  );

}
