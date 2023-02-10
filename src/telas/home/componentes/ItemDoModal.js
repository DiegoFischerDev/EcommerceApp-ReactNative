import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image,} from 'react-native';
import modelo1 from '../../../../assets/modelo_1.png'

const ItemDoModal = ({item}) => {


  return (
    <View style={estilos.card}>

      <Image style={estilos.image} source={modelo1}></Image>

      <View style={estilos.inerCard1}>
        <Text style={{fontSize: 10}}>{item.legenda}</Text>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <Text style={{color:'#A6A6A6', fontSize:10}}>Tamanho: </Text>
          <Text>{item.tamanho}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <Text style={{color:'#A6A6A6', fontSize:10}}>Quantidade: </Text>
          <Text>{item.quantidade}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <Text style={{color:'#A6A6A6', fontSize:10}}>Preço unitário: </Text>
          <Text style={{fontWeight: 'bold', fontSize:12}}>R$ {item.preço}</Text>
        </View>
      </View>

    </View>
  )
}

export default ItemDoModal

const estilos = StyleSheet.create({

  card: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,

    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    margin: 10
  },

  inerCard1: {
    justifyContent: 'space-between',
    height: 80,
  },

  inerCard2: {
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'flex-end',
  },

})
