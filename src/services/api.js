import {AsyncStorage} from 'react-native';
import {create} from 'apisauce';

const api = create({
  baseURL: 'https://192.168.0.104:19006/',
});

api.addAsyncRequestTransform(request => async () =>{
  const token = await AsyncStorage.getItem('@fluffy:token');

  if(token)
  request.headers['Authorization'] = `Bearer ${token}`;
});

api.addResponseTransform(response => {
  if(!response.ok) throw response;
})

export default api;
