import React, { useEffect, useState } from 'react'
import { SafeAreaView, Alert, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity,} from 'react-native'
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalVerPedido from './componentes/ModalVerPedido'

const Home = () => {

  const [nome, setNome] = useState("Usuário Anônimo");

  const obterDadosLogIn = async () => {
      const jsonValue = await AsyncStorage.getItem("usuario");
      const dados = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (dados) {setNome(dados.nome)}

      console.log("Pediu DadosLogin para Memoria Local")
      return dados;
  }

  useEffect(() => {
      obterDadosLogIn();
  }, [])

  const [anuncios, setAnuncios] = useObterAnunciosDaApi();
  const [pedidos, setPedidos] = useObterPedidosDaApi()
  const [visivel, setVisivel] = useState(false)
  const [IdDoPedidoQueOMOdalExibe, SetIdDoPedidoQueOMOdalExibe] = useState(0)

  console.log("Carregou Home")

  return (

    <SafeAreaView style={{padding:21}} >

      <StatusB/>
      <ScrollView showsVerticalScrollIndicator={false}>

        <HeaderBemVindo UsuarioName={nome}/>

        <Text style={{fontWeight:'700', marginTop: 15, marginLeft: 15}}>Meus Pedidos</Text>

          {pedidos?.map((pedido, indice) => {
            return (
              <MeusPedidosCard id={pedido.id} setVisivel={setVisivel} SetIdDoPedidoQueOMOdalExibe={SetIdDoPedidoQueOMOdalExibe} valorTotal={pedido.valorTotalDoPedido} status={pedido.status} dataDaEntrega={pedido.previsãoDeEntrega} key={indice} />
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
      </ScrollView>

      <ModalVerPedido visivel={visivel} setVisivel={setVisivel} pedidos={pedidos} IdDoPedidoQueOMOdalExibe={IdDoPedidoQueOMOdalExibe} />

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
