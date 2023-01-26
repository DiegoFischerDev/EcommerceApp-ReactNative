import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'



const SelecionarTamanho = ({ButtonLabel, TamanhoSelecionado, setTamanhoSelecionado}) => {
  return (

        <TouchableOpacity style={(TamanhoSelecionado === ButtonLabel) ? [estilos.square, {backgroundColor:'#FFA959'}] : estilos.square} onPress={() => { setTamanhoSelecionado(ButtonLabel) }}>

          <Text style={estilos.text}>{ButtonLabel}</Text>

        </TouchableOpacity>

  )
}

export default SelecionarTamanho

const estilos = StyleSheet.create({

  square: {
    width: 40,
    height: 40,
    marginLeft: 21,
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize:'16',
  },

})
