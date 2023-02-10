import { useState, useEffect } from 'react'
import { obterAnuncios } from '../serviços'

export const useObterAnunciosDaApi = () => {
  const [anuncios, setAnuncios] = useState([])

  useEffect(() => {
    obterAnuncios('/anuncios', setAnuncios)
  }, [])

  console.log('Solicitou Anuncios para API')
  return [anuncios, setAnuncios]
}
