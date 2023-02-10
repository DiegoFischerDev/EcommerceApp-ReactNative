import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import imageCelular1 from "../../../../assets/celular_1.png"



const HorizontalCard = ({uri}) => {

  return (
    <View>

      <TouchableOpacity style={estilos.cartao}>
        <Image source={{uri: uri}} style={estilos.image}></Image>
      </TouchableOpacity>

    </View>
  )
}

export default HorizontalCard;

const estilos = StyleSheet.create({

  cartao: {
    marginBottom: 10,
    marginTop:30,
    marginLeft: 15,
    width: 350,
    height: 180,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems:'flex-end',

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

  cartaoButton: {
    backgroundColor: '#FFA959',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },

  image: {
    width:'100%',
    height: '100%',
    position:'absolute',
    zIndex: -1,
    borderRadius: 10
  },

})