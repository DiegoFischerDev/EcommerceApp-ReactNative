import React from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
import StatusB from '../../componentes/StatusB'
import Header from './componentes/Header'
import CarCard from './componentes/CarCard'
import ResumoCompra from './componentes/ResumoCompra'

const itens = [
  {
    id: 1,
    nome: "Camisa de Algodão Regular Fit",
    preco: "100",
    tamanho: "P"
  },
  {
    id: 2,
    nome: "Camisa de Algodão Regular Fit",
    preco: "100",
    tamanho: "M"
  },
  {
    id: 3,
    nome: "Camisa de Algodão Regular Fit",
    preco: "100",
    tamanho: "G"
  },
  {
    id: 4,
    nome: "Camisa de Algodão Regular Fit",
    preco: "100",
    tamanho: "G"
  },
]


const CarrinhoDeCompras = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#FBF9F9'}} >
      <View style={{margin: 21}}>
        <StatusB />

        <FlatList
          style={{marginVertical: 0}}
          showsVerticalScrollIndicator={false}
          data={itens}
          renderItem={({item}) => <CarCard nome={item.nome} preco={item.preco} tamanho={item.tamanho} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => { return <Header /> }}
          ListFooterComponent={() => { return <ResumoCompra /> }}
        />
      </View>

    </SafeAreaView>
  )
}

export default CarrinhoDeCompras
