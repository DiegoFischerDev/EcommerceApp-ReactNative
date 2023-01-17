import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const MiniCard = ({imagem, legenda}) => {

  return (
    <TouchableOpacity style={estilos.card}>
      <Image source={imagem} style={estilos.cardImage}></Image>
      <Text>{legenda}</Text>
    </TouchableOpacity>
  )
}

export default MiniCard

const estilos = StyleSheet.create({

  card: {
    width: 80,
    height: 90,
    borderRadius: 10,
    borderColor: '#FFA959',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  cardImage: {
    width: 45,
    height: 45,
    borderRadius: '100%',
    marginBottom: 10
  },

})