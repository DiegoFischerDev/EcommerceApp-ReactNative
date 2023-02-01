import React from 'react'
import { StyleSheet, View,  Text, TouchableOpacity,  TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ResumoCompra = () => {

  const navigation = useNavigation();

  function FinalizarCompra() {
    alert("Compra Finalizada")
    navigation.navigate("Home")
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
          <TouchableOpacity style={estilos.firstOrangeButton}><Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Aplicar</Text></TouchableOpacity>
        </View>

      <View style={estilos.text}>
        <Text style={{ fontSize: 16, color: '#A6A6A6' }}>Sub-total</Text>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>R$ 2.600</Text>
      </View>

      <View style={estilos.text}>
        <Text style={{ fontSize: 16, color: '#A6A6A6' }}>Voucher</Text>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>-R$ 100</Text>
      </View>

      <View style={estilos.text}>
        <Text style={{ fontSize: 16, color: '#A6A6A6' }}>Taxa de Entrega</Text>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>R$ 20</Text>
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
        <Text style={{ fontSize: 16, fontWeight: '700' }}>R$ 2.520</Text>
      </View>

      <TouchableOpacity onPress={FinalizarCompra} style={estilos.orangeButton}>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>
          Finalizar Compra
        </Text>
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
})
