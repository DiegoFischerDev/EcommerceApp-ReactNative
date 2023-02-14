import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, } from 'react-native'
import categoria1 from '../../../assets/cartao_compras_icon_1.png'
import categoria2 from '../../../assets/cartao_compras_icon_2.png'
import categoria3 from '../../../assets/cartao_compras_icon_3.png'
import categoria4 from '../../../assets/cartao_compras_icon_4.png'
import MiniCard from '../../componentes/MiniCard'
import Header from '../../componentes/Header'
import StatusB from '../../componentes/StatusB'
import Titulo from '../../componentes/Titulo'
import ItensRecomendados from '../../componentes/ItensRecomendados'
import { useObterProdutosDaApi } from '../../hooks/useObterProdutosDaApi'
import { obterProdutos } from '../../serviços'

const Loja = () => {

  const [Url, setUrl] = useState("/Promocoes")
  const [categoria, setCategoria] = useState("Promocoes")
  const [produtos, setProdutos] = useObterProdutosDaApi(Url);

  useEffect(() => {
    obterProdutos(Url, setProdutos)
  }, [Url])

  return (
    
    <SafeAreaView style={{ margin: 20 }}>
      <StatusB />
      
        <Header />
        <Titulo TituloText={"Comprar por Categoria"} />
        <View style={estilos.view3}>
        <MiniCard imagem={"https://res.cloudinary.com/di9oiqvom/image/upload/v1676050777/App%20OKA/logo_zexbmx.png"} legenda={"Promocoes"} setUrl={setUrl} setCategoria={setCategoria} categoria={categoria}/>
        <MiniCard imagem={"https://res.cloudinary.com/di9oiqvom/image/upload/v1676413421/App%20OKA/Shorts/Short_de_Praia_Army_Green_zrzm6z.jpg"} legenda={"Shorts"} setUrl={setUrl} setCategoria={setCategoria} categoria={categoria}/>
        <MiniCard imagem={"https://res.cloudinary.com/di9oiqvom/image/upload/v1676398166/App%20OKA/Camisas/camisas_er99tg.png"} legenda={"Camisas"} setUrl={setUrl} setCategoria={setCategoria} categoria={categoria}/>
        <MiniCard imagem={"https://res.cloudinary.com/di9oiqvom/image/upload/v1676414462/App%20OKA/Acessorios/%C3%93culos_Roma_Azul2_yvzjps.jpg"} legenda={"Acessorios"} setUrl={setUrl} setCategoria={setCategoria} categoria={categoria}/>
        </View>
        <Titulo TituloText={categoria}/>

      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={0} >
        <View style={estilos.view8}>

          {produtos?.map((produto, indice) => {
            return (
             <ItensRecomendados legenda={produto.legenda} preço={produto.preço} review={produto.review} reviewqtd={produto.reviewqtd} imagem1={produto.imagem1} imagem2={produto.imagem2} imagem3={produto.imagem3} imagem4={produto.imagem4} key={indice} />
            )
          })}

        </View>
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
  },

  view8: {
    flexWrap: "wrap",
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:250
  },

})
