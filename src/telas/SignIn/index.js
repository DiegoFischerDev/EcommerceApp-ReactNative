import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, StatusBar, Linking, TextInput,
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

function SingIn() {

  const navigation = useNavigation();

  function loginButton () {
    navigation.navigate('Loja')
  }


  return (
    <View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <View
        style={{ height: 150, width: '100%', backgroundColor: '#FF7A00' }}
      ></View>

      <View style={{ flexDirection: 'row', paddingHorizontal: 22 }}>
        <TouchableOpacity style={[estilos.buttonLogin, estilos.buttonSelected]}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.buttonCadastro}>
          <Text>Cadastro</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginVertical: 30,
          marginLeft: 24
        }}
      >
        Sign In
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginLeft: 24, fontSize: 16 }}>
          Bem-vindo! Não possui uma conta?
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 16, color: '#FF7A00' }} onPress={() => Linking.openURL('http://###')}>
          Sign Up
        </Text>
      </View>

      <TextInput style={estilos.inputBox} placeholder="E-mail" />
      <TextInput style={[estilos.inputBox, { marginTop: 19 }]} placeholder="Senha" secureTextEntry="true"/>

      <TouchableOpacity style={estilos.buttonOrange} onPress={() => { navigation.navigate("TabRotas") }}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>

      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, marginTop: 17, alignItems: 'center'}}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Mantenha-me conectado</Text>
        </View>
        <View>
          <Text style={{ color: 'orange' }}>Esqueci a senha</Text>
        </View>
      </View>

      <View style={{flexDirection:'row', paddingHorizontal: 20, alignItems: 'center', justifyContent:'space-between', marginVertical: 46}}>
        <View style={{height:1, width:'45%', borderBottomColor:'#D9D9D9', borderBottomWidth:1 }}></View>
        <Text style={{color:'orange', fontSize: 15}}>OR</Text>
        <View style={{height:1, width:'45%', borderBottomColor:'#D9D9D9', borderBottomWidth:1 }}></View>
      </View>

      <TouchableOpacity style={[estilos.inputBox, {marginTop:0, justifyContent:'center'}]}>
      <MaterialCommunityIcon name="google" size={20} color="#000000" />
        <Text style={{marginLeft: 10}}>Login com Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[estilos.inputBox, {marginTop:0, justifyContent:'center', marginTop: 18}]}>
        <MaterialCommunityIcon name="apple" size={25} color="#000000" />
        <Text style={{marginLeft: 10}}>Login com Apple</Text>
      </TouchableOpacity>


    </View>
  )
}

const estilos = StyleSheet.create({

  buttonLogin: {
    fontWeight: 700,
    height: 60,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderColor: '#D9D9D9'
  },

  buttonCadastro: {
    fontWeight: 'bold',
    height: 60,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderColor: '#D9D9D9'
  },

  buttonSelected: {
    borderColor: '#FF7A00'
  },

  inputBox: {
    height: 50,
    marginTop: 37,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 10,
    paddingHorizontal: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  buttonOrange: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#FF7A00',
    marginHorizontal: 24,
    marginTop: 29,
    borderRadius: 10
  }
})

export default SingIn
