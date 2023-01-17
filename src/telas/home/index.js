import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image,} from 'react-native'
import oferta1 from '../../../assets/oferta_1.png'
import oferta2 from '../../../assets/oferta_2.png'
import HorizontalCard from './HorizontalCard'
import Titulo from '../../componentes/Titulo'
import StatusB from '../../componentes/StatusB'
import HeaderBemVindo from './HeaderBemVindo'
import Ofertas from './Oferta'

const Home = () => {
  return (

    <SafeAreaView style={{padding:21}}>
      <StatusB/>

      <HeaderBemVindo UsuarioName={"Diego Fischer de Araujo"}/>

      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <HorizontalCard titulo={'Troque e Economize'} descricao={'Desfrute de uma ótima economia Desfrute de uma ótima economia'}/>
          <HorizontalCard titulo={'Troque e Economize'} descricao={'Desfrute de uma ótima economia Desfrute de uma ótima economia'}/>
          <HorizontalCard titulo={'Troque e Economize'} descricao={'Desfrute de uma ótima economia Desfrute de uma ótima economia'}/>  
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
