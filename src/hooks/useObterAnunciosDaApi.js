import { useEffect } from "react";
import { api } from "../serviços";

export function useObterAnunciosDaApi (setAnuncios) {
  
  async function ObterAnuncios (setAnuncios) {
  await api.get("/anuncios").then((response) => setAnuncios(response.data))
  .catch((erro) => console.error(erro));
  }
  
  useEffect (() => {
    ObterAnuncios(setAnuncios)
  }, []);

}