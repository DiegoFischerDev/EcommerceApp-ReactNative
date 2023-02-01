import react, { useEffect, useState } from "react";
import { api } from "../serviços";

export const useProdutos = (estadoInicial) => {

  const obterProdutos = async (setProdutos) => {
    await api.get("/produtos").then((response) => setProdutos(response.data))
    .catch((erro) => console.error(erro));
  }

  const [produtos, setProdutos] = useState(estadoInicial);

  useEffect (() => {
    obterProdutos(setProdutos)
  }, []);

  return [produtos, setProdutos];
}