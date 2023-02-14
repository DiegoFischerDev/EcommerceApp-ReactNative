import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const MiniCard = ({imagem, legenda, setUrl, setCategoria, categoria}) => {

  return (
    <TouchableOpacity style={(legenda == categoria) ? [estilos.card, estilos.cardSelected] : estilos.card} onPress={()=>{setUrl("/"+legenda); setCategoria(legenda)}}>
      <Image source={{uri: imagem}} style={estilos.cardImage}></Image>
      <Text>{legenda}</Text>
    </TouchableOpacity>
  )
}

export default MiniCard

const estilos = StyleSheet.create({

  card: {
    width: 80,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,

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

  cardSelected: {
    borderColor: 'orange',
    borderWidth: 2,
  },
  
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

})