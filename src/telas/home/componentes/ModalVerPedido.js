import React from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ItemDoModal from './ItemDoModal'
import axios from "axios";
import { baseURL } from "../../../serviços";
import { obterPedidos } from '../../../serviços'


const ModalVerPedido = ({visivel, setVisivel, IdDoPedidoQueOMOdalExibe, pedidos, setPedidos}) => {

  console.log(pedidos)

  const filtroPedidos = pedidos.filter(function(pedido){
    if (pedido.id == IdDoPedidoQueOMOdalExibe) { 
      return true}else{
        return false
      }
  })

  async function ExcluirPedido(IdDoPedidoQueOMOdalExibe) {
    await axios.delete(baseURL+'/pedidos/'+IdDoPedidoQueOMOdalExibe);
  }


  return (
    <View style={estilos.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visivel}
        onRequestClose={() => {
          setVisivel(false)
        }}
      >
        <View style={estilos.container}>
          <View style={estilos.modal}>
            <TouchableOpacity onPress={() => {setVisivel(false)}} style={{width:300, paddingTop: 50, paddingBottom:20}}><Text style={{alignSelf:'flex-end', fontSize:20}}>X</Text></TouchableOpacity>
            <Text style={estilos.texto}>Pedido Numero: {filtroPedidos[0]?.id}</Text>
            <Text style={estilos.texto}>Valor Total: R${filtroPedidos[0]?.valorTotalDoPedido}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={estilos.texto}>Status: </Text>
              <Text style={[estilos.texto, {color:'orange'}]}>{filtroPedidos[0]?.status}</Text>
            </View>
            <Text style={estilos.texto}>Previsão de Entrega: {filtroPedidos[0]?.previsãoDeEntrega}</Text>

            <ScrollView showsVerticalScrollIndicator={false} >
              {filtroPedidos[0]?.itens.map((item, indice) => {
              return (
                <ItemDoModal item={item} key={indice} />
              )})}
            </ScrollView>

            <View style={{flexDirection:'row'}}>

              <TouchableOpacity
                style={estilos.botao}
                onPress={() => {}}
              >
                <Text style={estilos.textoBotao}>Gerar Nota Fiscal</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={estilos.botao}
                onPress={() => {
                  ExcluirPedido(IdDoPedidoQueOMOdalExibe);
                  setVisivel(false);
                  obterPedidos('/pedidos', setPedidos); // para atualizar a pagina

                }}
              >
                <Text style={estilos.textoBotao}>Cancelar Pedido</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize:12}}>Se arrependeu da compra? Cancele seu pedido em até 24hr sem nenhuma burocracia. Em caso de dúvidas, entre em contato com nosso SAC. 0800 2524-2326</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalVerPedido


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  modal: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  texto: {
    marginBottom: 5,
    textAlign: 'left',
    fontSize: 13
  },
  botao: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FF7A00',
    margin: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
