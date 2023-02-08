import react from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const salvarLocalmente = async (itens) => {
  try {
    await AsyncStorage.setItem("carrinho", JSON.stringify(itens))
  } catch (error) {
    console.error(error)
  }
}

export const obterItensDoCarrinhoArmazenadosLocalmente = async (setItens) => {
  const itens= await AsyncStorage.getItem("carrinho")

  if (!!itens) {
    setItens(JSON.parse(itens))
  }
}

export const removerLocalmente = async () => {
  try {
    await AsyncStorage.removeItem("carrinho")
  } catch (error) {
    console.error(error)
  }
}