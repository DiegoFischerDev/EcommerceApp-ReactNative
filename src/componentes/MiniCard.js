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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  
  cardImage: {
    width: 45,
    height: 45,
    borderRadius: '100%',
    marginBottom: 10
  },

})