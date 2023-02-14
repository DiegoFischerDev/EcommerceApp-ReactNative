import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

const Titulo = ({TituloText}) => {

  return (

    <View style={estilos.view2}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{TituloText}</Text>
    </View>

  )
}

export default Titulo

const estilos = StyleSheet.create({

  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 0
  },

})