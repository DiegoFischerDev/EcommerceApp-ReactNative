import { useEffect, useState } from "react";
import { api } from "../serviços";

export function useObterProdutosDaApi () {

  const [produtos, setProdutos] = useState([])

  async function ObterProdutos (setProdutos) {
    await api.get("/produtos").then((response) => setProdutos(response.data))
    .catch((erro) => console.error(erro));
  }

  useEffect (() => {
    ObterProdutos(setProdutos)
  }, [produtos]);

  return [produtos, setProdutos]
}