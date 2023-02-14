import { useState, useEffect } from 'react'
import { obterProdutos } from '../serviços'

export const useObterProdutosDaApi = (Url) => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    obterProdutos(Url, setProdutos)
  }, [])

  console.log('Solicitou Produtos para API')
  return [produtos, setProdutos]
}
