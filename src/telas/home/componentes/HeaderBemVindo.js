import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import usuarioIcone from '../../../../assets/usuario_icone.png'
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';

const HeaderBemVindo = ({UsuarioName}) => {

  const [icone, setIcone] = useState(usuarioIcone);

  const obterImagemDoPerfil = async () => {
    const jsonValue = await AsyncStorage.getItem("imagemDoPerfil");
    const dados = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (dados) {setIcone(dados)}
    return dados;
}

useEffect(() => {
  obterImagemDoPerfil();
}, [])

  async function salvarImagemLocalmente(imagem) {
    const jsonValue = JSON.stringify(imagem);
    await AsyncStorage.setItem("imagemDoPerfil", jsonValue).catch((erro) => console.error(erro));
  }


  const selecionarImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        allowsMultipleSelection: false,
        quality: 0.5,
    });

    if (!result.canceled) {
        setIcone(result.assets[0])
        salvarImagemLocalmente(result.assets[0])
    } else {
        alert('Você não selecionou nenhuma imagem!');
    }
  };

  return (

  <View style={estilos.view2}>
      <TouchableOpacity onPress={selecionarImagem}>
        <Image source={icone} style={estilos.iconeUsuario} />
      </TouchableOpacity>
    <View>
      <Text style={{ fontSize: 10 }}>Bem-Vindo!</Text>
      <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{UsuarioName}</Text>
    </View>

  </View>

  )
}

export default HeaderBemVindo

const estilos = StyleSheet.create({

  view2: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  iconeUsuario: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
}

})