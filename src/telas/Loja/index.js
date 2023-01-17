import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, } from 'react-native'
import categoria1 from '../../../assets/cartao_compras_icon_1.png'
import categoria2 from '../../../assets/cartao_compras_icon_2.png'
import categoria3 from '../../../assets/cartao_compras_icon_3.png'
import categoria4 from '../../../assets/cartao_compras_icon_4.png'
import modelo1 from '../../../assets/modelo_1.png'
import MiniCard from '../../componentes/MiniCard'
import Header from '../../componentes/Header'
import StatusB from '../../componentes/StatusB'
import Titulo from '../../componentes/Titulo'
import ItensRecomendados from '../../componentes/ItensRecomendados'

const Loja = () => {
  return (
    
    <SafeAreaView style={{ margin: 20 }}>
      <StatusB />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Titulo TituloText={"Comprar por Categoria"} />
        <View style={estilos.view3}>
        <MiniCard imagem={categoria1} legenda={"Popular"} />
        <MiniCard imagem={categoria2} legenda={"Homen"} />
        <MiniCard imagem={categoria3} legenda={"Mulher"} />
        <MiniCard imagem={categoria4} legenda={"Crianças"} />
        </View>
        <Titulo TituloText={"Itens Recomendados"} />

        <ItensRecomendados imagem1={modelo1} legenda1={"Camisa Regular Fit"} preço1={"R$100"} imagem2={modelo1} legenda2={"Camisa Regular"} preço2={"R$200"} />

        <ItensRecomendados imagem1={modelo1} legenda1={"Camisa Regular Fit"} preço1={"R$100"} imagem2={modelo1} legenda2={"Camisa Regular"} preço2={"R$200"} />

        <ItensRecomendados imagem1={modelo1} legenda1={"Camisa Regular Fit"} preço1={"R$100"} imagem2={modelo1} legenda2={"Camisa Regular"} preço2={"R$200"} />

      </ScrollView>
    </SafeAreaView>
  )
}

export default Loja

const estilos = StyleSheet.create({

  view3: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  view4: {
    borderRadius: 10,
    marginBottom: 19,
    width: '48%',
    borderColor: 'black',
    borderWidth: 1,
    paddingBottom: 20

    // shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },

  view5: {
    flexDirection: 'row',
    marginTop: 13,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  view6: {
    height: 25,
    width: 25,
    borderRadius: '100%',
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemImage: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  view7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
