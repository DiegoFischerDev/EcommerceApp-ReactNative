import React from "react";
import {StyleSheet, View, TextInput,} from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {

  return (

  <View style={estilos.view1}>
    <View style={estilos.inputBox}>
      <TextInput
        style={{ width: '90%', height: '100%' }}
        placeholder="Faça sua busca aqui"
      />
      <MaterialCommunityIcon name="google" size={25} color="#D9D9D9" />
    </View>
    <MaterialCommunityIcon name="car" size={25} color="#000000" onPress={() => Linking.openURL('http://###')} />
  </View>

  )
}

export default Header

const estilos = StyleSheet.create({

  view1: {
    width: '100%',
    height: 50,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  inputBox: {
    height: 50,
    width: '88%',
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23
  },

})