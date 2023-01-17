import React from "react";
import {StyleSheet, View, Text} from "react-native";

const Titulo = ({TituloText}) => {

  return (

    <View style={estilos.view2}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{TituloText}</Text>
      <Text style={{ fontSize: 14, color: '#FF7A00' }} onPress={() => Linking.openURL('http://###')}>Ver tudo</Text>
    </View>

  )
}

export default Titulo

const estilos = StyleSheet.create({

  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20
  },

})