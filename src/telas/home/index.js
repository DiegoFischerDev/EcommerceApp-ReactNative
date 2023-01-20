import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image,} from 'react-native'
import oferta1 from '../../../assets/oferta_1.png'
import oferta2 from '../../../assets/oferta_2.png'
import Titulo from '../../componentes/Titulo'
import StatusB from '../../componentes/StatusB'
import HorizontalCard from './componentes/HorizontalCard'
import HeaderBemVindo from './componentes/HeaderBemVindo'
import Ofertas from './componentes/Oferta'
import { anuncios } from "../../mocks/anuncios";

const Home = () => {
  return (

    <SafeAreaView style={{padding:21}}>
      <StatusB/>

      <HeaderBemVindo UsuarioName={"Diego Fischer de Araujo"}/>

      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {anuncios?.map((anuncios, indice) => {
            return (
                    <HorizontalCard titulo={anuncios.titulo} descricao={anuncios.descricao} key={indice} />
                    )
          })}
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
