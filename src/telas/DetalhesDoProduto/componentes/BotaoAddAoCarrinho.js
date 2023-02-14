import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { GlobalContext } from '../../../context/GlobalContext';

const BotaoAddAoCarrinho = ({produto, tamanho, setVisivel, setModalErroVisivel}) => {

  const { adicionarItemAoCarrinho } = useContext(GlobalContext);

  function AddItemButton(produto) {
    tamanho ? AddProdutoAbreModal(produto) : setModalErroVisivel(true)
  }

  function AddProdutoAbreModal(produto) {
    adicionarItemAoCarrinho(produto);
    setVisivel(true)
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
