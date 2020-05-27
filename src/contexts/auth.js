import React, {createContext,useState,useEffect} from 'react';
import { AsyncStorage } from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {AppStack} from '../routes/app.routes';
import api from '../services/api';

const AuthContext = createContext({signed:false, user: {}})

export const AuthProvider = ({ children }) =>{

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [forgot,setForgot] = useState(false);



  useEffect(()=>{
    async function LSD(){
        const token = await AsyncStorage.getItem('@fluffy:token');
        const user = JSON.parse(await AsyncStorage.getItem('@fluffy:user'))

        if(user && token){
          setUser(user);
          setLoading(false);
        }else if(!user && !token){
          setLoading(false);
        }
    }

    LSD();
  },[])
//Requisição http
  async function Logar(){
    try{
      const response = await api.post('/auth/authenticate',{
        email: email,
        password: password,
      });

      const { user, token } = response.data;

      await AsyncStorage.multiSet([
        ['@fluffy:token', token],
        ['@fluffy:user', JSON.stringify(user)],
      ])

      setUser(user)

    }catch(err){
      alert(err.data.error)
      console.log(err)
    }
  };

  function Deslogar() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }


    async function Cadastrar(){
      try{
      const response = await api.post('/auth/cadastro',{
        name: name,
        email: email,
        password: password,
      });

      const { user, token } = response.data;

      await AsyncStorage.multiSet([
        ['@fluffy:token', token],
        ['@fluffy:user', JSON.stringify(user)],
      ])
      setUser(user)

      }catch(err){
        alert(err.data.error)
        console.log(err)
      }
    }





async function EsqueciSenha(){
      try{
        const response = await api.post('/auth/forgot_password',{
          email: email,
        })
        alert('Um email foi enviado, verifique-o.');
      }catch(response){
        alert('Não foi possivel resetar, verifique se o e-mail está cadastrado e/ou digitado corretamente');
      }

}

async function ResetarSenha(){
  try{
    const response = await api.post('auth/reset_password',{
      email: email,
      token: token,
      password: password,
    })
  }catch(response){
    alert('Não foi possivel resetar sua senha, tente novamente')
  }
}


  return(
    <AuthContext.Provider value={{signed: !! user,
         user, Logar, Cadastrar, Deslogar, EsqueciSenha,ResetarSenha,forgot,loading,
         setName,setEmail,setPassword,setToken}}
         >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
