import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, Linking, } from "react-native";
import usuarioIcone from "../../../assets/usuario_icone.png"
import imageCelular1 from "../../../assets/celular_1.png"
import oferta1 from "../../../assets/oferta_1.png"
import oferta2 from "../../../assets/oferta_2.png"
import cosmeticos from "../../../assets/cosmeticos.png"
import HorizontalCard from "../../../src/telas/home/componentes/HorizontalCard"



const Home = () => {

  return (
    <View style={{backgroundColor:'#E5E5E5', height: '100%'}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#0066CC"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 80,    paddingHorizontal: 20}}>

        <View>
          <Text style={{fontSize: 10}}>Bem-Vindo!</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Alexandre de Souza Jr.</Text>
        </View>

        <Image source={usuarioIcone} style={estilos.usuarioIcone}></Image>

      </View>

      <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>

      <HorizontalCard
      titulo={"Troque e Economize"}
      descricao={"Desfrute de uma ótima economia Desfrute de uma ótima economia"} />
      <HorizontalCard
      titulo={"Troque e Economize"}
      descricao={"Desfrute de uma ótima economia Desfrute de uma ótima economia"} />
      <HorizontalCard
      titulo={"Troque e Economize"}
      descricao={"Desfrute de uma ótima economia Desfrute de uma ótima economia"} />

      </ScrollView>
      </View>

      <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: 20}}>
        <Text style={{fontSize:16, fontWeight:'bold'}}>Ofertas Incríveis</Text>
        <Text style={{fontSize:14, color:'#FF7A00'}} onPress={() => Linking.openURL('http://###')}>Ver tudo</Text>
      </View>

      <View style={{marginTop:34, flexDirection:'row'}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <Image source={oferta1} style={{width:180, height: 200, marginLeft: 15, borderTopLeftRadius: 10}}></Image>
      <Image source={oferta2} style={{width:180, height: 200, marginLeft: 15, borderTopLeftRadius: 10}}></Image>
      <Image source={oferta1} style={{width:180, height: 200, marginLeft: 15, borderTopLeftRadius: 10}}></Image>
      <Image source={oferta2} style={{width:180, height: 200, marginLeft: 15, borderTopLeftRadius: 10}}></Image>
      </ScrollView>
      </View>

      <View style={{padding:15}}>
        <View style={{width: '100%', height:150, backgroundColor:'orange', borderRadius:10, flexDirection:'row', padding:15, justifyContent:'space-between'}}>
          <View style={{width:200}}>
            <Text style={{fontSize:18, fontWeight: 'bold', marginBottom: 10, marginTop:20, color:'white'}}>Obtenha R$ 100 OFF</Text>
            <Text style={{marginBottom: 5, fontSize:10}}>Gaste no mínimo R$ 100 para obter entrega gratuita e voucher promocional para sua próxima compra.</Text>
            <TouchableOpacity style= {estilos.ofertaButton}>
              <Text style={{color:'black', fontSize: 12, fontWeight:'bold'}}>Comprar</Text>
            </TouchableOpacity>
          </View>
          <Image source={cosmeticos} style={{width:130, height: 110, marginLeft: 15, borderTopLeftRadius: 10}}></Image>
        </View>
      </View>

    </View>
  )
}

export default Home;

const estilos = StyleSheet.create({

  usuarioIcone: {
    width: 40,
    height: 40
  },

  cartao: {
    marginVertical: 40,
    marginHorizontal: 15,
    backgroundColor: 'white',
    width: 350,
    height: 180,
    padding: 17,
    borderRadius: 10,
    flexDirection: 'row',
  },

  cartaoButton: {
    backgroundColor: '#FFA959',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  ofertaButton: {
    backgroundColor: 'white',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }

})