import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const BotaoLaranja = () => {
  return (

    <View>

        <TouchableOpacity onPress={() => {}} style={estilos.OrangeButton}>
          <Text style={{color: 'white'}}>Adicionar ao carrinho</Text>
        </TouchableOpacity>

    </View>

  )
}

export default BotaoLaranja

const estilos = StyleSheet.create({

  OrangeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#FF7A00',
  }

})
