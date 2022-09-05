import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Estilo from './estilos'

export default props => {

  return (
    <View style={Estilo.viewLogin}>
      <Text style={Estilo.txt} >
          {props.nome} 
      </Text>
      <TextInput style={Estilo.txtInput} /> 
    </View>
  )
}