import axios from "axios";

const api = axios.create({
  baseURL: "https://a907-187-114-219-138.sa.ngrok.io"
})

export const obterProdutos = async (setProdutos) => {
  await api.get("/produtos").then((response) => setProdutos(response.data))
  .catch((erro) => console.error(erro));
}