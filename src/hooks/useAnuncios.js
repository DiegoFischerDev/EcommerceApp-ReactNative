import react, { useEffect, useState } from "react";
import { api } from "../serviços";


export const useAnuncios = (estadoInicial) => {

  const obterAnuncios = async (setAnuncios) => {
    await api.get("/anuncios").then((response) => setAnuncios(response.data))
    .catch((erro) => console.error(erro));
  }

  const [anuncios, setAnuncios] = useState(estadoInicial);

  useEffect (() => {
    obterAnuncios(setAnuncios)
  }, []);

  return [anuncios, setAnuncios];
}