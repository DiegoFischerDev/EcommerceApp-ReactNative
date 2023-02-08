import { useEffect, useState } from "react";
import { api } from "../serviços";

export function useObterPedidosDaApi () {

  const [pedidos, setPedidos] = useState([])

  async function ObterPedidos (setPedidos) {
    await api.get("/pedidos").then((response) => setPedidos(response.data))
    .catch((erro) => console.error(erro));
  }

  useEffect (() => {
    ObterPedidos(setPedidos)
  }, [pedidos]);

  return [pedidos, setPedidos]
}