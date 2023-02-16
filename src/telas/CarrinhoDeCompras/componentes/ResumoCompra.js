import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View,  Text, TouchableOpacity,  TextInput } from 'react-native'
import FinalizarCompraModal from './FinalizarCompraModal';
import { GlobalContext } from '../../../context/GlobalContext';
import { useObterPedidosDaApi } from '../../../hooks/useObterPedidosDaApi';
import axios from "axios";
import { baseURL } from "../../../serviços";

const ResumoCompra = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const { subtotal, itens } = useContext(GlobalContext);

  const[voucher, setVoucher] = useState(0)
  let taxaDeEntrega = subtotal === 0 ? 0 : 20;
  if (subtotal > 200) {taxaDeEntrega = 0};
  let total = subtotal - voucher + taxaDeEntrega;

  const [pedidos, setPedidos] = useObterPedidosDaApi([])

  let date = new Date()
  date.setDate(date.getDate()+3)
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric", 
    };
  let dateNewFormat = new Intl.DateTimeFormat('pt-BR', options).format(date)

  let pedido = {
    "id": "230207"+(pedidos.length+1),
    "itens": itens,
    "subTotal": subtotal,
    "voucher": voucher,
    "taxaDeEntrega": taxaDeEntrega,
    "valorTotalDoPedido": total,
    "status": "Aguardando Confirmação da Loja",
    "previsãoDeEntrega": dateNewFormat
  }

  function calculaVoucher() {
    if (total > 400) {setVoucher(100)}
  }

  async function EnviarPedido (pedido) {
    await axios.post(baseURL+'/pedidos', pedido);
  }


  return (
    <View >

      <View style={estilos.view1}>
          <View style={estilos.inputBox}>
            <TextInput
              style={{}}
              placeholder="Código Promocional"
              keyboardType="numeric" // "text"
              defaultValue=""
              onChangeText={() => {}}
              placeholderTextColor={'#CACACA'}
            />
          </View>
          <TouchableOpacity onPress={()=>{calculaVoucher()}} style={estilos.firstOrangeButton}><Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Aplicar</Text></TouchableOpacity>
        </View>

      <View style={estilos.text}>
        <Text style={{ fontSize: 16, color: '#A6A6A6' }}>Sub-total</Text>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>R$ {subtotal}</Text>
      </View>

      <View style={estilos.text}>
        <Text style={{ fontSize: 16, color: '#A6A6A6' }}>Voucher</Text>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>-R$ {voucher}</Text>
      </View>

      <View style={estilos.text}>
        <Text style={{ fontSize: 16, color: '#A6A6A6' }}>Taxa de Entrega</Text>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>R$ {taxaDeEntrega}</Text>
      </View>

      <View
        style={{
          width: '100%',
          borderColor: '#D9D9D9',
          borderWidth: 1,
          marginTop: 16
        }}
      ></View>

      <View style={estilos.text}>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>Total</Text>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>R$ {total}</Text>
      </View>

      <FinalizarCompraModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <TouchableOpacity style={estilos.orangeButton} onPress={() => {setModalVisible(true); EnviarPedido(pedido);}}>
        <Text style={estilos.textoBotao}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResumoCompra

const estilos = StyleSheet.create({

  view1: {
    width: '100%',
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputBox: {
    height: 45,
    width: '67%',
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23,

    backgroundColor: 'white',
  },

  firstOrangeButton: {
    backgroundColor: '#FF7A00',
    height: 45,
    width: '29%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },

  orangeButton: {
    backgroundColor: '#FF7A00',
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    height: 45,
    borderRadius: 10,
    marginTop: 32,
    alignSelf: 'center',
    marginBottom: 60
  },

  textoBotao: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold"
},
})
