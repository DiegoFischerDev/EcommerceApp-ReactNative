import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import imageCelular1 from "../../../../assets/celular_1.png"



const HorizontalCard = ({titulo, descricao}) => {

  return (
    <View>

      <View style={estilos.cartao}>
        <View style={{width:175, height: 140, paddingRight: 10}}>
          <Text style={{fontSize:14, fontWeight: 'bold', marginBottom: 10, marginTop:20}}>{titulo}</Text>
          <Text style={{marginBottom: 20, fontSize:10}}>{descricao}</Text>
          <TouchableOpacity style= {estilos.cartaoButton}>
            <Text style={{color:'white', fontSize: 12, fontWeight:'bold'}}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
        <Image source={imageCelular1} style={{width:140, height: 140}}></Image>
      </View>

    </View>
  )
}

export default HorizontalCard;

const estilos = StyleSheet.create({

  cartao: {
    marginBottom: 10,
    marginTop:30,
    marginLeft: 15,
    backgroundColor: 'white',
    width: 350,
    height: 180,
    padding: 17,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: '#FFA959',
    borderWidth: 1,
  },

  cartaoButton: {
    backgroundColor: '#FFA959',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

})