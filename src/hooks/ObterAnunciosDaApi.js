import { api } from "../serviços";

export async function ObterAnunciosDaApi (setAnuncios) {
  await api.get("/anuncios").then((response) => setAnuncios(response.data))
  .catch((erro) => console.error(erro));
}