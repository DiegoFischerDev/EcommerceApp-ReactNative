import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import cosmeticos from '../../../../assets/cosmeticos.png'

const Ofertas = () => {

  return (
    <View style={{ padding: 15 }}>
      <View style={estilos.view1}>
        <View style={{ width: '60%' }}>
          <Text style={estilos.text1}>Obtenha R$ 100 OFF</Text>
          <Text style={{ marginBottom: 5, fontSize: 10 }}>Gaste no mínimo R$ 100 para obter entrega gratuita e voucher promocional para sua próxima compra.</Text>
          <TouchableOpacity style={estilos.ofertaButton}>
            <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <Image source={cosmeticos} style={{width: '38%', height: '100%', marginLeft: 15,borderTopLeftRadius: 10}}></Image>
      </View>
    </View>
  )
}

export default Ofertas

const estilos = StyleSheet.create({

  ofertaButton: {
    backgroundColor: 'white',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  view1: {
    width: '100%',
    height: 150,
    backgroundColor: 'orange',
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
    color:'white'
  },

})