import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import StatusB from '../../componentes/StatusB'
import BotaoLaranja from './componentes/BotaoLaranja'
import BotaoQuantidade from './componentes/BotaoQuantidade'
import Carousel from './componentes/Carousel'
import ProductDescription from './componentes/ProductDescription'
import SelecionarTamanho from './componentes/SelecionarTamanho'


const DetalhesDoProduto = () => {

  return (

    <SafeAreaView >
      <StatusB />
      <Carousel />
      <ProductDescription legenda={'Camisa de Algodão Regular Fit (Masculina)'} preço={'100,00'} review={'4.9'} reviewqtd={'83'} />

      <SelecionarTamanho />

      <View style={estilos.view1}>
        <BotaoQuantidade />
        <BotaoLaranja />
      </View>

    </SafeAreaView>
      
  )
}

export default DetalhesDoProduto

const estilos = StyleSheet.create({

  view1: {
    flexDirection:'row',
    marginTop: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 21
  },
  
})
