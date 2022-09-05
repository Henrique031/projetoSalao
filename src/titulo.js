import React from 'react' 
import {View, Text, } from 'react-native'
import Estilos from './estilos'

export default props => {
    return (

        <View style={Estilos.viewTitulo}>
            <Text style={Estilos.txtTitulo}>{props.nome1}</Text>
            <Text style={Estilos.txtTitulo}>{props.nome2}</Text>
        </View>
    )
}