import react, { useEffect, useState } from "react";
import { obterAnuncios } from "../serviços";

export const useAnuncios = (estadoInicial) => {
  const [anuncios, setAnuncios] = useState(estadoInicial);

  useEffect (() => {
    obterAnuncios(setAnuncios)
  }, []);

  return [anuncios, setAnuncios];
}