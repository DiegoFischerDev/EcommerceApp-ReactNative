import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import cosmeticos from '../../../../assets/cosmeticos.png'

const Ofertas = () => {

  return (
    <View style={{ padding: 15 }}>
      <View style={estilos.view1}>
        <View style={{ width: '60%' }}>
          <Text style={estilos.text1}>Obtenha R$100 OFF!</Text>
          <Text style={{ marginBottom: 5, fontSize: 10 }}>Gaste no mínimo R$ 100 para obter entrega gratuita e voucher promocional para sua próxima compra.</Text>
          <TouchableOpacity style={estilos.ofertaButton}>
            <Text style={{ color: '#d7986c', fontSize: 15, fontWeight: 'bold' }}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2854/2854446.png'}} style={{width: 120, height: 120,borderRadius: 15}}></Image>
      </View>
    </View>
  )
}

export default Ofertas

const estilos = StyleSheet.create({

  ofertaButton: {
    backgroundColor: '#fae25c',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 40,
    marginTop: 10,
  },

  view1: {
    width: '100%',
    height: 150,
    backgroundColor: '#d2f7ff',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between'
  },

  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 7,
    marginTop: 10,
  },

})