import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const ItensRecomendados = ({imagem1, legenda1, preço1, imagem2, legenda2, preço2,}) => {

  return (
    <View style={estilos.view7}>
      <View style={estilos.view4}>
        <Image source={imagem1} style={estilos.itemImage}></Image>
        <Text style={{ marginTop: 14, marginLeft: 16, fontSize: 12 }}>
          {legenda1}
        </Text>
        <View style={estilos.view5}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
          {preço1}
          </Text>
          <TouchableOpacity style={estilos.view6}>
            <MaterialCommunityIcon name="car" size={15} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      <View id={'itemCard'} style={estilos.view4}>
        <Image source={imagem2} style={estilos.itemImage}></Image>
        <Text style={{ marginTop: 14, marginLeft: 16, fontSize: 12 }}>
        {legenda2}
        </Text>
        <View style={estilos.view5}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
            {preço2}
          </Text>
          <TouchableOpacity style={estilos.view6}>
            <MaterialCommunityIcon name="car" size={15} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ItensRecomendados

const estilos = StyleSheet.create({

  view4: {
    borderRadius: 10,
    marginBottom: 19,
    width: '48%',
    borderColor: 'black',
    borderWidth: 1,
    paddingBottom: 20

    // shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
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
  }

})