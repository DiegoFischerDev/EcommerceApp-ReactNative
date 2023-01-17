import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import usuarioIcone from '../../../assets/usuario_icone.png'

const HeaderBemVindo = ({UsuarioName}) => {

  return (

  <View style={estilos.view2}>
    <View>
      <Text style={{ fontSize: 10 }}>Bem-Vindo!</Text>
      <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{UsuarioName}</Text>
    </View>

    <Image source={usuarioIcone} style={estilos.usuarioIcone}></Image>
  </View>

  )
}

export default HeaderBemVindo

const estilos = StyleSheet.create({

  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20,
  },

  usuarioIcone: {
    width: 40,
    height: 40
  },

})