import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox:{
    alignItems: 'center',
  },
  formulario:{
    width: '100%',
    alignItems: 'center',
  },
  input:{
    borderWidth: 2,
    borderColor: '#5184A9',
    width: 270,
    height: 52,
    paddingLeft: 15,
  },
  btnLogin:{
    backgroundColor: '#5184A9',
    width: 270,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  voltar:{
    width: 270,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  }
})

export default styles;
