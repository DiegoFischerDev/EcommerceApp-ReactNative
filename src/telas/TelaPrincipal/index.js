import React from "react";
import imagem from "../../../assets/tela_principal.png";
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";

function TelaPrincipal() {
  return (
      <View style={estilos.main_view}>
      
      <StatusBar
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor = "#0066CC"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />

      <Image source={imagem} style={estilos.imagem} />
      <Text style={estilos.h1}>Todas as suas compras num só app!</Text>
      <Text style={estilos.h2}>Venda seus produtos da maneira mais inteligente e rápida para obter dinheiro imediato e uma consciência mais limpa.</Text>

      <View style={estilos.view_buttons}>
        <TouchableOpacity style={estilos.button_login}>
          <Text style={estilos.color_white}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button_signup}>
          <Text style={estilos.color_orange}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  main_view: {
    flex: 1
  },

  imagem: {
    marginTop: 120,
    width: 360,
    height: 360
  },

  h1: {
    fontSize: 35,
    marginHorizontal: 24
  },

  h2: {
    fontSize: 16,
    padding: 24,
    textAlign: 'justify'
  },

  view_buttons: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button_login: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    width: 175,
    height: 45,
    borderRadius: 20,
    marginStart: 24
  },

  button_signup: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF7A00',
    width: 175,
    height: 45,
    borderRadius: 20,
    marginEnd: 24
  },

  color_white: {
    color: 'white'
  },

  color_orange: {
    color: 'orange'
  }
})

export default TelaPrincipal;