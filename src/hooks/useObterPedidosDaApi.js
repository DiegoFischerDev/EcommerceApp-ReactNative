import { useEffect } from "react";
import { api } from "../serviços";

export function useObterPedidosDaApi (setPedidos) {

  async function ObterPedidos (setPedidos) {
    await api.get("/pedidos").then((response) => setPedidos(response.data))
    .catch((erro) => console.error(erro));
  }

  useEffect (() => {
    ObterPedidos(setPedidos)
  }, []);
}