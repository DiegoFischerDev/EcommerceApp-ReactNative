import { useEffect } from "react";
import { api } from "../serviços";

export function useObterProdutosDaApi (setProdutos) {

  async function ObterProdutos (setProdutos) {
    await api.get("/produtos").then((response) => setProdutos(response.data))
    .catch((erro) => console.error(erro));
  }

  useEffect (() => {
    ObterProdutos(setProdutos)
  }, []);
}