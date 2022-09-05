import React from 'react'
import { SafeAreaView } from 'react-native'

import Titulo from './src/titulo'
import Login from './src/login'
import Botao from './src/botao'
import Cadastro from './src/cadastro'
import Redes from './src/redes'

export default function Principal () {
  return(
    <SafeAreaView style={{marginTop: 100, flex: 1}}>

      <Titulo nome1="Estúdio Lú" nome2="Fashin Hair"  />

      <Login nome="Telefone: " />

      <Botao nome="Entrar" />

      <Cadastro nome="Não possui uma conta? clique aqui " />

      <Redes 
      rede1="Instagram" 
      rede2="WhatsZap"
      rede3="TikTok"
      rede4="Facebook"
      />
    </SafeAreaView>
  )
}