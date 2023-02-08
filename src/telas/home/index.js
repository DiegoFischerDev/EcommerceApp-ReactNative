import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity,} from 'react-native'
import oferta1 from '../../../assets/oferta_1.png'
import oferta2 from '../../../assets/oferta_2.png'
import Titulo from '../../componentes/Titulo'
import StatusB from '../../componentes/StatusB'
import HorizontalCard from './componentes/HorizontalCard'
import HeaderBemVindo from './componentes/HeaderBemVindo'
import Ofertas from './componentes/Oferta'
import { useObterAnunciosDaApi } from '../../hooks/useObterAnunciosDaApi'
import { useObterPedidosDaApi } from '../../hooks/useObterPedidosDaApi'
import MeusPedidosCard from './componentes/MeusPedidosCard'

const Home = () => {

  const [anuncios, setAnuncios] = useObterAnunciosDaApi();
  const [pedidos, setPedidos] = useObterPedidosDaApi()

  return (

    <SafeAreaView style={{padding:21}} >

      <StatusB/>

      <HeaderBemVindo UsuarioName={"Diego Fischer de Araujo"}/>

      <Text style={pedidos ? {fontWeight:'700', marginTop: 15, marginLeft: 15} : {display:"none"}}>Meus Pedidos</Text>

        {pedidos?.map((pedido, indice) => {
          return (
            <MeusPedidosCard id={pedido.id} valorTotal={pedido.valorTotalDoPedido} status={pedido.status} dataDaEntrega={pedido.previsãoDeEntrega} key={indice} />
        )})}

      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>

          {anuncios?.map((anuncio, indice) => {
            return (
              <HorizontalCard titulo={anuncio.titulo} descricao={anuncio.descricao} key={indice} />
          )})}

        </ScrollView>
      </View>

      <View style={{paddingHorizontal:21}}>
      <Titulo TituloText={'Ofertas Incríveis'}/>
      </View>

      <View style={{flexDirection: 'row' }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Image source={oferta1} style={estilos.ofertaImage}></Image>
          <Image source={oferta2} style={estilos.ofertaImage}></Image>
          <Image source={oferta1} style={estilos.ofertaImage}></Image>
          <Image source={oferta2} style={estilos.ofertaImage}></Image>
        </ScrollView>
      </View>

      <Ofertas />

    </SafeAreaView>
  )
}

export default Home

const estilos = StyleSheet.create({

  ofertaImage: {
    width: 180,
    height: 200,
    marginLeft: 15,
    borderTopLeftRadius: 10
  },
  
})
