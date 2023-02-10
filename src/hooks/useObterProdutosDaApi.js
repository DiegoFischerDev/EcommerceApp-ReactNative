import { useState, useEffect } from 'react'
import { obterProdutos } from '../serviços'

export const useObterProdutosDaApi = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    obterProdutos('/produtos', setProdutos)
  }, [])

  console.log('Solicitou Produtos para API')
  return [produtos, setProdutos]
}
