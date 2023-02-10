import { useState, useEffect } from 'react'
import { obterPedidos } from '../serviços'

export const useObterPedidosDaApi = () => {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    obterPedidos('/pedidos', setPedidos)
  }, [])

  console.log('Solicitou Pedidos para API')
  return [pedidos, setPedidos]
}
