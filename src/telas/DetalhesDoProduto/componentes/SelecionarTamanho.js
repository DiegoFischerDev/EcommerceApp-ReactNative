import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const tamanhos = ['P', 'M', 'G', 'GG', 'XG'];

const SelecionarTamanho = () => {
  return (

    <View>

      <Text style={{marginVertical: 18, marginLeft:21, fontSize: 16}}>Selecionar Tamanho</Text>

      <View style={{flexDirection:'row'}}>

        {
          tamanhos.map((tamanho, index) => {
            return (
              <TouchableOpacity style={(index == 1) ? [estilos.tamanhos, estilos.tamanhosSelected] : estilos.tamanhos} key={index}><Text style={estilos.tamanho}>{tamanho}</Text></TouchableOpacity>
            )
          })
        }

      </View>
    </View>

  )
}

export default SelecionarTamanho

const estilos = StyleSheet.create({

  tamanhos: {
    width: 40,
    height: 40,
    marginLeft: 21,
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tamanhosSelected: {
    backgroundColor:'#FFA959',
  },

  tamanho: {
    fontWeight: 'bold',
    fontSize:'16',
  },

})
