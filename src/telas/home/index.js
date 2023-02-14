import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image,} from 'react-native'
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
import { obterPedidos } from '../../serviços'
import { GlobalContext } from "../../context/GlobalContext";

const Home = () => {

  const { novaCompra } = useContext(GlobalContext);

  useEffect(() => {
    obterPedidos('/pedidos', setPedidos)
  }, [novaCompra])

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

  let displayTitulo
  if(pedidos.length==0){displayTitulo=""}else[displayTitulo="Meus Pedidos"]

  return (

    <SafeAreaView style={{padding:21, backgroundColor:'white'}} >

      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusB/>

        <HeaderBemVindo UsuarioName={nome}/>

        <Text style={{fontWeight:'700', marginTop: 15, marginLeft: 15}}>{displayTitulo}</Text>

          {pedidos?.map((pedido, indice) => {
            return (
              <MeusPedidosCard id={pedido.id} setVisivel={setVisivel} SetIdDoPedidoQueOMOdalExibe={SetIdDoPedidoQueOMOdalExibe} valorTotal={pedido.valorTotalDoPedido} status={pedido.status} dataDaEntrega={pedido.previsãoDeEntrega} key={indice} />
          )})}


          <View style={{paddingHorizontal:20}}>
            <Titulo TituloText={'Ofertas!'}/>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>

            {anuncios?.map((anuncio, indice) => {
              return (
                <HorizontalCard uri={anuncio.uri} key={indice} />
            )})}

          </ScrollView>

        <View style={{paddingHorizontal:20}}>
        <Titulo TituloText={'Recomendados para '+nome}/>
        </View>

        <View style={{flexDirection: 'row' }}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <Image source={{uri: "https://res.cloudinary.com/di9oiqvom/image/upload/v1676049544/App%20OKA/Shorts/Praia_Paiva_kdrqbd.jpg"}} style={estilos.ofertaImage}></Image>
            <Image source={{uri: "https://res.cloudinary.com/di9oiqvom/image/upload/v1676048488/App%20OKA/Shorts/Dijon_qwejth.jpg"}} style={estilos.ofertaImage}></Image>
            <Image source={{uri: "https://res.cloudinary.com/di9oiqvom/image/upload/v1676049544/App%20OKA/Shorts/Praia_Leblon_k6tfwb.jpg"}} style={estilos.ofertaImage}></Image>
            <Image source={{uri: "https://res.cloudinary.com/di9oiqvom/image/upload/v1676049544/App%20OKA/Shorts/Ibiza_Ciano_xdlvgm.jpg"}} style={estilos.ofertaImage}></Image>
          </ScrollView>
        </View>

        <Ofertas />
      </ScrollView>

      <ModalVerPedido visivel={visivel} setVisivel={setVisivel} pedidos={pedidos} setPedidos={setPedidos} IdDoPedidoQueOMOdalExibe={IdDoPedidoQueOMOdalExibe} />

    </SafeAreaView>
  )
}

export default Home

const estilos = StyleSheet.create({

  ofertaImage: {
    width: 180,
    height: 200,
    marginLeft: 15,
    borderRadius: 15,
  },
  
})
