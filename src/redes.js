import React from 'react';
import { Text, View } from 'react-native';
import Estilo from './estilos'

export default props => {
  return (
    <View style={Estilo.viewRedes} >
      <Text > {props.rede1} </Text> 
      <Text > {props.rede2} </Text> 
      <Text > {props.rede3} </Text> 
      <Text > {props.rede4} </Text> 
    </View>
  )
  
}