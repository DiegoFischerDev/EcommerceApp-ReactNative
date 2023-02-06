import React, { useContext } from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
import StatusB from '../../componentes/StatusB'
import Header from './componentes/Header'
import CarCard from './componentes/CarCard'
import ResumoCompra from './componentes/ResumoCompra'
import { GlobalContext } from '../../context/GlobalContext'


const CarrinhoDeCompras = () => {
  const { itens } = useContext(GlobalContext);

  return (
    
    <SafeAreaView style={{ backgroundColor: '#FBF9F9'}} >
      <View style={{margin: 21}}>
        <StatusB />

        <FlatList
          style={{marginVertical: 0}}
          showsVerticalScrollIndicator={false}
          data={itens}
          renderItem={({item}) => <CarCard legenda={item.legenda} preço={item.preço} tamanho={item.tamanho} quantidade={item.quantidade} id={item.id} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => { return <Header /> }}
          ListFooterComponent={() => { return <ResumoCompra /> }}
        />
      </View>

    </SafeAreaView>
  )
}

export default CarrinhoDeCompras
