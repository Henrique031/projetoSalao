import React from 'react';
import { Button, View } from 'react-native';
import Estilo from './estilos'

export default props => {

  return (
    <View style={Estilo.viewBotao} >
      <Button title={props.nome} />
    </View>

  )
}