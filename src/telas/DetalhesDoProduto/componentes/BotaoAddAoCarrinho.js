import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native'
import { GlobalContext } from '../../../context/GlobalContext';

const BotaoAddAoCarrinho = ({produto, tamanho}) => {

  const { adicionarItem } = useContext(GlobalContext);

  function AddItemButton(produto) {
    tamanho ? adicionarItem(produto) : console.log("Selecione um Tamanho")
  }

  return (

    <View>

        <TouchableOpacity onPress={() => {AddItemButton(produto)}} style={estilos.OrangeButton}>
          <Text style={{color: 'white'}}>Adicionar ao carrinho</Text>
        </TouchableOpacity>

    </View>

  )
}

export default BotaoAddAoCarrinho

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
