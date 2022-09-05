import React from 'react';
import { Text, View } from 'react-native';
import Estilo from './estilos'

export default props => {

  return (
    <View style={Estilo.viewCadastro}>
      <Text style={{}} >
          {props.nome}
      </Text> 
    </View>
  )
}