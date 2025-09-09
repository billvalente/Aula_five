import{StyleSheet} from 'react-native';

const mascara = StyleSheet.create({
  fundo:{
    flex:1,
    backgroundColor:'#000',
    textAlign:'center',
   
    
  },
  titulo:{
    color:'#fff',
    textAlign:'center',
    fontSize:60,
    fontWeight:'bold',
    fontStyle:'italic',
    
  },
  caixa:{
    width:200,
    height:200,
    borderWidth:2,
    borderColor:'#00c',
    borderRadius:20,
    alignSelf:'center',
    color:'#fff',
    justifyContent:'center',
    
  },
    caixa2:{
      color:'#0cc',
    width:250,
    height:200,
    borderWidth:2,
    borderColor:'#cc0',
    marginLeft:20,
    backgroundColor:'#cc0'
},
  titulo2:{
    color:'#0c0',
    textAlign:'right',
    fontSize:60,
    fontWeight:'bold',
    fontStyle:'italic',
    
  }

}

);

export default mascara;