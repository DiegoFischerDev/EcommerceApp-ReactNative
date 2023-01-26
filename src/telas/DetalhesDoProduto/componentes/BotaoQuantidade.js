import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'



const BotaoQuantidade = () => {

  const [numItens, setNumItens] = useState(1);

  return (

    <View style={estilos.qtdview}>
      <TouchableOpacity 
        onPress={() => {
          if (numItens > 1) {
            setNumItens(numItens - 1)
          }
        }}
        style={estilos.qtdbutton}><Text style={{fontSize: 20}}>-</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 16, marginHorizontal: 13}}>{numItens}</Text>

      <TouchableOpacity
        onPress={() => {
          setNumItens(numItens + 1)
        }}
        style={estilos.qtdbutton}>
        <Text style={{fontSize: 20}}>+</Text>
      </TouchableOpacity>
    </View>

  )
}

export default BotaoQuantidade

const estilos = StyleSheet.create({

  qtdview: {
    flexDirection:'row',
    backgroundColor: '#D9D9D9',
    padding: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-start",
    maxWidth: 160,
  },

  qtdbutton: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

})
