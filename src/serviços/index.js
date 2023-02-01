import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/" // http://localhost:3000/
})

export const obterProdutos = async (setProdutos) => {
  await api.get("/produtos").then((response) => setProdutos(response.data))
  .catch((erro) => console.error(erro));
}

export const obterAnuncios = async (setAnuncios) => {
  await api.get("/anuncios").then((response) => setAnuncios(response.data))
  .catch((erro) => console.error(erro));
}