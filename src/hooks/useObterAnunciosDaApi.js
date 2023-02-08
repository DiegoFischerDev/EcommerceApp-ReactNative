import { useEffect, useState } from "react";
import { api } from "../serviços";

export function useObterAnunciosDaApi () {

  const [anuncios, setAnuncios] = useState([])
  
  async function ObterAnuncios (setAnuncios) {
    await api.get("/anuncios").then((response) => setAnuncios(response.data))
    .catch((erro) => console.error(erro));
  }
  
  useEffect (() => {
    ObterAnuncios(setAnuncios)
  }, [anuncios]);

  return [anuncios, setAnuncios]
}